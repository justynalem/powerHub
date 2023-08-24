import { styled, lighten } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import EvStationIcon from "@mui/icons-material/EvStation";

export const StyledStationBox = styled(Box)(({ theme }) => ({
  width: "12.5rem",
  height: "11.5rem",
  cursor: "pointer",
  borderRadius: "2rem",
  padding: "1rem",
  margin: "0 auto",
  backgroundColor: lighten(theme.palette.background.default, 0.02),
  display: "grid",
  gridTemplateRows: "repeat(3, 1fr)",
  ":hover": {
    backgroundColor: theme.palette.background.paper,
  }
}));

export const StyledStationIcon = styled(EvStationIcon)(({ theme }) => ({
  fontSize: "5rem",
  color: theme.palette.info.light,
}));

export const BottomStationContainer = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
}));

export const DetailsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const DetailsTitle = styled(Typography)(({ theme }) => ({
  width: "100%",
  textTransform: "capitalize",
  fontSize: "0.8rem",
  fontWeight: theme.typography.fontWeightLight,
  color: theme.palette.primary.contrastText
}));

export const DetailsInfo = styled(Typography)(({ theme }) => ({
  width: "100%",
  fontSize: "1rem",
  fontWeight: "500",
  color: theme.palette.primary.contrastText
}));

export const TopStationContainer = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
}));

export const NameStationContainer = styled(Box)({
  maxHeight: "3rem",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});