import { ROOT_ENDPOINT } from "../../constants";
import { Pool } from "./types";

export const getPool = async (): Promise<Pool[]> => {
  const response = await fetch(`${ROOT_ENDPOINT}/data/pool.json`);
  const { data } = await response.json();
  return data;
};