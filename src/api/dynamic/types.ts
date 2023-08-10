export interface DynamicData {
  point_id: number;
  code: string;
  prices: Price[];
  status: Status;
}

export interface Price {
  unit: string;
  ts: string;
  literal: string;
  price: string;
}

export interface Status {
  availability: 0 | 1;
  status: 0 | 1;
  ts: string;
}
