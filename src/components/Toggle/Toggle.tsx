import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { useThemeContext } from '../../theme';
import { StyledIconButton } from './Toggle.styles';

export const Toggle = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <StyledIconButton onClick={toggleColorMode}>
      {mode === 'dark' ? <LightModeIcon /> : <NightlightIcon />}
    </StyledIconButton>
  );
};
