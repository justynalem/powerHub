import { Drawer } from "@mui/material";
import { CSSObject, Theme, styled } from "@mui/material/styles";

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
  borderColor: "transparent"
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
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const drawerWidth = "240px";

export const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
  backgroundColor: theme.palette.background.default,
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": 
    openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
 
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "3fr 1fr",
  // backgroundColor: theme.palette.background.default 
}));
