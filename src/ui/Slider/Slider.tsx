import { StyledSlider } from './Slider.styles';
import { Box } from '@mui/material';

type SliderProps = {
  onSliderChange: (event: Event, value: number | number[]) => void;
  value: number;
  format?: string;
};

export const Slider = ({
  onSliderChange,
  value,
  format = 'km',
}: SliderProps) => {
  return (
    <Box sx={{ zIndex: 402 }}>
      <StyledSlider
        aria-label="Distance"
        valueLabelDisplay="on"
        step={10}
        marks
        min={10}
        max={100}
        value={value}
        valueLabelFormat={(value) => `${value} ${format}`}
        onChange={onSliderChange}
        datatype="km"
      />
    </Box>
  );
};
