import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DashboardContainer = styled(Box)(() => ({
  width: '100vw',
  height: '100vh',
}));

export const MainContainer = styled(Box)(() => ({
  width: '100%',
  height: '100%',
}));

export const MapContainer = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  zIndex: '1',
  position: 'relative',
}));

export const SliderContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  cursor: 'grab',
  bottom: 0,
  zIndex: 2,
  transition: theme.transitions.create('all', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
}));

export const StyledSelectContainer = styled(Box)(() => ({
  width: '15%',
  height: '10%',
  padding: '1rem',
  backdropFilter: 'blur(10px)',
  position: 'absolute',
  left: 0,
  right: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  zIndex: 402,
  borderBottomLeftRadius: '2rem',
  borderBottomRightRadius: '2rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '16px',
}));

export const DistanceContainer = styled(Box)({
  width: '75%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.7rem',
});

export const StyledDistanceInfoText = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.main,
  fontWeight: theme.typography.fontWeightBold,
}));
