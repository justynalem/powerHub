import { MapContainer, TileLayer } from "react-leaflet";
import { useThemeContext } from "../../theme";

import "leaflet/dist/leaflet.css";

const mapStyleUrls = {
  light: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png",
  dark: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png",
};

export const Map = () => {
  const { mode } = useThemeContext();

  return (
    <MapContainer center={[53.143291, 23.164089]} zoom={17} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={mode === "light" ? mapStyleUrls.light : mapStyleUrls.dark}
      />
    </MapContainer>
  );
};
