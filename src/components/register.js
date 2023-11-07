import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Avatar, Card, CardContent, CardHeader,Divider, Checkbox,InputAdornment,FormControlLabel, Grid, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import { Business, HowToReg, LocalGasStationOutlined, Mail, Person, Phone, PhoneIphone, QueryStats, Storefront, WidthFull } from '@mui/icons-material';
export default function FormPropsTextFields() {
  return (
    <form style={{marginTop:'auto',paddingTop:'20px'}}>
        
        <Card style={{maxWidth:450,margin:"auto auto",padding:"20px 5px",backgroundColor:'#F7F7F7'}} elevation={5}>
            <CardHeader
                title = {
                    <>
                    
                    <Stack direction='row' justifyContent='center'>
                      
                    <img src='images/logo.jpeg' style={{width:'150px',height:'150px'}}/>
                    </Stack>
                  
                
                </>
                }
            />
            <CardContent>
          
                <Grid container spacing={1} marginTop={0}>
                <Grid item xs={12} >
                    <TextField id="Company Name" InputProps={{
                        endAdornment: <InputAdornment position='start'>
                            <Business ></Business>
                        </InputAdornment>
                    }}  label="Company Name" placeholder='Company Name' required fullWidth></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField id="First Name" InputProps={{
                        endAdornment: <InputAdornment position='start'>
                            
                           <Person></Person>
                        </InputAdornment>
                    }}  label="First Name" placeholder='First Name' required fullWidth></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField id="SecondName"  InputProps={{
                        endAdornment: <InputAdornment position='start'>
                            
                           <Person></Person>
                        </InputAdornment>
                    }}  label="Second Name" fullWidth required placeholder='Second Name'></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField id="Phone Number" InputProps={{
                        endAdornment: <InputAdornment position='start'>
                           <PhoneIphone></PhoneIphone>
                        </InputAdornment>
                    }}  label="Phonenumber" placeholder='Phonenumber' required fullWidth></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField id="SecondName" InputProps={{
                        endAdornment: <InputAdornment position='start'>
                            
                            <Mail></Mail>
                        </InputAdornment>
                    }} label="Email" fullWidth required placeholder='Email'></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField id="Station Name" InputProps={{
                        endAdornment: <InputAdornment position='start'>
                            
                            <LocalGasStationOutlined></LocalGasStationOutlined>
                        </InputAdornment>
                    }} label="Station Name" fullWidth required placeholder='Station Name'></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField id="Trading Name" InputProps={{
                        endAdornment: <InputAdornment position='start'>
                            
                            <Storefront></Storefront>
                        </InputAdornment>
                    }} label="Trading Name" fullWidth required placeholder='Trading Name'></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField id="Contact Person" InputProps={{
                        endAdornment: <InputAdornment position='start'>
                            
                            <Person></Person>
                        </InputAdornment>
                    }} label="Contact Person" fullWidth required placeholder='Contact Person'></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField id="Phone Number" InputProps={{
                        endAdornment: <InputAdornment position='start'>
                            
                            <Phone></Phone>
                        </InputAdornment>
                    }} label="Phone Number" fullWidth required placeholder='Phone Number'></TextField>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                    <TextField id="Station Email" InputProps={{
                        endAdornment: <InputAdornment position='start'>
                            
                            <Mail></Mail>
                        </InputAdornment>
                    }} label="Station Email" fullWidth required placeholder='Station Email'></TextField>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField id="Station Varience" InputProps={{
                        endAdornment: <InputAdornment position='start'>
                            
                            <QueryStats></QueryStats>
                        </InputAdornment>
                    }} label="Station Varience" fullWidth required placeholder='Station Varience'></TextField>
                    </Grid>

                  
                   
                    <Grid item xs={12}>
                        <Button variant='contained' type='submit' color='primary' fullWidth>Sign Up</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='outlined' href='/login' color='primary' fullWidth>Login</Button>
                    </Grid>
                </Grid>
            
            </CardContent>
        </Card>
   
   
    </form>
   
  );
}
