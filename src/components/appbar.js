import { AppBar, Avatar, Badge, Icon, IconButton,Button,InputAdornment, TextField, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import { CircleNotifications, DarkMode, Filter1Outlined, KeyboardArrowDown, LocalGasStation, LocalGasStationOutlined, Mail, MailOutlineOutlined, Menu, NotificationAdd, NotificationAddOutlined, Notifications, NotificationsOutlined, Plagiarism, Search, Settings, Sort, TravelExplore, VerifiedUser } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';

const navigationItems = ['Dashboard','Sales','Inventory','Finance','Shift Admin'];
const DrawerWidth = 240;


export default function App_Bar() {
    const handleOver = (event) => alert("yes");
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const menu_open = Boolean(anchorEl);

    const handleClick = (event) =>  {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }
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
                >
                    <Menu></Menu>
                </IconButton>
                
                <TextField size='small' onClick={handleOver} variant='outlined'  placeholder='Search Crato' color='primary'
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
                  sx={{marginLeft:'auto',marginRight:'auto',width:"500px"}}
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
                <Button onClick={handleClick} startIcon={<KeyboardArrowDown/>} variant="outlined">Brian Kibui</Button>

           
                {/* <Typography variant='h6' sx={{flexGrow:1,color:'green',fontSize:'30px'}} fontWeight={6}>Crato Kenya</Typography> */}
            </Toolbar>
           
        </AppBar>
         <Menu
         anchorEl={anchorEl}
         open={menu_open}
         onClose={handleClose}
         MenuListProps={{
             'aria-labelledby': 'basic-button',
           }}
     >
         <MenuItem onClick={handleClose}>Profile</MenuItem>
         <MenuItem onClick={handleClose}>My account</MenuItem>
         <MenuItem onClick={handleClose}>Logout</MenuItem>
     </Menu>
     </>
    );
}