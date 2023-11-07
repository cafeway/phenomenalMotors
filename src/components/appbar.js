import { AppBar, Avatar,Stack, Badge, Icon, IconButton,Button,InputAdornment, TextField, Toolbar, Typography,Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import { AdminPanelSettings, CircleNotifications, DarkMode, Dashboard, Filter1Outlined, GridView, Inventory, KeyboardArrowDown, LocalGasStation, LocalGasStationOutlined, Logout, Loyalty, Mail, MailOutlineOutlined, Menu, NotificationAdd, NotificationAddOutlined, Notifications, NotificationsOutlined, Plagiarism, Search, Settings, Sort, Summarize, TravelExplore, VerifiedUser } from '@mui/icons-material';
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
            position='sticky'
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
            backgroundColor:'#F7F7F7'
          },}}>
        <div
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
            <Stack direction='row' justifyContent='center' sx={{marginBottom:'30px'}}>
            <img src='images/logo.jpeg' style={{width:'150px',height:'150px'}}/>
            </Stack>
           
        
          <List>
            <ListItem divider='true'>
              <ListItemIcon>
                <GridView sx={{color:'#1976D2'}}></GridView>
              </ListItemIcon>
              <ListItemText sx={{color:'#1976D2'}} primary="Dashboard" />
              
            </ListItem>
            <ListItem divider='true'>
              <ListItemIcon>
                <Loyalty sx={{color:'#1976D2'}}></Loyalty>
              </ListItemIcon>
              <ListItemText sx={{color:'#1976D2'}} primary="Sales" />
              
            </ListItem>
            <ListItem divider='true'>
              <ListItemIcon>
                <Inventory sx={{color:'#1976D2'}}></Inventory>
              </ListItemIcon>
              <ListItemText sx={{color:'#1976D2'}} primary="Inventory" />
              
            </ListItem>
            <ListItem divider='true'>
              <ListItemIcon>
                <AdminPanelSettings sx={{color:'#1976D2'}}></AdminPanelSettings>
              </ListItemIcon>
              <ListItemText sx={{color:'#1976D2'}} primary="Shift Admin" />
              
            </ListItem>
            <ListItem divider='true'>
              <ListItemIcon>
                <Summarize sx={{color:'#1976D2'}}></Summarize>
              </ListItemIcon>
              <ListItemText sx={{color:'#1976D2'}} primary="Summary" />
              
            </ListItem>
            
           
            {/* Add more menu items as needed */}
          </List>
          <Stack direction='row' justifyContent='center' sx={{marginTop:'auto'}} >
          <Button endIcon={<Logout/>} variant='outlined' sx={{width:'200px'}}>Logout</Button>
          </Stack>
         
        </div>
      </Drawer>
        </>
        
    );
}