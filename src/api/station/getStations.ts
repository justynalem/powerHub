import { ROOT_ENDPOINT } from "../../constants";
import { Station } from "./types";

export const getStations = async (): Promise<Station[]> => {
  const response = await fetch(`${ROOT_ENDPOINT}/data/station.json`);
  const { data } = await response.json();
  return data;
};