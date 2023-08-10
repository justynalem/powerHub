export interface Pool {
  operator_id: number;
  charging: boolean;
  filling: boolean;
  refilling: boolean;
  city: string;
  closing_hours: unknown[];
  elevation: number;
  features: string[];
  code: string;
  house_number: string;
  id: number;
  images: unknown[];
  legalized: boolean;
  latitude: number;
  longitude: number;
  name: string;
  operating_hours: OperatingHour[];
  postal_code: string;
  street: string;
  ts: string;
}

export interface OperatingHour {
  from_time: string;
  to_time: string;
  weekday: number;
}
