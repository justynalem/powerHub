import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

export const StyledSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.info.light,
  width: '10rem',
  '& .MuiSlider-thumb': {
    width: '0.75rem',
    height: '0.75rem',
  },
  '& .MuiSlider-valueLabel': {
    width: '1rem',
    height: '1rem',
    backgroundColor: 'transparent',
  },
  '& .MuiSlider-valueLabelCircle': {
    backgroundColor: 'transparent',
  },
  '& .MuiSlider-valueLabelLabel': {
    color: theme.palette.info.light,
  },
}));
