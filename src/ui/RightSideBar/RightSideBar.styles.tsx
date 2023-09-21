import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSideBar = styled(Box)(({ theme }) => ({
  minWidth: '22.5rem',
  maxHeight: '100vh',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '25px',
  margin: '2rem',
}));
