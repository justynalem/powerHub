interface StationAddress {
  city: string;
  street?: string;
  houseNumber?: string;
  houseNumberAddition?: string;
  postalCode?: string;
}

interface OperatingHoursInDay {
  from: string;
  to: string;
  weekday: number;
}

interface Connector {
  cableAttached: boolean;
  power: number;
}

export interface Point {
  connectors: Connector[];
  status: Status;
  prices: Price[];
}

interface Status {
  availability?: 0 | 1;
  status?: 0 | 1;
  ts?: string;
}
interface Price {
  literal: string;
  unit: string;
  price: string;
  ts: string;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface StationData {
  id: number;
  coordinates: Coordinates;
  address: StationAddress;
  operatingHours: OperatingHoursInDay[];
  accessibility?: string;
  points: Point[];
}

