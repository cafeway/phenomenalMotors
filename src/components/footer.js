import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AppBar, Fab, Grid, Stack, Toolbar } from '@mui/material';
import { Call, Facebook, Instagram, LocationCity, LocationOn, LocationOnTwoTone, Twitter, WhatsApp, YouTube } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = ({color}) => {
  return (
    <AppBar position="static" sx={{ top: 'auto', bottom: 0, color: color,marginTop:'10px'}}>
      <Toolbar>
        
        <Box flexGrow={1}>
            
            <Grid container spacing={2}>
                <Grid item md={4} sx={{marginTop:'5px',marginBottom:'5px'}}>
                    <img src='images/new-logo.png' style={{width:'200px'}}/>
                </Grid>
                <Grid item md={8} sx={{marginTop:'50px',marginBottom:'5px'}} spacing={2}>
                  <Stack direction="row" spacing={2}>
                    <Link to='www.google.com'>
                    <WhatsApp sx={{color:'lightgreen'}}/>
                    </Link>
                    <Link to='https://www.instagram.com/phenomenal_imports_limited?r=nametag'>
                      <Instagram/>
                    </Link>
                    <Link to="https://www.facebook.com/Phenomenalimportsglobal" >
                      <Facebook/>
                      
                    </Link>
                    <Link to="https://twitter.com/PhenomenalLTD?t=l6Fcoatq5G_jUmV7jVHtcw&s=09">
                      <Twitter/>
                    </Link>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <LocationOn sx={{color:'red'}}/> 
                    <Typography>Jacaranda off ridgeways </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                      <Call/>
                      <Typography> 0729 955 227,
0112 008 848</Typography>
                      </Stack>
                   
                    <Typography sx={{color:'black',fontWeight:'bold'}}>Copyrights 2023 Phenomenal Imports Global. All Rights Reserved.| Privacy Policy & Terms Of Use | Designed & Developed by Ink It Solutions Ltd</Typography>
                </Grid>
                
            </Grid>
          {/* <Typography variant="body1" color="inherit">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </Typography> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
