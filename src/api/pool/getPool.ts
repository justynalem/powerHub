import { Pool } from './types';

export const getPool = async (): Promise<Pool[]> => {
  const response = await fetch(`/data/pool.json`);
  const { data } = await response.json();
  return data;
};
