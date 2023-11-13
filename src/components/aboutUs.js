import { Card, CardContent, CardHeader, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import App_Bar from './appbar';
import Footer from './footer'
import VehicleFinance from './vehicleFinance'
import { AccountCircle, AutoAwesome, Recommend, Security } from "@mui/icons-material";
export default function AboutUs () {
    return (
        
        <Container fixed>
            <App_Bar/>
            <Grid container spacing={2}>
            <Grid item md={12} marginTop={10}>
                <Typography sx={{marginLeft:'auto',fontSize:'30px'}} justifyContent='center'>ABOUT US</Typography>
                <Stack alignItems='center' direction='row' justifyContent='center'>
                    <Typography sx={{fontWeight:'bold'}}>Phenomenal Imports Global Limited is a car dealership incorporated in Kenya dealing with importation and sale of new and
                second-hand Motor Vehicles. At Phenomenal Imports Global Limited we pride ourselves in offering quality and carefully sourced Vehicles,
                guided by our core values and a burning desire to satisfy customer needs. Vehicles in our dealership are sourced
                from Japan, Thailand, United Kingdom, Australia, South Africa and host of other countries to ensure variety of units
                to meet market demand.</Typography>
                </Stack>
            </Grid>
            <Grid item md={3} sm={12}>


                <Card elevation={2} sx={{width:'auto'}}>
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
            <Grid item md={3} sm={6}>
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
            <Grid item md={3} sm={12    }>
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
            <Grid item md={6} marginTop={8}>
                    <img src="images/new-logo.png" alt="hhh"/>
                </Grid>
                <Grid item md={6}>
                    <Stack spacing={2}>
                        <Typography>OUR MISSION</Typography>
                        <Typography>To provide high quality imports to all customers with utmost Trust, Loyalty, as well as maintain good customer Experience.</Typography>
                        <Typography>VISION</Typography>
                        <Typography>To be the Biggest & most Trusted Importers in Kenya and Globally, with A Legacy of Quality, Award-winning, family owned dealership of new and pre-owned vehicles with several locations across the city. Lowest prices and the best customer service guaranteed.</Typography>
                    </Stack>
                </Grid>
                <Grid item md={6}>
                    <Stack spacing={2}>
                        <Typography>OUR SERVICES</Typography>
                       
                       
                            <ol>
                                <li>Direct sale of brand new, foreign used and locally used Vehicles to both individuals and corporates.</li>
                                <li>Imports on behalf - allowing customers to ship in their desired Vehicle without the hassle and logistical complexities involved.</li>
                                <li>A service center offering Motor Vehicle maintenance services, such as respray, panel beating, upgrades, accessories and parts.</li>
                                <li>Trade-ins to allow clients to conveniently upgrade from current Vehicle to a newer and fresher unit. The trade-in Vehicle then covers part of the purchase price for their desired car.</li>
                            </ol>
                        
                    </Stack>
                </Grid>
                <Grid item md={6} marginTop={8}>
                    <img src="images/new-logo.png" alt="hhh"/>
                </Grid>
                <Grid item md={6} marginTop={8}>
                    <img src="images/new-logo.png" alt="hhh"/>
                </Grid>
                <Grid item md={6}>
                    <Stack spacing={2}>
                        <Typography>CORE VALUES</Typography>
                       
                       
                            <ol>
                        <li> Our Core Values</li>
                        <li>Transparency.</li>
                        <li>Professionalism.</li>
                        <li>Accountability.</li>
                        <li>Honesty.</li>
                        <li>
Integrity.</li>
                        <li>Resilience</li>
                        <li>Proficiency</li>






                                
                            </ol>
                        
                    </Stack>
                </Grid>
               
               
               
                <Grid item md={6} marginLeft={2}>
                    
                    <Stack spacing={2}>
                       




                    
                        
                    </Stack>
                </Grid>
               
                
                
            </Grid>
            
            
          
          
           
           
          
               
          
           
           
                
        
            <VehicleFinance/>
            <Footer/>
            
        </Container>
        
    );
}