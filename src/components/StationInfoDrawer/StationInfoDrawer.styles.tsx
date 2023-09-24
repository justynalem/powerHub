import { Box, Drawer, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import { stationInfoDrawerWidth } from '../../theme';

export const StyledInfoStationDrawer = styled(Drawer)(({ theme }) => ({
  backGroundColor: theme.palette.background.default,
  width: stationInfoDrawerWidth,
  borderTopLeftRadius: '25px',
}));

export const MainInfoBox = styled(Box)(() => ({
  width: '100%',
  textAlign: 'center',
  padding: '1.5rem',
  marginTop: '1rem',
}));

export const TableBox = styled(Box)({
  padding: '0 1.5rem',
});

export const DrawerInfoText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightLight,
  fontSize: '18px',
}));

export const TableText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightLight,
  fontSize: '12px',
}));
export const TableTextInfo = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.light,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: '12px',
}));

export const TableTextBold = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: '12px',
}));

export const StyledInfoIcon = styled(InfoIcon)(({ theme }) => ({
  color: theme.palette.info.light,
  backgroundColor: 'transparent',
}));
