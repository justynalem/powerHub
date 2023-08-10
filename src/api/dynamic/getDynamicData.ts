import { API_KEY, ROOT_ENDPOINT } from "../../constants";
import { DynamicData } from "./types";

export const getDynamicData = async (): Promise<DynamicData[]> => {
  const response = await fetch(`${ROOT_ENDPOINT}/api/dynamic/${API_KEY}`);
  const { data } = await response.json();
  return data;
};