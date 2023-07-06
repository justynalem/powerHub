import { Box } from "@mui/material";
import { Toggle } from "..";
import { Drawer } from "../../ui";

export const Dashboard = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row"}}>
      <Drawer/>
      <Box>
      <Toggle />
      <p>hello</p>
      </Box>
    </Box>
  );
};
