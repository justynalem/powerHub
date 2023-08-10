import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { CSSObject, Theme, styled } from "@mui/material/styles";
import { StyledListProps } from "..";
import darkMap from "../../../public/wordMap_dark.svg";
import lightMap from "../../../public/wordMap_light.svg";
import { closedDrawerWidth, drawerWidth } from "../../theme";

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: theme.palette.background.paper,
  borderTopRightRadius: "25px 25px",
  borderBottomRightRadius: "25px 25px",
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
    // width: `calc(${theme.spacing(8)} + 1px)`,
    width: closedDrawerWidth,
  },
});

export const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
  backgroundColor: theme.palette.background.default,
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  position: "relative",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const DrawerHeaderClosed = styled("div")(() => ({
  height: "3.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const DrawerHeaderOpened = styled("div")(() => ({
  height: "3.5rem",
  display: "flex",
  justifyContent: "space-between",
}));

export const DrawerHeaderTextContainer = styled("div")(() => ({
  display: "flex",
  paddingLeft: "1rem",
  alignItems: "center",
}));

export const DrawerHeaderText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: "24px",
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  height: "3rem",
  display: "block",
  alignContent: "center",
  padding: "0",
  ["& .MuiTypography-root"]: {
    fontWeight: theme.typography.fontWeightLight,
  },
  ":hover": {
    ["& .MuiTypography-root"]: {
      fontWeight: theme.typography.fontWeightBold,
    },
    ["& .MuiSvgIcon-root"]: {
      color: theme.palette.info.light,
    },
    ["& .MuiListItemButton-root"]: {
      backgroundColor: "transparent",
    },
  },
}));

export const StyledListItemButton = styled(ListItemButton)(
  ({ open }: StyledListProps) => ({
    justifyContent: open ? "initial" : "center",
  })
);

export const StyledListItemIcon = styled(ListItemIcon)(() => ({
  justifyContent: "center",
}));

export const StyledListItemText = styled(ListItemText)(
  ({ open }: StyledListProps) => ({
    display: open ? "true" : "none",
    marginLeft: "0.5rem",
  })
);

export const DrawerListContainerOpen = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  backgroundImage: `url(${theme.palette.mode === "dark" ? darkMap : lightMap})`,
  backgroundRepeat: "no-repeat",
  backgroundPositionY: "110%",
  backgroundPositionX: "0.5rem",
  backgroundSize: "45rem 30rem",
}));

export const DrawerListContainerClose = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
}));
