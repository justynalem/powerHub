import { List } from "@mui/material";
import {
  StyledListItem,
  StyledListItemButton,
  StyledListItemText,
} from "./Drawer.styles";
import { DrawerListProps } from "..";

export const DrawerList = ({ open, listItems }: DrawerListProps) => {
  return (
    <List>
      {listItems.map(({ icon, label }) => (
        <StyledListItem key={label}>
          <StyledListItemButton open={open}>
            {icon}
            <StyledListItemText open={open} primary={label} />
          </StyledListItemButton>
        </StyledListItem>
      ))}
    </List>
  );
};
