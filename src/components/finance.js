import { Grid, Stack, Typography } from "@mui/material";
import App_Bar from './appbar'
import Footer from './footer'
import VehicleFinance from "./vehicleFinance";

export default function Finance () {
    return (
        <Grid container>
            <App_Bar/>
            <Grid item md={12} marginTop={8} marginBottom={8}>
                <img src="images/finance.jpg" style={{width:'100%'}}/>
            </Grid>
            <Grid item md={12}>
                <Stack spacing={2} direction='row' justifyContent={'center'}>
                    <Stack><Typography sx={{fontWeight:'bold',fontSize:'30px'}}>VEHICLE FINANCE</Typography>
                        
                    </Stack>
                    
                </Stack>
                <Stack spacing={2} direction='row' justifyContent={'center'} margin={2}>
                    <Typography sx={{fontSize:'15px',fontWeight:'bold',fontColor:'#45BBED'}}>Looking to buy a car through Financing?
Welcome to PHENOMENAL IMPORTS GLOBAL LIMITED where we connect you with the best financing/lending institutions here in Kenya. We work with all local banks, Saccos & Co-operatives, Microfinance lending institutions, Insurance companies, and Employers.</Typography>
                    </Stack>
            </Grid>
            <Grid item md={4} marginTop={5} marginLeft={3}>
                <Stack direction="row" justifyContent='center'>
                    <img src="images/visit-bank.png" style={{color:'red'}}/>
                </Stack>
                <Stack direction='row' justifyContent='center'>
                    <Stack>
                        <Typography sx={{fontWeight:'bold'}}>Visit Bank</Typography>
                    </Stack>
                    
                </Stack>
                <Stack direction='row' justifyContent='center'>
                    <Typography>Visit your nearest bank and request
for six months bank statements.</Typography>
                </Stack>
            </Grid>
            <Grid item md={4} marginTop={5} marginLeft={3}>
                <Stack direction="row" justifyContent='center'>
                    <img src="images/send-statement.png" style={{color:'red'}}/>
                </Stack>
                <Stack direction='row' justifyContent='center'>
                    <Stack>
                        <Typography sx={{fontWeight:'bold'}}>Send statements</Typography>
                    </Stack>
                    
                </Stack>
                <Stack direction='row' justifyContent='center'>
                    <Typography>Scan them or take clear pictures & send them to info@phenomenalimportsglobal.com or whatsapp them to 0729955227.</Typography>
                </Stack>
            </Grid>
            <Grid item md={3} marginTop={5} marginLeft={3}>
                <Stack direction="row" justifyContent='center'>
                    <img src="images/our-team.png" style={{color:'red'}}/>
                </Stack>
                <Stack direction='row' justifyContent='center'>
                    <Stack>
                        <Typography sx={{fontWeight:'bold'}}>OUR TEAM</Typography>
                    </Stack>
                    
                </Stack>
                <Stack direction='row' justifyContent='center'>
                    <Typography>Our Team will revert immediately advising you on the cars that you qualify for financing and you pick your preferred option.</Typography>
                </Stack>
            </Grid>
            <Grid item md={3} marginTop={5} marginLeft={3}>
                <Stack direction="row" justifyContent='center'>
                    <img src="images/our-team.png" style={{color:'red'}}/>
                </Stack>
                <Stack direction='row' justifyContent='center'>
                    <Stack>
                        <Typography sx={{fontWeight:'bold'}}>PAY 30% DEPOSIT</Typography>
                    </Stack>
                    
                </Stack>
                <Stack direction='row' justifyContent='center'>
                    <Typography>Our Team will revert immediately advising you on the cars that you qualify for financing and you pick your preferred option.</Typography>
                </Stack>
            </Grid>
            <Grid item md={4} marginTop={5} marginLeft={3}>
                <Stack direction="row" justifyContent='center'>
                    <img src="images/sign-offer.png" style={{color:'red'}}/>
                </Stack>
                <Stack direction='row' justifyContent='center'>
                    <Stack>
                        <Typography sx={{fontWeight:'bold'}}>SIGN OFFER LETTER</Typography>
                    </Stack>
                    
                </Stack>
                <Stack direction='row' justifyContent='center'>
                    <Typography>Within six days you will be requested to sign the offer lette.</Typography>
                </Stack>
            </Grid>
            <Grid item md={4} marginTop={5} marginLeft={3}>
                <Stack direction="row" justifyContent='center'>
                    <img src="images/financed.png" style={{color:'red'}}/>
                </Stack>
                <Stack direction='row' justifyContent='center'>
                    <Stack>
                        <Typography sx={{fontWeight:'bold'}}>FINANCED</Typography>
                    </Stack>
                    
                </Stack>
                <Stack direction='row' justifyContent='center'>
                    <Typography>You will then be called to process comprehensive insurance cover and this can be financed as well through Insurance Premium Policy.</Typography>
                </Stack>
            </Grid>
            <Grid item md={12} marginTop={5} marginLeft={3}>
                <Stack direction="row" justifyContent='center'>
                    <img src="images/get-car.png" style={{color:'red'}}/>
                </Stack>
                <Stack direction='row' justifyContent='center'>
                    <Stack>
                        <Typography sx={{fontWeight:'bold'}}>GET CAR</Typography>
                    </Stack>
                    
                </Stack>
                <Stack direction='row' justifyContent='center'>
                    <Typography>You will be requested to sign the release letter and at this stage we shall release the car to you.s</Typography>
                </Stack>
            </Grid>
            <Grid item md={12} margin={10}>
                <Stack direction="row" justifyContent='center'>
                    <Typography color="success"  sx={{fontSize:'30px'}}>The process is as easy as that, what are you waiting for? Hurry up and get your self your dream car.
Our team is waiting for your statement to make it happen.</Typography>
                    </Stack>
                    </Grid>
                    <VehicleFinance/>
                    <Footer/>
        </Grid>
    );
}