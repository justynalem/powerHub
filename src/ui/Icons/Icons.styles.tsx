import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  ':hover': {
    color: theme.palette.info.light,
    backgroundColor: 'transparent',
  },
}));
