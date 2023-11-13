import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import App_Bar from './appbar'
import FormComponent from "./formComponent";
import App from "../App";
import VehicleFinance from "./vehicleFinance";
import Footer from "./footer";
import { AccountCircle, Email, LocationOn, Message, Phone, PhoneAndroid, Send } from "@mui/icons-material";

export default function ContactUs () {
    return (
        
        <Box>
            <App_Bar/>
           <Grid container spacing={2}>
           <Grid item md={6} marginTop={10 }>
                <Stack direction="row" justifyContent="center">
                <img src="images/new-logo.png" style={{width:'100%'}}/>
                </Stack>
                <Stack direction='row' justifyContent='center' spacing={2}>
                    <LocationOn sx={{width:'60px',height:'60px',color:'red'}} />
                    <Stack direction="row"><Typography sx={{marginTop:'30px'}}>Jacaranda Close, Kenya Kiambu Road,</Typography></Stack>
                </Stack>
                <Stack direction='row' justifyContent='center' spacing={2}>
                    <Phone sx={{width:'40px',height:'40px',color:'blue'}} />
                    <Stack direction="row"><Typography sx={{marginTop:'3px'}}>+ (254) 112 008 848</Typography></Stack>
                </Stack>
                <Stack direction='row' justifyContent='center' spacing={2} marginTop={2}>
                    <Email sx={{width:'40px',height:'40px',color:'blue'}} />
                    <Stack direction="row"><Typography sx={{marginTop:'3px'}}>info@phenomenalimportsglobal.com</Typography></Stack>
                </Stack>
            </Grid>
            
            <Grid item marginTop={10} md={6}  marginBottom={3} >
                <Stack direction='row' justifyContent='center'>
                    <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>Get in touch with us</Typography>
                     
                </Stack>
              
                <Stack direction='row' justifyContent='center'>
                    <Typography sx={{fontSize:'10px',fontWeight:'bold'}}>Fill the below form. We will get back to you soon.</Typography>
                     
                </Stack>
               <Stack spacing={2} >
               <FormComponent helperText="Enter Your email" size="medium" label="email"  customIcon={<Email/>}/>
               <FormComponent helperText="Enter Your name" size="medium" label="Name"  customIcon={<AccountCircle/>}/>
               <FormComponent helperText="Enter Your PhoneNumber" size="medium" label="PhoneNumber"  customIcon={<PhoneAndroid/>}/>
               <FormComponent helperText="Enter Your Message" size="large" label="Message" customIcon={<Message/>} multiline rows={4}/>   
               <Button  size='large' variant='contained' endIcon={<Send/>}>Submit</Button>
               </Stack>
                
            </Grid>
           </Grid>
           
            <VehicleFinance/>
            <Footer/>
        </Box>
    );
}