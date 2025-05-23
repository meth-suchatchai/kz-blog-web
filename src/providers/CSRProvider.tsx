'use client';
import I18nProvider from '@/providers/I18nProvider';
import ReduxProvider from '@/providers/ReduxProvider';
import CssBaseLine from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import { InitColorSchemeScript } from '@mui/material';
import { SnackbarProvider } from '@/providers/SnackbarProvider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ReduxProvider>
        <InitColorSchemeScript attribute="class" defaultMode="light" />
        <ThemeProvider theme={theme}>
          <CssBaseLine />
          <I18nProvider>
            <SnackbarProvider>{children}</SnackbarProvider>
          </I18nProvider>
        </ThemeProvider>
      </ReduxProvider>
    </AppRouterCacheProvider>
  );
}
