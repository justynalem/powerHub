import {
  DrawerInfoText,
  MainInfoBox,
  StyledInfoStationDrawer,
  TableBox,
  TableText,
  TableTextBold,
  TableTextInfo,
} from "./StationInfoDrawer.styles";
import { StationData } from "../../pages/Dashboard/Dashboard.types";
import { DrawerHeaderText } from "../../ui/Drawer/Drawer.styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { StyledIconButton } from "../../ui/Icons/Icons.styles";

type StationInfoDrawerProps = {
  isOpen: boolean;
  onClose: VoidFunction;
  stationData: StationData | null;
};

export const StationInfoDrawer = ({
  isOpen,
  onClose,
  stationData,
}: StationInfoDrawerProps) => {
  if (!stationData) {
    return null;
  }
  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const { address, points, operatingHours: hours } = stationData;
  const currentDay = new Date().getDay();

  return (
    <StyledInfoStationDrawer variant='permanent' anchor='right' open={isOpen}>
      <StyledIconButton onClick={onClose} sx={{ position: "absolute", top: "20", left: "20" }}><CloseIcon /></StyledIconButton>
      <MainInfoBox>
        <DrawerHeaderText>{stationData?.name}</DrawerHeaderText>
        <DrawerInfoText>
          {address.postalCode} {address.city}
        </DrawerInfoText>
        <DrawerInfoText>
          ul.{address.street} {address.houseNumber}
          {address.houseNumberAddition}
        </DrawerInfoText>
        {stationData.accessibility ? (
          <DrawerInfoText>
            Accessibility details: {stationData.accessibility}
          </DrawerInfoText>
        ) : null}
      </MainInfoBox>


      <TableBox>
        <DrawerInfoText sx={{ textAlign: "center", fontWeight: "bold" }}>Points Info</DrawerInfoText>
        <TableContainer sx={{ display: "flex", justifyContent: "center" }}>
          <Table sx={{ width: "75%" }}>
            <TableHead>
              <TableCell sx={{ width: "10%" }}>
                <TableTextBold>no.</TableTextBold>
              </TableCell>
              <TableCell>
                <TableTextBold>Max Power</TableTextBold>
              </TableCell>
              <TableCell>
                <TableTextBold>Price (kWh)</TableTextBold>
              </TableCell>
              <TableCell>
                <TableTextBold>Price (min)</TableTextBold>
              </TableCell>
              <TableCell>
                <TableTextBold>Status</TableTextBold>
              </TableCell>
            </TableHead>
            <TableBody>
              {points.map(({ connectors, prices, status, id }, index) => (
                <TableRow key={id}>
                  <TableCell><TableText>{index + 1}</TableText> </TableCell>
                  <TableCell>
                    {connectors.length < 1
                      ? <TableText>n/a</TableText>
                      : connectors.map(({ power }, index) => <TableText key={index}>{power}</TableText>)}
                  </TableCell>
                  <TableCell>
                    {prices.length < 1
                      ? <TableText>n/a</TableText>
                      : prices
                        .filter(({ unit }) => unit === "kWh")
                        .map(({ price }, index) => <TableText key={index}>{price}</TableText>)}
                  </TableCell>
                  <TableCell>
                    {prices.length < 1
                      ? <TableText>n/a</TableText>
                      : prices
                        .filter(({ unit }) => unit === "min")
                        .map(({ price }, index) => <TableText key={index}>{price}</TableText>)}
                  </TableCell>
                  <TableCell>
                    {status.status === 1 ? <TableText>Available </TableText> : <TableText>Not available </TableText>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableBox>

      <TableBox>
        <TableContainer sx={{ display: "flex", justifyContent: "center" }}>
          <Table sx={{ width: "75%" }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableTextBold>Week day</TableTextBold>
                </TableCell>
                <TableCell>
                  <TableTextBold>Opening hours</TableTextBold>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hours.map(({ from, to, weekday }) => (
                <TableRow key={weekday} sx={{ height: "15px" }}>
                  <TableCell>
                    {weekday === currentDay ? (
                      <TableTextInfo>{week[weekday - 1]} </TableTextInfo>
                    ) : (
                      <TableText>{week[weekday - 1]}</TableText>
                    )}
                  </TableCell>
                  <TableCell>
                    {weekday === currentDay ? (
                      <TableTextInfo>
                        {from} -{to}
                      </TableTextInfo>
                    ) : (
                      <TableText>
                        {from} -{to}
                      </TableText>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableBox>
    </StyledInfoStationDrawer>
  );
};
