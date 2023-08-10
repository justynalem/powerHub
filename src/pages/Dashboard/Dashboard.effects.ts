import { useQuery } from "@tanstack/react-query";
import { getDynamicData, getPoints, getPool, getStations } from "../../api";
import geodist from "geodist";
import { Point, StationData } from "./Dashboard.types";

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

  const stations: StationData[] = [];

  if (stationsQuery.data && pointsQuery.data && poolQuery.data) {
    const filteredStations: StationData[] = stationsQuery.data
      .filter(({ latitude, longitude }) => {
        const [lat, lon] = userCoordinates;
        return geodist(
          { lat: latitude, lon: longitude },
          { lat, lon },
          { unit: "km", limit: distance }
        );
      })
      .map(({ id, pool_id, latitude, longitude, location: { city } }) => {
        const { house_number, operating_hours, postal_code, street } =
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

        return {
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
        };
      });

    stations.push(...filteredStations);
  }

  return { stations };
};
