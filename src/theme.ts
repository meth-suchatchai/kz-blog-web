'use client';

import { createTheme } from '@mui/material/styles';
import { Pixelify_Sans, Silkscreen } from 'next/font/google';

const pixelifySans = Pixelify_Sans({
  variable: '--font-pixelify',
  subsets: ['latin'],
});

const silkscreen = Silkscreen({
  weight: '400',
  variable: '--font-silkscreen',
  subsets: ['latin'],
});

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  defaultColorScheme: 'dark',
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: `${pixelifySans.style.fontFamily}, ${silkscreen.style.fontFamily}`,
  },
  components: {},
  direction: 'rtl',
});

export default theme;
