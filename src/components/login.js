import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Avatar, Card, CardContent, CardHeader, Checkbox, FormControlLabel, Grid, InputAdornment, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import { Login, Mail, Visibility, WidthFull } from '@mui/icons-material';
import { Link, Router } from 'react-router-dom';
export default function FormPropsTextFields() {
    const [count,setCount] = React.useState(0);
  return (

        <form style={{marginTop:'30px'}}>
           
        
        <Card style={{maxWidth:450,margin:"auto auto",padding:"20px 5px"}}>
            <CardHeader
            action= {
               <p>{count}</p>
            }
            />
            <CardContent>
            <Stack direction='row'  justifyContent='center'>
            <Stack spacing={1}>
            <Typography variant='body3' fontSize={20}>lOGIN</Typography>
              
                <Login fontSize='large' sx={{color:'orange',paddingLeft:'10px'}} ></Login>
            
            </Stack>
            </Stack>
                <Grid container spacing={1} marginTop={3}>
                    <Grid item xs={12}>
                    <TextField id="Email" autoFocus='true'
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>
                            <Mail color='primary'></Mail>
                        </InputAdornment>
                    }}
                    type='email' 
                    label="Email"
                    fullWidth
                    required
                    placeholder='Fill in Email'>
                    </TextField>
                    </Grid>
                    <Grid item xs={12} sx={{marginBottom: '5px'}}>
                    <TextField id="Password" type='password'  InputProps={{startAdornment: <InputAdornment position='start'>
                        <Visibility color='primary'>

                        </Visibility>
                    </InputAdornment>}} label="Password" fullWidth required placeholder='************'></TextField>
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
                        <Button variant='contained' onClick={()=>setCount(count+1)} type='submit' color='success' fullWidth>Login</Button>
                    </Grid>
                </Grid>
            
            </CardContent>
        </Card>
   
   
    </form>

    
   
  );
}
