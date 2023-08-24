import { Box, Drawer, Typography } from "@mui/material";
import { Theme, CSSObject, styled } from "@mui/material/styles";
import InfoIcon from '@mui/icons-material/Info';
import { stationInfoDrawerWidth } from "../../theme";


const openedMixin = (theme: Theme): CSSObject => ({
  width: stationInfoDrawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: theme.palette.background.paper,
  borderBottomLeftRadius: "25px",
  borderTopLeftRadius: "25px",
  boxSizing: "border-box",
  borderColor: "transparent",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  borderColor: "transparent",
  backgroundColor: theme.palette.background.paper,
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: "0px",
  },
});


export const StyledInfoStationDrawer = styled(Drawer)(({ theme, open }) => ({
  backGroundColor: theme.palette.background.default,
  width: "500px",
  borderTopLeftRadius: "25px",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const MainInfoBox = styled(Box)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  padding: "1.5rem",
  marginTop: "1rem"
}));

export const TableBox = styled(Box)({
  padding: "1.5rem"
});


export const DrawerInfoText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightLight,
  fontSize: "18px",
}));

export const TableText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightLight,
  fontSize: "12px",
}));
export const TableTextInfo = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.light,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: "12px",
}));

export const TableTextBold = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: "12px",
}));

export const StyledInfoIcon = styled(InfoIcon)(({ theme }) => ({
  color: theme.palette.info.light,
  backgroundColor: "transparent"
}));