import type { Metadata } from 'next';
import I18nProvider from '@/providers/I18nProvider';
import FooterCookie from '@/components/Footer/FooterCookie';
import ReduxProvider from '@/providers/ReduxProvider';
import CssBaseLine from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import { InitColorSchemeScript } from '@mui/material';
import './globals.css';
import { SnackbarProvider } from '@/providers/SnackbarProvider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

export const metadata: Metadata = {
  title: 'KuroshibaZ',
  description: 'Personal experience website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ReduxProvider>
            <InitColorSchemeScript attribute="class" defaultMode="light" />
            <ThemeProvider theme={theme}>
              <CssBaseLine />
              <I18nProvider>
                <SnackbarProvider>{children}</SnackbarProvider>
                {/* <footer>
                <FooterCookie />
              </footer> */}
              </I18nProvider>
            </ThemeProvider>
          </ReduxProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
