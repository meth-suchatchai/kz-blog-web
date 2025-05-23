'use client';
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  useColorScheme,
} from '@mui/material';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import SunnyIcon from '@mui/icons-material/Sunny';
import BrightnessIcon from '@mui/icons-material/Brightness6';

export default function DarkMode() {
  const { mode, setMode } = useColorScheme();
  return (
    <Box sx={{ mx: 2 }}>
      <ToggleButtonGroup>
        <ToggleButton
          value="system"
          onClick={() => setMode('system')}
          selected={mode === 'system'}
        >
          <BrightnessIcon />
        </ToggleButton>
        <ToggleButton
          value="light"
          onClick={() => setMode('light')}
          selected={mode === 'light'}
        >
          <SunnyIcon />
        </ToggleButton>
        <ToggleButton
          value="dark"
          onClick={() => setMode('dark')}
          selected={mode === 'dark'}
        >
          <BedtimeIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
