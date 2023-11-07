import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AppBar, Fab, Grid, Stack, Toolbar } from '@mui/material';
import { Facebook, Twitter, WhatsApp, YouTube } from '@mui/icons-material';

const Footer = ({color}) => {
  return (
    <AppBar position="static" sx={{ top: 'auto', bottom: 0, color: color }}>
      <Toolbar>
        
        <Box flexGrow={1}>
            
            <Grid container spacing={2}>
                <Grid item md={6} sx={{marginTop:'5px',marginBottom:'5px'}}>
                    <img src='images/phm-logo.png' style={{width:'400px',marginTop:'7px'}}/>
                </Grid>
                <Grid item md={6} sx={{marginTop:'50px',marginBottom:'5px'}}>
                    <Typography sx={{color:'black',fontWeight:'bold'}}>Copyright of  info@phenomenalimportsglobal.com</Typography>
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
