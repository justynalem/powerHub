import { useQuery } from '@tanstack/react-query';
import { getDynamicData, getPoints, getPool, getStations } from '../../api';
//@ts-expect-error geodist does not have type definitions
import geodist from 'geodist';
import { Point, StationData } from './Dashboard.types';
import { useCallback, useEffect, useMemo, useState } from 'react';
// import { useDebounce } from "usehooks-ts";
import {
  closedDrawerWidth,
  drawerWidth,
  stationInfoDrawerWidth,
} from '../../theme';

export const useDashboardEffects = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  const [isStationInfoOpen, setIsStationInfoOpen] = useState(false);
  const [distanceToStation, setDistanceToStation] = useState<number>(10);
  const [userCoordinates, setUserCoordinates] = useState<[number, number]>([
    0, 0,
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (geoPosition) => {
        const { latitude, longitude } = geoPosition.coords;
        setUserCoordinates([latitude, longitude]);
      },
      (error) => {
        console.error('Error fetching position:', error);
      },
    );
  }, []);

  const onDrawerOpenChange = useCallback((isOpen: boolean) => {
    setIsDrawerOpened(isOpen);
  }, []);

  const handleStationBoxClick = (stationId: number) => () => {
    setSelectedStation(stationId);
    if (!isStationInfoOpen) setIsStationInfoOpen(true);
  };

  const handleStationInfoOpen = () => {
    setIsStationInfoOpen(false);
  };

  const handleSliderChange = (_: Event, value: number | number[]) => {
    setDistanceToStation(Array.isArray(value) ? value[0] : value);
  };

  const getWidthToDecrement = () => {
    if (isDrawerOpened && !isStationInfoOpen) return drawerWidth;
    if (isDrawerOpened && isStationInfoOpen)
      return `${
        parseFloat(drawerWidth) + parseFloat(stationInfoDrawerWidth)
      }rem`;
  };

  const getWithToDecrement2 = () => {
    if (!isDrawerOpened && isStationInfoOpen) return stationInfoDrawerWidth;
    if (!isDrawerOpened && !isStationInfoOpen) return closedDrawerWidth;
  };

  const dynamicStationsQuery = useQuery({
    queryKey: ['stationsDynamic'],
    queryFn: getDynamicData,
    cacheTime: 15 * 60 * 1000,
    staleTime: 15 * 60 * 1000,
  });

  const pointsQuery = useQuery({ queryKey: ['points'], queryFn: getPoints });
  const poolQuery = useQuery({ queryKey: ['pool'], queryFn: getPool });
  const stationsQuery = useQuery({
    queryKey: ['stations'],
    queryFn: getStations,
  });

  const [selectedStation, setSelectedStation] = useState<number | null>(null);

  const stations: StationData[] = useMemo(() => {
    if (!stationsQuery.data || !pointsQuery.data || !poolQuery.data) return [];
    return stationsQuery.data
      .filter(({ latitude, longitude }) => {
        const [lat, lon] = userCoordinates;
        return geodist(
          { lat: latitude, lon: longitude },
          { lat, lon },
          { unit: 'km', limit: distanceToStation },
        );
      })
      .map(({ id, pool_id, latitude, longitude, location: { city } }) => {
        const [lat, lon] = userCoordinates;
        const { house_number, operating_hours, postal_code, street, name } =
          poolQuery.data.find(({ id }) => id === pool_id) ?? {};

        const points: Point[] = pointsQuery.data
          .filter(({ station_id }) => station_id === id)
          .map(({ connectors, id: pointID }) => {
            const { prices, status } =
              (dynamicStationsQuery.data ?? []).find(
                ({ point_id }) => point_id === pointID,
              ) ?? {};
            return {
              id: pointID,
              connectors: connectors.map(({ cable_attached, power }) => ({
                cableAttached: cable_attached,
                power,
              })),
              prices: prices ?? [],
              status: status ?? {},
            };
          });
        const { maxPower, minPrice } = points.reduce(
          (acc, { connectors, prices }) => {
            const minPrice = prices.reduce((acc, { price, unit }) => {
              if (unit !== 'kWh') return acc;
              if (acc === 0) {
                return +price;
              }
              return acc < +price ? acc : +price;
            }, 0);
            const maxPower = connectors.reduce(
              (acc, { power }) => (acc > power ? acc : power),
              0,
            );
            if (acc.maxPower < maxPower) {
              acc.maxPower = maxPower;
            }
            if (acc.minPrice === 0) {
              acc.minPrice = minPrice;
            }
            if (acc.minPrice > minPrice) {
              acc.minPrice = minPrice;
            }
            return acc;
          },
          { maxPower: 0, minPrice: 0 },
        );
        return {
          distanceFromUser: geodist(
            { lat: latitude, lon: longitude },
            { lat, lon },
            { unit: 'km' },
          ),
          name,
          address: {
            city,
            houseNumber: house_number ?? 'n/a',
            houseNumberAddition: '',
            postalCode: postal_code ?? 'n/a',
            street: street ?? 'n/a',
          },

          points,
          coordinates: {
            latitude,
            longitude,
          },
          id,
          operatingHours:
            operating_hours?.map(({ from_time, to_time, weekday }) => ({
              from: from_time,
              to: to_time,
              weekday,
            })) ?? [],
          accessibility: '',
          maxPower,
          minPrice,
        };
      })
      .sort((a, b) => {
        return a.distanceFromUser - b.distanceFromUser;
      });
  }, [
    stationsQuery.data,
    pointsQuery.data,
    poolQuery.data,
    dynamicStationsQuery.data,
    userCoordinates,
    distanceToStation,
  ]);

  const selectedStationData = useMemo(() => {
    if (!selectedStation) return null;

    return stations.find(({ id }) => id === selectedStation) ?? null;
  }, [stations, selectedStation]);

  return {
    stations,
    selectedStationData,
    distanceToStation,
    isDrawerOpened,
    isStationInfoOpen,
    setSelectedStation,
    onDrawerOpenChange,
    handleStationBoxClick,
    handleSliderChange,
    getWidthToDecrement,
    getWithToDecrement2,
    handleStationInfoOpen,
  };
};
