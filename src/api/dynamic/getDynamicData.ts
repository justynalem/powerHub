import { API_KEY } from "../../constants";
import { DynamicData } from "./types";

export const getDynamicData = async (): Promise<DynamicData[]> => {
  const response = await fetch(`/api/dynamic/${API_KEY}`);
  const { data } = await response.json();
  return data;
};