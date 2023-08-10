import { ROOT_ENDPOINT } from "../../constants";
import { Point } from "./types";

export const getPoints = async (): Promise<Point[]> => {
  const response = await fetch(`${ROOT_ENDPOINT}/data/point.json`);
  const { data } = await response.json();
  return data;
};