import { Map, Swiper } from '../../components';
import { Drawer, Slider, StationBox, StationInfoDrawer } from '../../ui';
import { useDashboardEffects } from './Dashboard.effects';
import {
  DashboardContainer,
  DistanceContainer,
  MainContainer,
  MapContainer,
  SliderContainer,
  StyledDistanceInfoText,
  StyledSelectContainer,
} from './Dashboard.styles';

export const Dashboard = () => {
  const {
    stations,
    selectedStationData,
    distanceToStation,
    isStationInfoOpen,
    onDrawerOpenChange,
    handleStationBoxClick,
    handleSliderChange,
    handleStationInfoOpen,
  } = useDashboardEffects();

  return (
    <DashboardContainer>
      <StyledSelectContainer>
        <DistanceContainer>
          <StyledDistanceInfoText>Distance</StyledDistanceInfoText>
          <Slider
            value={distanceToStation}
            onSliderChange={handleSliderChange}
          />
        </DistanceContainer>
      </StyledSelectContainer>
      <Drawer onOpenChange={onDrawerOpenChange} />
      <MainContainer>
        <MapContainer>
          <Map
            markers={stations.map(
              ({ id, coordinates, name, distanceFromUser }) => ({
                distanceFromUser,
                name,
                id,
                coordinates: [coordinates.latitude, coordinates.longitude],
              })
            )}
          />
        </MapContainer>
      </MainContainer>
      <SliderContainer>
        <Swiper
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 8,
            },
            1680: {
              slidesPerView: 6,
              spaceBetween: 8,
            },
          }}
        >
          {stations.map(
            ({ id, name, distanceFromUser, points, maxPower, minPrice }) => (
              <StationBox
                key={id}
                name={name}
                distance={distanceFromUser}
                slots={points.length}
                power={maxPower}
                price={minPrice}
                onClick={handleStationBoxClick(id)}
              />
            )
          )}
        </Swiper>
      </SliderContainer>
      <StationInfoDrawer
        isOpen={isStationInfoOpen}
        onClose={() => handleStationInfoOpen()}
        stationData={selectedStationData}
      />
    </DashboardContainer>
  );
};
