'use client';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Drawer as MuiDrawer,
  IconButton,
  DrawerProps as MuiDrawerProps,
  styled,
  CSSObject,
  Theme,
  useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';

export type DrawerItemProps = {
  id: string;
  name: string;
};

export type DrawerProps = {
  width?: number;
  menu: DrawerItemProps[];
  open: boolean;
  onDrawerToggle: () => void;
  children: React.ReactNode;
} & MuiDrawerProps;

const openedMixin = (theme: Theme): CSSObject => ({
  width: 240,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      },
    },
  ],
}));

export default function SidebarDrawer(props: DrawerProps) {
  const theme = useTheme();
  const [time, setTime] = useState(new Date());
  // const [open, setOpen] = useState(false);
  // const container =
  //   window !== undefined ? () => window.document.body : undefined;
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(100);
    };
  }, [time]);

  const handleDrawerToggle = () => {
    props.onDrawerToggle();
  };

  return (
    <nav>
      <Drawer
        variant="permanent"
        open={props.open}
        onToggle={handleDrawerToggle}
      >
        <DrawerHeader>
          <IconButton>
            {theme.direction === 'rtl' ? <span>Left</span> : <span>Right</span>}
          </IconButton>
        </DrawerHeader>
        <Box>
          <Typography variant="h6">{time.getSeconds()}</Typography>
          <Divider />
          <List>
            {props.menu.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {props.children}
        </Box>
      </Drawer>
    </nav>
  );
}
