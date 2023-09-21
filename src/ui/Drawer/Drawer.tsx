import { useEffect, useState } from "react";
import {
  DrawerHeaderOpened,
  DrawerHeaderClosed,
  StyledDrawer,
  DrawerHeaderTextContainer,
  DrawerHeaderText,
  DrawerListContainerClose,
  DrawerListContainerOpen,
} from "./Drawer.styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import EvStationIcon from "@mui/icons-material/EvStation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { DrawerProps, IconButton } from "..";
import { DrawerList } from "./DrawerList";
import { Toggle } from "../../components";

const defaultNavList = [
  { label: "Home", icon: <HomeIcon /> },
  { label: "Station", icon: <EvStationIcon /> },
  { label: "Bookings", icon: <CalendarMonthIcon /> },
  { label: "History", icon: <HistoryIcon /> },
  { label: "Settings", icon: <SettingsIcon /> },
];

const footerList = [
  { label: "Log out", icon: <LogoutIcon /> },
];

export const Drawer = ({ navList = defaultNavList, onOpenChange }: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (onOpenChange) {
      onOpenChange(isOpen);
    }
  }, [isOpen, onOpenChange]);

  const handleDrawerOpen = () => setIsOpen(true);
  const handleDrawerClose = () => setIsOpen(false);

  return (
    <StyledDrawer variant='permanent' open={isOpen}>
      {!isOpen ? (
        <>
          <DrawerHeaderClosed>
            <IconButton onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          </DrawerHeaderClosed>
          <DrawerListContainerClose>
            <DrawerList listItems={navList} open={isOpen} />
            <Toggle />
            <DrawerList listItems={footerList} open={isOpen} />
          </DrawerListContainerClose>
        </>
      ) : (
        <>
          <DrawerHeaderOpened>
            <DrawerHeaderTextContainer>
              <DrawerHeaderText
                sx={{ color: theme => theme.palette.info.main }}>
                power
              </DrawerHeaderText>
              <DrawerHeaderText
                sx={{ color: theme => theme.palette.info.light }}>
                hub.
              </DrawerHeaderText>
            </DrawerHeaderTextContainer>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon />
            </IconButton>
          </DrawerHeaderOpened>
          <DrawerListContainerOpen>
            <DrawerList listItems={navList} open={isOpen} />
            <Toggle />
            <DrawerList listItems={footerList} open={isOpen} />
          </DrawerListContainerOpen>
        </>
      )}
    </StyledDrawer>
  );
};
