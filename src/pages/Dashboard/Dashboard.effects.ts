import { useQuery } from "@tanstack/react-query";
import { getDynamicData, getPoints, getPool, getStations } from "../../api";
import geodist from "geodist";
import { Point, StationData } from "./Dashboard.types";
import { useMemo } from "react";

type UseDashboardEffectsType = {
  distance: number;
  userCoordinates: [number, number];
};

export const useDashboardEffects = (
  {
    distance = 15,
    userCoordinates = [53.1274025, 23.1853892],
  }: UseDashboardEffectsType = {} as UseDashboardEffectsType
) => {
  const dynamicStationsQuery = useQuery({
    queryKey: ["stationsDynamic"],
    queryFn: getDynamicData,
    cacheTime: 15 * 60 * 1000,
    staleTime: 15 * 60 * 1000,
  });

  const pointsQuery = useQuery({ queryKey: ["points"], queryFn: getPoints });
  const poolQuery = useQuery({ queryKey: ["pool"], queryFn: getPool });
  const stationsQuery = useQuery({
    queryKey: ["stations"],
    queryFn: getStations,
  });

  const stations: StationData[] = useMemo(() => {
    if (!stationsQuery.data || !pointsQuery.data || !poolQuery.data) return [];
    return stationsQuery.data
      .filter(({ latitude, longitude }) => {
        const [lat, lon] = userCoordinates;
        return geodist(
          { lat: latitude, lon: longitude },
          { lat, lon },
          { unit: "km", limit: distance }
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
                ({ point_id }) => point_id === pointID
              ) ?? {};
            return {
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
              if (unit !== "kWh") return acc;
              if (acc === 0) {
                return +price;
              }
              return acc < +price ? acc : +price;
            }, 0);
            const maxPower = connectors.reduce(
              (acc, { power }) => (acc > power ? acc : power),
              0
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
          { maxPower: 0, minPrice: 0 }
        );
        return {
          distanceFromUser: geodist(
            { lat: latitude, lon: longitude },
            { lat, lon },
            { unit: "km" }
          ),
          name,
          address: {
            city,
            houseNumber: house_number ?? "n/a",
            houseNumberAddition: "",
            postalCode: postal_code ?? "n/a",
            street: street ?? "n/a",
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
          accessibility: "",
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
    distance,
  ]);

  return { stations };
};
