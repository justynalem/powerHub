import { Box } from "@mui/material";
import { Drawer } from "../../ui";
import { Toggle } from "..";

export const Dashboard = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", backgroundColor: "none" }}>
      <Drawer />
      <Toggle />
      <p>hello</p>
    </Box>
  );
};
