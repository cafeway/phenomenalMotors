import { Button, Card, CardActions, CardContent, Grid, Stack, Typography } from "@mui/material";
import App_Bar from './appbar'
import Footer from './footer'
import VehicleFinance from "./vehicleFinance";
import FormComponent from "./formComponent";
import { AccountCircle, Call, CheckBox, DirectionsCarFilled, Email } from "@mui/icons-material";


export default function TradeIn  () {
    return (
        <Grid container>
            <App_Bar/>
            <Grid item md={4} marginTop={8} marginBottom={8}>
                <img src="images/tradein.png" style={{width:'100%'}}/>
            </Grid>
            <Grid item md={8}  marginTop={8} marginBottom={8}>
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
          
            <Grid item md={9} justifyContent='center' sx={{marginLeft:'auto',marginRight:'auto'}}>
            
            <Card sx={{backgroundColor:'#F15F2C'}} elevation={5}>

                <CardContent>
                <Stack marginBottom={2}>
            <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>SELL YOUR CAR TODAY !!!</Typography>
            <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>Fill the below form. We will get back to you soon.</Typography>
            </Stack>
            <Stack spacing={2}>
            <FormComponent helperText="Enter your name" size='small' label='Name' fullWidth='true' customIcon={<AccountCircle/>} sx={{marginBottom:'20px'}}/>
                    <FormComponent helperText="Enter your Email" size='small' label='Email' fullWidth='true' customIcon={<Email/>} sx={{marginBottom:'10px',marginTop:'10px'}}/>
                    <FormComponent helperText="Enter your PhoneNumber" size='small' label='PhoneNumber' fullWidth='true' customIcon={<Call/>} sx={{marginBottom:'10px',marginTop:'10px'}}/>
                    <FormComponent helperText="Whats your cars make" size='small' label='Make' fullWidth='true' customIcon={<DirectionsCarFilled/>} sx={{marginBottom:'10px',marginTop:'10px'}}/>
                    <FormComponent helperText="Enter your cars Model" size='small' label='Model' fullWidth='true' customIcon={<DirectionsCarFilled/>} sx={{marginBottom:'10px',marginTop:'10px'}}/>
            </Stack>
                    
                </CardContent>
                <CardActions>
                    <Stack spacing={1}>
                    <Stack direction='row' spacing={1}>
                    <CheckBox defaultChecked label="I agree "/> <Typography>I agree to receive marketing emails from Phenomenal Imports Global Limited</Typography> 
                        </Stack>
                        <Stack direction='row' spacing={1} justifyContent="center">
                        <Typography> Kindly note that these email include but are not limited to newsletters, promotional offers and announcements from Phenomenal Imports Global Limited. Each email you receive from us provides a one-click method to unsubscribe from the distribution list.</Typography>
                    </Stack>
                    </Stack>
                   
                   

                  
                </CardActions>
            </Card>
            <Button fullWidth sx={{backgroundColor:'#F15F2C',marginTop:'10px',marginBottom:'20px'}} size="large" variant="contained">Submit</Button>
            </Grid>
                    {/* <VehicleFinance/>
                    <Footer/> */}
        </Grid>
    );
}