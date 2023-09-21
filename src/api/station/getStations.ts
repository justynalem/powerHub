import { Station } from "./types";

export const getStations = async (): Promise<Station[]> => {
  const response = await fetch(`/data/station.json`);
  const { data } = await response.json();
  return data;
};