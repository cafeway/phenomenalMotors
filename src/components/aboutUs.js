import { Card, CardContent, CardHeader, Grid, Stack, Typography } from "@mui/material";
import App_Bar from './appbar';
import Footer from './footer'
import VehicleFinance from './vehicleFinance'
import { AccountCircle, AutoAwesome, Recommend, Security } from "@mui/icons-material";
export default function AboutUs () {
    return (
        
        <Grid fluid alignItems ='center'>
            <App_Bar/>
            <Grid item md={12} marginTop={10}>
                <Typography sx={{marginLeft:'500px',fontSize:'30px'}}>ABOUT US</Typography>
                <Stack alignItems='center' direction='row' justifyContent='center'>
                    <Typography sx={{fontWeight:'bold'}}>Phenomenal Imports Global Limited is a car dealership incorporated in Kenya dealing with importation and sale of new and
                second-hand Motor Vehicles. At Phenomenal Imports Global Limited we pride ourselves in offering quality and carefully sourced Vehicles,
                guided by our core values and a burning desire to satisfy customer needs. Vehicles in our dealership are sourced
                from Japan, Thailand, United Kingdom, Australia, South Africa and host of other countries to ensure variety of units
                to meet market demand.</Typography>
                </Stack>
            </Grid>
            <Typography sx={{marginLeft:'500px',fontSize:'20px'}}>CORE VALUES</Typography>
            <Grid container spacing={2} justifyItems='center'>
            <Grid item md={3}>
                <Card elevation={2}>
                    <CardContent>
                        <Recommend sx={{width:'100px',height:'100px',marginLeft:'70px'}}/>
                    </CardContent>
                    <CardHeader
                        title={
                            <Typography sx={{fontWeight:'bold',fontSize:'20px',marginLeft:'70px'}}>Reliability</Typography>
                        }
                    />
                </Card>
            </Grid>
            <Grid item md={3}>
                <Card elevation={2}>
                    <CardContent>
                        <Security sx={{width:'100px',height:'100px',marginLeft:'70px'}}/>
                    </CardContent>
                    <CardHeader
                        title={
                            <Typography sx={{fontWeight:'bold',fontSize:'20px',marginLeft:'70px'}}>Integrity</Typography>
                        }
                    />
                </Card>
            </Grid>
            <Grid item md={3}>
                <Card elevation={2}>
                    <CardContent>
                        <AccountCircle sx={{width:'100px',height:'100px',marginLeft:'70px'}}/>
                    </CardContent>
                    <CardHeader
                        title={
                            <Typography sx={{fontWeight:'bold',fontSize:'20px',marginLeft:'70px'}}>Customer Care</Typography>
                        }
                    />
                </Card>
            </Grid>
            <Grid item md={3}>
                <Card elevation={2}>
                    <CardContent>
                        <AutoAwesome sx={{width:'100px',height:'100px',marginLeft:'70px'}}/>
                    </CardContent>
                    <CardHeader
                        title={
                            <Typography sx={{fontWeight:'bold',fontSize:'20px',marginLeft:'70px'}}>Satisfaction</Typography>
                        }
                    />
                </Card>
            </Grid>
            <Grid container spacing={2} justifyItems='center' marginTop={3}>
                <Grid item md={6}>
                </Grid>
                <Grid item md={6}>
                    <Stack spacing={2}>
                        <Typography>OUR MISSION</Typography>
                        <Typography>To provide high quality imports to all customers with utmost Trust, Loyalty, as well as maintain good customer Experience.</Typography>
                        <Typography>VISION</Typography>
                        <Typography>To be the Biggest & most Trusted Importers in Kenya and Globally, with A Legacy of Quality, Award-winning, family owned dealership of new and pre-owned vehicles with several locations across the city. Lowest prices and the best customer service guaranteed.</Typography>
                    </Stack>
                </Grid>
            </Grid>
            </Grid>
            <VehicleFinance/>
            <Footer/>
        </Grid>
    );
}