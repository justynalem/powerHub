import { useState } from "react";
import { DrawerHeader, StyledDrawer } from "./Drawer.styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "..";

export const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerOpen = () => setIsOpen(true);
  const handleDrawerClose = () => setIsOpen(false);

  return (
    <StyledDrawer variant='permanent' open={isOpen}>
      {!isOpen ? (
        <IconButton onClick={handleDrawerOpen}>
          <MenuIcon />
        </IconButton>
      ) : (
        <DrawerHeader>
          <p>some text</p>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon/>
          </IconButton>
        </DrawerHeader>        
      )}
   </StyledDrawer>
  );
};
