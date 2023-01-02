import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import {
  default as ArrowCircleLeftOutlinedIcon,
  default as ArrowCircleRightOutlinedIcon,
} from '@mui/icons-material/ArrowCircleRightOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import TaskIcon from '@mui/icons-material/Task';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

interface Props {
  children?: React.ReactNode;
}

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function LayoutComponent({ children }: Props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const menu: Array<{ name: string; to: string; icon?: React.ReactNode }> = [
    {
      name: 'Dashboard',
      to: '/',
      icon: <AnalyticsOutlinedIcon />,
    },
    {
      name: 'Clientes',
      to: '/clientes',
      icon: <PersonAddAlt1OutlinedIcon />,
    },
    {
      name: 'Vendas',
      to: '/vendas',
      icon: <AddShoppingCartOutlinedIcon />,
    },
    {
      name: 'Produtos',
      to: '/produtos',
      icon: <ShoppingBasketOutlinedIcon />,
    },
    {
      name: 'Despesas',
      to: '/despesas',
      icon: <ArrowCircleLeftOutlinedIcon />,
    },
    {
      name: 'Receitas',
      to: '/receitas',
      icon: <ArrowCircleRightOutlinedIcon />,
    },
    {
      name: 'Fornecedores',
      to: '/fornecedores',
      icon: <DomainAddOutlinedIcon />,
    },
    {
      name: 'Estoque',
      to: '/estoque',
      icon: <InboxIcon />,
    },
    {
      name: 'Email',
      to: '/email',
      icon: <MailIcon />,
    },
    {
      name: 'Tarefas',
      to: '/tarefas',
      icon: <TaskIcon />,
    },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Link href={'/'} passHref style={{ textDecoration: 'none' }}>
            <Typography variant='h6' noWrap component='div' color='white'>
              Aimée Stylus
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <Link href={'/'} passHref style={{ textDecoration: 'none' }}>
            <Image
              src='/logo.png'
              alt=''
              height={45}
              width={35}
              style={{ display: 'flex', marginRight: '60px' }}
            />
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menu.map((menuItem, index) => (
            <Link
              key={index}
              href={menuItem.to}
              passHref
              style={{ textDecoration: 'none' }}
            >
              <ListItem>
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        {children}
      </Main>
    </Box>
  );
}
