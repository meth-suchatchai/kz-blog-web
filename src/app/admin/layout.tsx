import LinearProgress from '@mui/material/LinearProgress';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import NavigationMenu from '@/components/NavigationMenu/HeaderMenu';
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <NavigationMenu>{children}</NavigationMenu>;
}
