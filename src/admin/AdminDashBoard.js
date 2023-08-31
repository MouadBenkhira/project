import React, { useEffect, useState } from 'react';
import { styled, useTheme, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Profile from './Profile';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import FolderDeleteOutlinedIcon from '@mui/icons-material/FolderDeleteOutlined';
import Avatar from '@mui/material/Avatar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Routes, useNavigate } from 'react-router-dom';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import { DataGrid } from '@mui/x-data-grid';
import ButtonGroup from '@mui/material/ButtonGroup'; 
import Button from '@mui/material/Button'; 
import Help from './Help';
import Requests from './Requests';
// import Profile from './Profile';
import Rap from './Rap';
import Registrationform from './Registrationform';
import Send_Email from './Send_Email';
import Workers from './Workers';
import AdminContacts from './AdminContacts';
import HomePage from './HomePage'
import Logout from './Logout';


const drawerWidth = 240;

const array1 =[
    {"text" : "Home", "icon": <HomeOutlinedIcon />, "path": "/HomePage"},
    {"text" : "Requests", "icon": <DraftsOutlinedIcon/>, "path": "/Requests"},
    {"text" : "List of workers", "icon": <RecentActorsOutlinedIcon/>, "path": "/Worker"},
    {"text" : "Register User", "icon": <EmailOutlinedIcon/>, "path": "/Registrationform"},
    {"text" : "Admin Contact", "icon": <SupervisorAccountOutlinedIcon/>, "path": "/AdminContacts"},
    {"text" : "Report a Problem", "icon": <ReportProblemOutlinedIcon/>, "path": "/Rap"},
    {"text" : "Manage Profile", "icon": <AccountBoxOutlinedIcon/>, "path": "/Profile"},
    {"text" : "Log out", "icon": <LoginOutlinedIcon/>, "path": "/Logout"},
    ]


const openedMixin = (theme: Theme) => ({
    

  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme) => ({
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
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function AdminDashBoard() {
  const [selectedPage, setSelectedPage] = useState('/HomePage');

    const navigate = useNavigate();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [adminName, setAdminName] = useState('');
  
    useEffect(() => {
      fetchAdminInfoFromApi()
        .then((adminInfo) => {
          setAdminName(`${adminInfo.firstName} ${adminInfo.lastName}`);
        })
        .catch((error) => {
          console.error('Error fetching admin info:', error);
        });
    }, []);
  
    const fetchAdminInfoFromApi = async () => {
      try {
        const response = await fetch('/api/v1/User'); 
        const data = await response.json();
        const adminUser = data.find(user => user.role === 'ADMIN');
        return adminUser;
      } catch (error) {
        throw error;
      }
    };
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    
 

  return (

    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Avatar
          sx={{
            mx: 'auto',
            width: open ? 90 : 44,
            height: open ? 90 : 44,
            border: '3px solid black',
            transition: '0.5s',
          }}
          alt="Admin Avatar"
          src="avatar_image_url" 
        />
        <Typography
          align="center"
          sx={{ fontSize: open ? 17 : 0, transition: '0.5s' }}
          color="initial"
        >
          {adminName}
        </Typography>
        <Typography
          align="center"
          sx={{
            fontSize: open ? 13 : 0,
            transition: '0.5s',
            color: theme.palette.info.main,
          }}
          color="initial"
        >
          Admin
        </Typography>
        <Divider />







        <List>
          {array1.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => {
                  setSelectedPage(item.path); 

                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
        <Divider />
        
      </Drawer>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
{selectedPage === '/HomePage' && <HomePage />}
{selectedPage === '/Requests' && <Requests />}
{selectedPage === '/Help' && <Help />}
{selectedPage === '/Worker' && <Workers />}
{selectedPage === '/Registrationform' && <Registrationform />}
{selectedPage === '/AdminContacts' && <AdminContacts />}
{selectedPage === '/Rap' && <Rap />}
{selectedPage === '/Profile' && <Profile />}
{selectedPage === '/Register' && <Registrationform />}
{selectedPage === '/Logout' && <Logout />}
      </Box>
    </Box>
  );
}
