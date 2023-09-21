import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useThemeContext } from '../../theme';
import { Icon, divIcon, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const mapStyleUrls = {
  light: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png',
  dark: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png',
};

const stationMarker = new Icon({
  iconUrl: '/stationIcon.png',
  iconSize: [45, 45],
});

const carMarker = new Icon({
  iconUrl: 'carIcon.png',
  iconSize: [45, 45],
});

const createClusterCustomIcon = function (cluster: any) {
  return divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: 'custom-marker-cluster',
    iconSize: point(33, 33, true),
  });
};

const MapController = () => {
  const map = useMap();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (geoPosition) => {
        const { latitude, longitude } = geoPosition.coords;
        map.setView([latitude, longitude]);
      },
      (error) => {
        console.error('Error fetching position:', error);
      },
    );
  }, [map]);

  return null;
};

type Marker = {
  id: number;
  coordinates: [number, number];
  name: string | undefined;
  distanceFromUser: number | undefined;
};

type MapProps = {
  markers?: Marker[];
};

export const Map = ({ markers = [] }: MapProps) => {
  const { mode } = useThemeContext();
  const [userPosition, setUserPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (geoPosition) => {
        const { latitude, longitude } = geoPosition.coords;
        setUserPosition([latitude, longitude]);
      },
      (error) => {
        console.error('Error fetching position:', error);
      },
    );
  }, []);

  return (
    <>
      <MapContainer center={userPosition} zoom={15} className="map-container">
        <MapController />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={mode === 'light' ? mapStyleUrls.light : mapStyleUrls.dark}
        />
        <Marker position={userPosition} icon={carMarker} />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {markers.map(({ coordinates, id, name, distanceFromUser }) => (
            <Marker key={id} position={coordinates} icon={stationMarker}>
              <Popup>
                {name} - {distanceFromUser}km
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
};
