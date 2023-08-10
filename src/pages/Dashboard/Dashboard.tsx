import { Map, Slider } from "../../components";
import { Drawer, StationBox } from "../../ui";
import { useCallback, useState } from "react";
import { closedDrawerWidth, drawerWidth } from "../../theme";
import {
  DashboardContainer,
  MainContainer,
  MapContainer,
  SliderContainer,
} from "./Dashboard.styles";
import { useDashboardEffects } from "./Dashboard.effects";

export const Dashboard = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const { stations } = useDashboardEffects();

  console.log(stations);

  const onDrawerOpenChange = useCallback((isOpen: boolean) => {
    setIsDrawerOpened(isOpen);
  }, []);

  return (
    <DashboardContainer>
      <Drawer onOpenChange={onDrawerOpenChange} />
      <MainContainer>
        <MapContainer>
          <Map markers={stations.map(({ id, coordinates }) => ({ id, coordinates: [coordinates.latitude, coordinates.longitude] }))} />
        </MapContainer>
        <SliderContainer
          sx={{
            width: isDrawerOpened ? `calc(100% - ${drawerWidth})` : `calc(100% - ${closedDrawerWidth})`,
            backdropFilter: "blur(20px)",
            padding: "16px",
            transform: isDrawerOpened ? `translateX(${drawerWidth})` : `translateX(${closedDrawerWidth})`,
          }}>
          <Slider
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}

          >{stations.map(({ id }) => <StationBox key={id} />)}</Slider>
        </SliderContainer>

      </MainContainer>
    </DashboardContainer>
  );
};
