import {
  DrawerItemProps,
  DrawerMenuGroup,
} from '@/components/NavigationMenu/Drawer';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';

export const drawerGroup: DrawerMenuGroup[] = [
  {
    key: 'dashboard',
    name: 'main',
  },
  {
    key: 'crm',
    name: 'CRM',
  },
];

export const drawerMenu: DrawerItemProps[] = [
  {
    id: 'main',
    name: 'Dashboard',
    icon: DashboardIcon,
    groupKey: 'dashboard',
    path: '/admin',
  },
  {
    id: 'blog',
    name: 'Blog',
    icon: BookIcon,
    groupKey: 'crm',
    path: '/admin/blog',
  },
];

export const profileMenu = [
  {
    id: 'profile',
    name: 'Profile',
  },
  {
    id: 'settings',
    name: 'Settings',
  },
  {
    id: 'logout',
    name: 'Logout',
  },
];
