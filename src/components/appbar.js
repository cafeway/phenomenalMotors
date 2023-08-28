import { AppBar, Avatar, Badge, Icon, IconButton, InputAdornment, TextField, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import { CircleNotifications, Filter1Outlined, LocalGasStation, LocalGasStationOutlined, Mail, MailOutlineOutlined, Menu, NotificationAdd, NotificationAddOutlined, Notifications, NotificationsOutlined, Plagiarism, Search, Settings, Sort, VerifiedUser } from '@mui/icons-material';

const navigationItems = ['Dashboard','Sales','Inventory','Finance','Shift Admin'];
const DrawerWidth = 240;


export default function App_Bar() {
    const handleOver = (event) => alert("yes");
    
    return (
        <AppBar
            position='static'
            color = 'inherit'
        >
            <Toolbar>
                <IconButton
                   edge="start"
                   color='success'
                   axia-lable="menu"
                    sx={{mr:2}}
                >
                    <Menu></Menu>
                </IconButton>
                
                <TextField size='small' onClick={handleOver} variant='standard' fullWidth="true" placeholder='Search and Filter' color='success'
                 autoCorrect='true'
                 InputProps={{
                    startAdornment: <InputAdornment position="start">
                      <LocalGasStationOutlined color='success' ></LocalGasStationOutlined>
                    </InputAdornment>,
                    endAdornment: <InputAdornment color='successs'>
                        <Sort color='success' fontSize='small'></Sort>
                       
                    </InputAdornment>
                  }}
                ></TextField>
                <IconButton
                   edge="end"
                
                   color='success'
                   axia-lable="menu"
                    sx={{mr:0}}
                >
                     <Badge badgeContent={4} color="warning">
                        <Notifications fontSize='medium'/>
                     </Badge>
                  
                 
                </IconButton>
                <IconButton
                   edge="end"
                 
                   color='success'
                   axia-lable="menu"
                    sx={{mr:0}}
                >
                     
                        
                      <Badge badgeContent={4} color="warning">
                      <Mail fontSize='medium' color='success'/>
                        </Badge>
                   
                 
                </IconButton>
            

           
                {/* <Typography variant='h6' sx={{flexGrow:1,color:'green',fontSize:'30px'}} fontWeight={6}>Crato Kenya</Typography> */}
            </Toolbar>
        </AppBar>
    );
}