import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Card, CardContent, CardHeader, Checkbox, FormControlLabel, Grid, InputAdornment, Tab, Tabs, Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import { AccountCircleOutlined, Login, Mail, Visibility, WidthFull } from '@mui/icons-material';
import { Link, Router } from 'react-router-dom';
export default function FormPropsTextFields() {

    
    const [value,setValue] = React.useState('customer');
  return (

        <form style={{marginTop:'0px'}}>
           
        
        <Card style={{maxWidth:450,padding:"20px 5px",marginLeft:'auto',marginRight:'auto',marginTop:'30px',marginBottom:'auto'}}>
           <CardHeader
            title={
                <>
                    <Stack direction='row' justifyContent='center'>
                        <AccountCircleOutlined fontSize='large' color='success'></AccountCircleOutlined>
                        
                    </Stack>
                    <Stack direction='row' justifyContent='center'>
                        <Typography variant='body3' fontSize={20}>WELCOME</Typography>
                    </Stack>
                
                </>
                
                
            }
            subheader={
                <Stack direction='row' justifyContent='center'>
                    <Tabs value={value}>
                        <Tab value='vendor' label="Vendor"/>
                        <Tab value='customer' label="Customer"/>
                    </Tabs>
                </Stack>
            }
           />
            <CardContent>
            <Stack direction='row'  justifyContent='center'>
            <Stack spacing={1}>
           
           
            
            
           
           
            </Stack>
            
            </Stack>
                <Grid container spacing={1} marginTop={3}>
                    <Grid item xs={12} sx={{marginBottom:'10px'}}>
                    <TextField id="Email" autoFocus='true'
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>
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
                    <Grid item xs={12} sx={{marginBottom: '5px'}}>
                   
                        <FormGroup sx={{marginLeft:'7px'}}>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="I want to receive inspiration, marketing promotions and updates via email." />
                            
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12}>
                       <Link to='/signUp'>Sign Up</Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' type='submit' color='success' fullWidth>Login</Button>
                    </Grid>
                </Grid>
            
            </CardContent>
        </Card>
   
   
    </form>

    
   
  );
}
