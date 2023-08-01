import { Map } from "../../components";
import { Drawer } from "../../ui";
import { StationContainer } from "../../ui/StationBox/StationBoxContainer";
import { useState } from "react";
import { drawerWidth } from "../../theme";
import {
  DashboardContainer,
  MainContainer,
  MapContainer,
  SliderContainer,
} from "./Dashboard.styles";

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
          <StationContainer />
        </SliderContainer>
      </MainContainer>
    </DashboardContainer>
  );
};
