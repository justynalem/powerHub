import { Map, Slider } from "../../components";
import { Drawer, StationBox, StationInfoDrawer } from "../../ui";
import { useCallback, useState } from "react";
import { closedDrawerWidth, drawerWidth, stationInfoDrawerWidth } from "../../theme";
import {
  DashboardContainer,
  MainContainer,
  MapContainer,
  SliderContainer,
} from "./Dashboard.styles";
import { useDashboardEffects } from "./Dashboard.effects";

export const Dashboard = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  const [isStationInfoOpen, setIsStationInfoOpen] = useState(false);
  const { stations, setSelectedStation, selectedStationData } = useDashboardEffects();

  const onDrawerOpenChange = useCallback((isOpen: boolean) => {
    setIsDrawerOpened(isOpen);
  }, []);


  const handleStationBoxClick = (stationId: number) => () => {
    setSelectedStation(stationId);
    if (!isStationInfoOpen) setIsStationInfoOpen(true);
  };

  const getWidthToDecrement = () => {
    if (isDrawerOpened && !isStationInfoOpen) return drawerWidth;
    if (isDrawerOpened && isStationInfoOpen) return `${parseFloat(drawerWidth) + parseFloat(stationInfoDrawerWidth)}rem`;
  };

  const getWithToDecrement2 = () => {
    if (!isDrawerOpened && isStationInfoOpen) return stationInfoDrawerWidth;
    if (!isDrawerOpened && !isStationInfoOpen) return closedDrawerWidth;
  };

  console.log(selectedStationData);
  return (
    <DashboardContainer>
      <Drawer onOpenChange={onDrawerOpenChange} />
      <MainContainer >
        <MapContainer>
          <Map
            markers={stations.map(({ id, coordinates }) => ({
              id,
              coordinates: [coordinates.latitude, coordinates.longitude],
            }))}
          />
        </MapContainer>
        <SliderContainer
          sx={{
            width: isDrawerOpened
              ? `calc(100% - ${getWidthToDecrement()})`
              : `calc(100% - ${getWithToDecrement2()})`,
            backdropFilter: "blur(20px)",
            transform: isDrawerOpened
              ? `translateX(${drawerWidth})`
              : `translateX(${closedDrawerWidth})`,
          }}>
          <Slider
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 7,
              },
            }}>
            {stations.map(({ id, name, distanceFromUser, points, maxPower, minPrice }) => (
              <StationBox
                key={id}
                name={name}
                distance={distanceFromUser}
                slots={points.length}
                power={maxPower}
                price={minPrice}
                onClick={handleStationBoxClick(id)}
              />
            ))}
          </Slider>
        </SliderContainer>
      </MainContainer>
      <StationInfoDrawer isOpen={isStationInfoOpen} onClose={() => setIsStationInfoOpen(false)} stationData={selectedStationData} />
    </DashboardContainer>
  );
};

