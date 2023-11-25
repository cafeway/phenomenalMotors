
import { Card, CardContent, CardHeader, CardMedia, Grid, Stack, Typography } from '@mui/material';
import FormComponent from './formComponent';
import SelectComponent from './selectComponent'
import { CalendarMonth, DirectionsCar, LocalGasStation, PaidOutlined } from '@mui/icons-material';
import bodyTypes from '../data/bodytypes.json'

export default function SearchCar  () {
    const customIcon = <PaidOutlined color="primary" />;
    const makes = [
        {
          name: 'pradotx'
        }, 
        {
          name: 'pradoV8'
        },
        {
          name: 'urban cruiser'
        },
      ]
    
      const models = 
      [
        {name:"Toyota"},
        {name: "Mercedes"},
        {name: "BMW"},
      ]
    
      const fuelTypes = 
      [
        {
          name: "Gasoline"
        },
        {
          name: "Petrol"
        },
        {
          name: "Diesel"
        },
        {
          name: "Electricity"
        },
        {
          name: "Ethanol"
        },
      ]
    return (
        <>
         <Grid item md={5} margin={2}>
                <Card elevation={3}>
                    <CardHeader
                        action={
                            <img src="images/keys.png" style={{width:'50px',height:'50px'}}/>
                        }
                        title= {
                            <Stack direction="row" justifyContent='center'>
                                <Typography variant="h6" sx={{fontWeight:'bold'}}>FIND YOUR DREAM CAR</Typography>
                            </Stack>
                        }
                        subheader = {
                            <Stack direction="row" justifyContent='center'>
                                    <Typography sx={{fontSize:'18x'}}>  At Phenomenal motors we understand that everyone has a dream car. Let us help you find yours!"Dream big. Find bigger. Your dream car is waiting for you on phenomenalmotors."</Typography>
                               
                            </Stack>
                           
                        }
                        
                    />
                    <CardContent>
                       <img src="images/findCar.jpeg" alt="yes" style={{width:'100%'}}/>
                        
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={6}>
                <Stack spacing={1} justifyContent='center' margin={2}>
                <SelectComponent select size='small' helperText="Select a make" label="make"  data={models} icon={<DirectionsCar/>}  ></SelectComponent>
                <SelectComponent select size='small' helperText="Select a model" label="model"  data={makes} icon={<DirectionsCar/>}  ></SelectComponent>
                <FormComponent helperText="Minimum price" size="small" label="Min Price"  customIcon={customIcon}/>
                <FormComponent helperText="Minimum price" size="small" label="Max Price"  customIcon={customIcon}/>
                <SelectComponent select size='small' helperText="Type of Fuel" label="Fuel Type"  data={fuelTypes} icon={<LocalGasStation/>}></SelectComponent>
                <SelectComponent select size='small' helperText="Choose a body type" label="bodyType"  data={bodyTypes} icon={<DirectionsCar/>}></SelectComponent>
                <FormComponent helperText="Minimum year" size="small" label="Min Year"  customIcon={<CalendarMonth/>}/>
                <FormComponent helperText="Maximum year" size="small" label="Max Year"  customIcon={<CalendarMonth/>}/>
                </Stack>
            </Grid>
           
        </>
        
    );
}