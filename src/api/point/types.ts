export interface Point {
  fuel_types: unknown[];
  gas_connector_interfaces: unknown[];
  hydrogen_refill_solutions: unknown[];
  station_id: number;
  charging_solutions: ChargingSolution[];
  connectors: Connector[];
  code: string;
  id: number;
  ts: string;
}

export interface ChargingSolution {
  mode: number;
  power: number;
}

export interface Connector {
  interfaces: number[];
  cable_attached: boolean;
  power: number;
  ts: string;
}
