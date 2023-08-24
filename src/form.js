import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Avatar, Card, CardContent, CardHeader, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import { WidthFull } from '@mui/icons-material';
export default function FormPropsTextFields() {
  return (
    <form style={{marginTop:'30px'}}>
        
        <Card style={{maxWidth:450,margin:"auto auto",padding:"20px 5px"}}>
            
            <CardContent>
            <Stack direction='row'  justifyContent='center'>
            <Stack spacing={1}>
            <Typography variant='body3' fontSize={20}>Sign Up</Typography>

                <LockIcon fontSize='large' sx={{color:'purple',paddingLeft:'15px'}} ></LockIcon>
            
            </Stack>
            </Stack>
                <Grid container spacing={1} marginTop={3}>
                    <Grid item xs={12} sm={6}>
                    <TextField id="First Name" helperText="First Name" label="First Name" placeholder='Fill in Your first name' required fullWidth></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField id="SecondName" label="Second Name" fullWidth required placeholder='Fill in Your second Name'></TextField>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField id="Email" type='email' label="Email" fullWidth required placeholder='Fill in Email'></TextField>
                    </Grid>
                    <Grid item xs={12} sx={{marginBottom: '5px'}}>
                    <TextField id="Password" type='password' label="Password" fullWidth required placeholder='************'></TextField>
                    </Grid>
                    <Grid item xs={12} sx={{marginBottom: '5px'}}>
                   
                        <FormGroup sx={{marginLeft:'7px'}}>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="I want to receive inspiration, marketing promotions and updates via email." />
                            
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' type='submit' color='primary' fullWidth>Sign Up</Button>
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
