import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DashboardContainer = styled(Box)(() => ({
  width: "100vw",
  height: "100vh",
}));

export const MainContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%"
}));

export const MapContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  zIndex: "1",
  position: "relative"
}));

export const SliderContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  zIndex: 2,
  transition: theme.transitions.create("all", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  })
}));