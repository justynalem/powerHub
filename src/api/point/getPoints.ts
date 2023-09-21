import { Point } from './types';

export const getPoints = async (): Promise<Point[]> => {
  const response = await fetch(`/data/point.json`);
  const { data } = await response.json();
  return data;
};
