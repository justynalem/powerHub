import {
  BottomStationContainer,
  DetailsContainer,
  DetailsInfo,
  DetailsTitle,
  NameStationContainer,
  StyledStationBox,
  StyledStationIcon,
  TopStationContainer,
} from "./StationBox.styles.";

type StationBoxProps = {
  name: string | undefined;
  distance: number | undefined;
  power: number | undefined;
  price: number | undefined;
  slots: number;
  onClick: VoidFunction;
};

export const StationBox = ({
  name,
  distance,
  slots,
  power,
  price,
  onClick
}: StationBoxProps) => {
  return (
    <StyledStationBox onClick={onClick}>
      <TopStationContainer>
        <StyledStationIcon />
        <DetailsContainer>
          <DetailsTitle>Distance</DetailsTitle>
          <DetailsInfo sx={{ fontSize: 32 }}>{distance} km</DetailsInfo>
        </DetailsContainer>
      </TopStationContainer>
      <NameStationContainer title={name}>
        {name}</NameStationContainer>
      <BottomStationContainer>
        <DetailsContainer>
          <DetailsTitle>Power</DetailsTitle>
          <DetailsInfo>{power}</DetailsInfo>
        </DetailsContainer>
        <DetailsContainer>
          <DetailsTitle>price</DetailsTitle>
          <DetailsInfo>{price === 0 ? "N/A" : `${price}`}</DetailsInfo>
        </DetailsContainer>
        <DetailsContainer>
          <DetailsTitle>slots</DetailsTitle>
          <DetailsInfo>{slots}</DetailsInfo>
        </DetailsContainer>
      </BottomStationContainer>
    </StyledStationBox>
  );
};
