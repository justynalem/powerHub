import { StyledSlider } from "./Slider.styles";
import { Box } from "@mui/material";

type SliderProps = {
  onSliderChange: (event: Event, value: number | number[]) => void;
  value: number;
};

export const Slider = ({ onSliderChange, value }: SliderProps) => {
  return (
    <Box sx={{ zIndex: 402 }}>
      <StyledSlider
        aria-label='Distance'
        valueLabelDisplay='on'
        step={10}
        marks
        min={10}
        max={100}
        value={value}
        onChange={onSliderChange}
      />
    </Box>
  );
};
