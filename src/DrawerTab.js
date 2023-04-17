
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
  backgroundColor:'#ECB390'
}));

function DrawerTab() {
  
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const navigate = useNavigate();

  const itemsList = [
    { 
      id:"1",
      text:"Home",
      path:'/'
    },
    {
      id:"2",
      text:"About",
      path:'/About'
    },
    {
      id:"3",
      text:"Projects",
      path:'/Projects'
    }
  ];

   const itemCalender =[
     {
       id:"1",
       text:"Book a Video Call Meeting !",
       icon:<VideoCameraFrontIcon/>,
       path:'/Calendly'
     }
   ]
   
  return (
    <Box sx={{ display: 'flex' }} >
      
        <AppBar position="fixed" open={open} style={{ background:'#ECB390'}}>
         <Toolbar>
           <Typography variant="h5" noWrap sx={{ flexGrow: 1 }} component="div" style={{color:"grey"}}>
            Vembarasan's Portfolio
           </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
           >
            <MenuIcon style={{ fontSize:40 , color:"grey"}}/>
          </IconButton>
         </Toolbar>
        </AppBar>

       <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
        backgroundColor="#774360"
        onClick={handleDrawerClose}
        >

        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{color:"grey"}}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}  
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div" style={{color:"grey"}}></Typography>
        </DrawerHeader>

        <Divider />

        <List style={{ backgroundColor:"#ECB390"}} >
          {itemsList.map((item) => (
            <ListItem button  style={{ height:"77px"}} key={item.id} onClick={() => navigate(item.path)}>
              <ListItemText style={{color:"grey",marginLeft:"60px"}}>{item.text} </ListItemText>
            </ListItem> 
          ))}
        </List>
              

        <Divider/>

        <List style={{ backgroundColor:"#ECB390"}} >
            <ListItem button  style={{ height:"73px"}} >
              <ListItemText style={{marginLeft:"60px"}}>
              <a href="mailto:vembarasugn@gmail.com" style={{ textDecoration:"none", color:"grey"}}> EMail Me</a></ListItemText>
            </ListItem> 
        </List>

        <Divider/>
        
        <List style={{ backgroundColor:"#ECB390"}}>
            <ListItem button  style={{ height:"73px"}}>
              <ListItemText style={{color:"grey",marginLeft:"60px"}}> 
               <a target="_blank" href="./Vembarasan N CV-updated.pdf" style={{ textDecoration:"none", color:"grey"}}>Get My CV </a></ListItemText>
            </ListItem> 
        </List>

        <Divider/>

        <List style={{ backgroundColor:"#ECB390"}} >
          {itemCalender.map((items) => (
            <ListItem button key={items.id} style={{ height:"116px"}} onClick={()=> navigate(items.path)}>
             <ListItemIcon style={{marginLeft:"8px"}}>{items.icon}</ListItemIcon>
             <ListItemText style={{color:"grey"}}>{items.text}</ListItemText>
            </ListItem>
          ))}
        </List>                 
      </Drawer>
    </Box>
  );
}
        
export default DrawerTab;


        