import { Call, ContactSupport, DirectionsCar } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Button, CardMedia, Grid, Paper, Stack, Typography } from "@mui/material";


const BottomNavBar = () => {
    return (
        <Paper elevation={4} sx={{ bottom: 0, left: 0,right:0,backgroundColor:'#F15F2C'}}>
            <Grid container>
                <Grid item md={6}>
                    <img src="images/tradein.jpg" style={{width:'100%',height:'100%'}}/>
                </Grid>
                <Grid item md={6} marginBottom={5}>
                    <Stack spacing={1} marginLeft={2}>
                        <Typography sx={{fontSize:'25px',fontWeight:'bold'}}>Trade in your car and top up to get a new one</Typography>
                        <Typography sx={{fontSize:'40px',fontWeight:'bold'}}>TRADE IN YOUR CARS</Typography>
                        <Typography sx={{fontWeight:'bold'}}>A Legacy of Cars</Typography>
                        <Button variant="contained" size="small">Make an Enquiry</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default BottomNavBar;