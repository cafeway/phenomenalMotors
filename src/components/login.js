import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Card, CardContent, CardHeader, Checkbox, FormControlLabel, Grid, InputAdornment, Tab, Tabs, Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import { AccountCircleOutlined, HowToReg, LocalGasStation, Login, LoginOutlined, Mail, Sell, ShoppingCart, Storefront, Visibility, WidthFull } from '@mui/icons-material';
import {  Router } from 'react-router-dom';
import Link from '@mui/material/Link';
export default function FormPropsTextFields() {

    // choosing betweenvendor and customer
    const [mode,setMode] = React.useState('customer');

    // handling toggling the tabs
    const handleModeToggle = (event,mode) => {
        setMode(mode);
    }
  return (

        <form style={{marginTop:'0px'}}>
           
        
        <Card style={{maxWidth:450,padding:"20px 5px",marginLeft:'auto',marginRight:'auto',marginTop:'30px',marginBottom:'auto'}}>
           <CardHeader
            title={
                <>
                    <Stack direction='row' justifyContent='center'>
                       
                        <LocalGasStation  sx={{width:'70px',height:'70px'}} color='primary'></LocalGasStation>
                    </Stack>
                    <Stack direction='row' justifyContent='center'>
                        <Typography variant='body3' fontSize={20}>WELCOME</Typography>
                    </Stack>
                
                </>
                
                
            }
            subheader={
                <Stack direction='row' justifyContent='center'>
                    <Tabs value={mode} onChange={handleModeToggle} textColor="primary" indicatorColor='action'>
                        <Tab value='vendor' variant='outlined' label="Vendor" icon={<Storefront/>} iconPosition='start'/>
                        <Tab value='customer' label="Customer" icon={<ShoppingCart/>} iconPosition='start'/>
                    </Tabs>
                </Stack>
            }
           />
            <CardContent>
            <Stack direction='row'  justifyContent='center'>
            <Stack spacing={1}>
           
           
            
            
           
           
            </Stack>
            
            </Stack>
                <Grid container spacing={1} marginTop={0}>
                    <Grid item xs={12} sx={{marginBottom:'10px'}}>
                    <TextField id="Email" autoFocus='true'
                    InputProps={{
                        endAdornment: <InputAdornment position='start'>
                            <Mail color='primary'></Mail>
                        </InputAdornment>
                    }}
                    type='email' 
                    label="Email / Phone"
                    fullWidth
                    required
                    placeholder='Email/Phone'>
                    </TextField>
                    </Grid>
                    <Grid item xs={12} sx={{marginBottom: '5px'}}>
                    <TextField id="Password" type='password'  InputProps={{endAdornment: <InputAdornment position='start'>
                        <Visibility color='primary'>

                        </Visibility>
                    </InputAdornment>}} label="Password" fullWidth required placeholder='Password*'></TextField>
                    </Grid>
                  
                 
                    <Grid item xs={12}>
                        <Button variant='contained' type='submit' color='primary' startIcon={<LoginOutlined/>} fullWidth>Login</Button>
                    </Grid>
                    <Grid item xs={12} sx={{marginBottom: '5px'}}>
                    <Grid item xs={12}>
                        <Button variant='outlined' fullWidth  href='/register' startIcon={<HowToReg/>}>Dont have an account? Sign Up</Button>
                      
                    </Grid>
               </Grid>
                </Grid>
            
            </CardContent>
        </Card>
   
   
    </form>

    
   
  );
}
