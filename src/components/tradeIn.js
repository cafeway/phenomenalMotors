import { Grid, Stack, Typography } from "@mui/material";
import App_Bar from './appbar'
import Footer from './footer'
import VehicleFinance from "./vehicleFinance";

export default function TradeIn  () {
    return (
        <Grid container>
            <App_Bar/>
            <Grid item md={12} marginTop={8} marginBottom={8}>
                <img src="images/tradeIn-1.jpg" style={{width:'100%'}}/>
            </Grid>
            <Grid item md={12}>
                <Stack spacing={2} direction='row' justifyContent={'center'}>
                    <Stack><Typography sx={{fontWeight:'bold',fontSize:'30px'}}>KENYAN USED</Typography>
                        
                    </Stack>
                    
                </Stack>
                <Stack spacing={2} direction='row' justifyContent={'center'} margin={2}>
                    <Typography sx={{fontSize:'15px',fontWeight:'bold',fontColor:'#45BBED'}}>Trade in your car and top up to get a new one.
Are you interested in Trading in your vehicle?
Text Phenomenalimportsglobal to 0729955227 / call us via 0729 955 227 and 0112 008 848
Or fill the form below and find out the worth of your car..</Typography>
                    </Stack>
            </Grid>
            <Grid></Grid>
           
                    <VehicleFinance/>
                    <Footer/>
        </Grid>
    );
}