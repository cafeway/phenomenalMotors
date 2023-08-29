import { AppBar, Avatar, Badge, Icon, IconButton,Button,InputAdornment, TextField, Toolbar, Typography,Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import { CircleNotifications, DarkMode, Dashboard, Filter1Outlined, GridView, KeyboardArrowDown, LocalGasStation, LocalGasStationOutlined, Mail, MailOutlineOutlined, Menu, NotificationAdd, NotificationAddOutlined, Notifications, NotificationsOutlined, Plagiarism, Search, Settings, Sort, TravelExplore, VerifiedUser } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const navigationItems = ['Dashboard','Sales','Inventory','Finance','Shift Admin'];
const DrawerWidth = 240;


export default function App_Bar() {
    const handleOver = (event) => alert("yes");
    
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => {
      setOpen(!open);
    };
    return (
        <>
        <AppBar
            position='static'
            color = 'inherit'
        >
            <Toolbar>
                <IconButton
                   edge="start"
                   color='primary'
                   axia-lable="menu"
                    sx={{mr:2}}
                    onClick={toggleDrawer}
                >
                    <Menu></Menu>
                </IconButton>
                
                <TextField size='small' onClick={handleOver} variant='outlined' fullWidth='true'  placeholder='Search Crato' color='primary'
                 autoCorrect='true'
                 InputProps={{
                    endAdornment: <InputAdornment position="start">
                      <LocalGasStationOutlined color='primary' ></LocalGasStationOutlined>
                    </InputAdornment>,
                    startAdornment: <InputAdornment color='successs'>
                        {/* <Sort color='success' fontSize='small'></Sort> */}
                       <TravelExplore color='primary' size='medium'></TravelExplore>
                    </InputAdornment>
                  }}
                  sx={{marginLeft:'auto',marginRight:'auto'}}
                ></TextField>
                <IconButton
                    
                    sx={{marginLeft:'auto',color:'#FFEA00'}}
                >
                     
                      
                        <DarkMode  fontSize='medium'></DarkMode>
                  
                 
                </IconButton>
                <IconButton
                      edge="end"
                
                      color='primary'
                      axia-lable="menu"
                >
                <Notifications fontSize='medium'/>
                </IconButton>
                
                <Avatar src='images/avator.jpg' sx={{marginLeft:'10px',marginRight:'10px'}}></Avatar>
                <KeyboardArrowDown color='primary'></KeyboardArrowDown>

           
                {/* <Typography variant='h6' sx={{flexGrow:1,color:'green',fontSize:'30px'}} fontWeight={6}>Crato Kenya</Typography> */}
            </Toolbar>
           
        </AppBar>
        <Drawer anchor="left" open={open} onClose={toggleDrawer}
         PaperProps={{
          style: {
            width: DrawerWidth,
          },}}>
        <div
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <ListItem divider='true'>
              <ListItemIcon>
                <GridView/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
              
            </ListItem>
            <ListItem button>
              {/* <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon> */}
              <ListItemText primary="Explore" />
            </ListItem>
            {/* Add more menu items as needed */}
          </List>
        </div>
      </Drawer>
        </>
        
    );
}