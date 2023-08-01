import { Map, Slider } from "../../components";
import { Drawer, StationBox } from "../../ui";
import { useState } from "react";
import { drawerWidth } from "../../theme";
import {
  DashboardContainer,
  MainContainer,
  MapContainer,
  SliderContainer,
} from "./Dashboard.styles";

const fakeStations = Array.from({
  length: 8
});

export const Dashboard = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const onDrawerOpenChange = (isOpen: boolean) => {
    setIsDrawerOpened(isOpen);
  };

  return (
    <DashboardContainer>
      <Drawer onOpenChange={onDrawerOpenChange} />
      <MainContainer>
        <MapContainer>
          <Map />
        </MapContainer>
        <SliderContainer
          sx={{
            width: isDrawerOpened ? `calc(100% - ${drawerWidth})` : "calc(100% - 65px)",
            backdropFilter: "blur(20px)",
            padding: "16px",
            transform: isDrawerOpened ? `translateX(${drawerWidth})` : "translateX(65px)",
          }}>
          <Slider spaceBetween={0} slidesPerView={5}>{fakeStations.map(() => <StationBox />)}</Slider>
        </SliderContainer>
      </MainContainer>
    </DashboardContainer>
  );
};
