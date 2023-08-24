import Slider from '@mui/material/Slider';
import { styled } from "@mui/material/styles";

export const StyledSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.info.light,
  width: "10rem",
}));
