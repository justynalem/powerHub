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
  width: '100%',
  paddingLeft: '4.5rem',
  backdropFilter: 'blur(10px)',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: "8px"
  }
}));

export const StyledSelectContainer = styled(Box)(() => ({
  width: '100%',
  height: '100px',
  position: 'absolute',
  left: 0,
  right: 0,
  zIndex: 402,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '16px',
}));

export const DistanceContainer = styled(Box)(({ theme }) => ({
  backdropFilter: 'blur(10px)',
  width: '250px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  borderRadius: '2rem',
  alignItems: 'center',
  gap: '1rem',
  marginRight: '1rem',
  marginTop: '1rem',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    paddingLeft: "4.5rem",
    marginRight: 0,
    marginTop: 0,
  }
}));

export const StyledDistanceInfoText = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.light,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: '16px'
}));
