export interface Station {
  authentication_methods: number[];
  latitude: number;
  longitude: number;
  payment_methods: number[];
  pool_id: number;
  id: number;
  images: unknown[];
  location: Location;
  ts: string;
  type: string;
}

export interface Location {
  city: string;
  community: string;
  district: string;
  province: string;
}
