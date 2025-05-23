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
  ListItemIcon,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export type DrawerMenuGroup = {
  key: string;
  name: string;
};

export type DrawerItemProps = {
  id: string;
  name: string;
  icon: React.ComponentType;
  groupKey: string;
  path: string;
};

export type DrawerProps = {
  width?: number;
  menu?: DrawerItemProps[];
  groups?: DrawerMenuGroup[];
  open: boolean;
  onDrawerToggle: () => void;
  // children: React.ReactNode;
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
  const router = useRouter();
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

  const pushNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        open={props.open}
        onToggle={handleDrawerToggle}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Box>
          <Typography variant="h6" justifyContent={'center'}>
            {time.getHours()}:{time.getMinutes()}
          </Typography>
          <Divider />
          {props.groups?.map((group) => (
            <div key={group.key}>
              <List>
                {props.menu?.map(
                  (item) =>
                    item.groupKey === group.key && (
                      <ListItem key={item.id} disablePadding>
                        <ListItemButton
                          onClick={() => pushNavigation(item.path)}
                        >
                          {/* <Link href={item.path}> */}
                          <ListItemIcon
                            sx={[
                              { minWidth: 0, justifyContent: 'center' },
                              props.open
                                ? {
                                    mr: 3,
                                  }
                                : {
                                    mr: 'auto',
                                  },
                            ]}
                          >
                            {<item.icon />}
                          </ListItemIcon>
                          <ListItemText
                            primary={item.name}
                            sx={[
                              props.open
                                ? {
                                    opacity: 1,
                                  }
                                : {
                                    opacity: 0,
                                  },
                            ]}
                          />
                          {/* </Link> */}
                        </ListItemButton>
                      </ListItem>
                    )
                )}
              </List>
              <Divider />
            </div>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
}
