import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { Badge, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Rating, Stack, Typography } from '@mui/material';
import { Camera, CameraAlt, CreditCard, MoreVert, ShoppingCart } from '@mui/icons-material';



const cars = [

  {
    "car_id": "PHM014",
    "make": "Land Rover",
    "model": "Range Rover Velar",
    "year": 2023,
    "color": "Black",
    "vin": "5N1AT2MT0GC771237",
    "mileage": "1000km",
    "engine_type": "Gasoline",
    "transmission_type": "Automatic",
    "fuel_type": "Petrol",
    "price": "6277500KES",
    "images": "images/cars/range-rover-velar.jpeg",
    "features": [
      "Stylish and aerodynamic design",
      "Luxurious interior with premium materials and finishes",
      "Powerful and efficient engine options",
      "Sophisticated all-wheel drive system",
      "Advanced driver assistance technologies",
      "State-of-the-art infotainment system"
    ]
  },
  {
    "car_id": "PHM016",
    "make": "Land Rover",
    "model": "Range Rover Amaron",
    "year": 2023,
    "color": "White",
    "vin": "5N1AT2MT0GC771236",
    "mileage": "2000km",
    "engine_type": "V8 Supercharged Petrol",
    "transmission_type": "Automatic",
    "fuel_type": "Petrol",
    "price": "12500000KES",
    "images": "images/cars/range-rover-amaron.jpeg",
    "features": [
      "5.0L V8 Supercharged Petrol engine",
      "8-speed automatic transmission",
      "All-wheel drive",
      "Air suspension",
      "Panoramic sunroof",
      "Leather seats",
      "Heated and cooled front seats",
      "Massaging front seats",
      "Rear entertainment system",
      "Apple CarPlay and Android Auto compatibility",
      "Blind spot monitoring",
      "Lane departure warning",
      "Adaptive cruise control",
      "Automatic emergency braking",
      "360-degree camera system",
      "Towing package"
    ]
  },
  {
    "car_id": "PHM015",
    "make": "Land Rover",
    "model": "Range Rover Sport",
    "year": 2023,
    "color": "Santorini Black",
    "vin": "5N1AT2MT0GC771238",
    "mileage": "1,500km",
    "engine_type": "V8 Supercharged Petrol",
    "transmission_type": "Automatic",
    "fuel_type": "Petrol",
    "price": "89,995 00KES",
    "images": "images/cars/range-rover-sport.jpeg",
     
    "features": [
      "Dynamic and powerful performance",
      "Luxurious and spacious interior",
      "Advanced all-terrain capabilities",
      "Comprehensive suite of driver assistance technologies",
      "State-of-the-art infotainment system"
    ]
  },{
    "car_id": "PHM016",
    "make": "Land Rover",
    "model": "Range Rover SV",
    "year": 2023,
    "color": "Blue",
    "vin": "5N1AT2MT0GC771239",
    "mileage": "1,000 km",
    "engine_type": "V8 Supercharged Petrol",
    "transmission_type": "Automatic",
    "fuel_type": "Petrol",
    "price": "183,500 00KES",
    "images": "images/cars/range-rover-sv.jpeg",
   
    "features": [
      "Ultra-luxurious interior with premium materials and finishes",
      "Powerful and efficient V8 engine",
      "Sophisticated all-wheel drive system",
      "Advanced driver assistance technologies",
      "State-of-the-art infotainment system",
      "Exclusive SV design cues"
    ]
  
  },
  {
    "car_id": "PHM017",
    "make": "Ford",
    "model": "Fiesta",
    "year": 2023,
    "color": "Red",
    "vin": "5N1AT2MT0GC771240",
    "mileage": "1,500 km",
  
    "engine_type": "Gasoline",
    "transmission_type": "Manual",
    "fuel_type": "Petrol",
    "price": "18,999 00KES",
    "images": "images/cars/ford-fiesta.jpeg",
    
    "features": [
      "Stylish and aerodynamic design",
      "Fun and agile driving experience",
      "Efficient engine options",
      "Advanced driver assistance technologies",
      "State-of-the-art infotainment system"
    ]
  },
  {
    "car_id": "PHM018",
    "make": "Ford",
    "model": "EcoSport",
    "year": 2023,
    "color": "White",
    "vin": "5N1AT2MT0GC771241",
    "mileage": "2,000 km",
  
    "engine_type": "Gasoline",
    "transmission_type": "Automatic",
    "fuel_type": "Petrol",
    "price": "23,995 00KES",
    "images": "images/cars/ford-ecosport.jpeg",
   
    "features": [
      "Subcompact SUV with a stylish design",
      "Spacious interior for its size",
      "Efficient engine options",
      "Advanced driver assistance technologies",
      "State-of-the-art infotainment system"
    ]
  },
  {
    "car_id": 19,
    "make": "Ford",
    "model": "Ranger",
    "year": 2023,
    "color": "Blue",
    "vin": "5N1AT2MT0GC771242",
    "mileage": "3,000 km",
   
    "engine_type": "Diesel",
    "transmission_type": "Automatic",
    "fuel_type": "Diesel",
    "price": "32,995 00KES",
    "images": "images/cars/ford-ranger.jpeg",
    "features": [
      "Midsize pickup truck with a rugged design",
      "Powerful and efficient engine options",
      "Capable four-wheel drive system",
      "Advanced driver assistance technologies",
      "State-of-the-art infotainment system"
    ]
  },
  {
    "car_id": "PHM020",
    "make": "Ford",
    "model": "Explorer",
    "year": 2023,
    "color": "Black",
    "vin": "5N1AT2MT0GC771244",
    "mileage": "5,000 km",
   
    "engine_type": "Gasoline",
    "transmission_type": "Automatic",
    "fuel_type": "Petrol",
    "price": "45,995 00KES",
    "images": "images/cars/ford-explorer.jpeg",
    
    "features": [
      "Three-row SUV with a spacious and luxurious interior",
      "Powerful and efficient engine options",
      "Intelligent four-wheel drive system",
      "Advanced driver assistance technologies",
      "State-of-the-art infotainment system"
    ]
  },
  {
    "car_id": "PHM021",
    "make": "Subaru",
    "model": "StI",
    "year": 2023,
    "color": "Blue",
    "vin": "5N1AT2MT0GC771245",
    "mileage": "6,000 km",
    "engine_type": "Gasoline",
    "transmission_type": "Automatic",
    "fuel_type": "Petrol",
    "price": "34,995 00KES",
    "images": "images/cars/subaru_sti.jpeg",
   
    "features": [
      "Compact SUV with a spacious and versatile interior",
      "All-wheel drive standard on all models",
      "Efficient engine options",
      "Advanced driver assistance technologies",
      "State-of-the-art infotainment system"
    ]
  },
  {
    "car_id": "PHM022",
    "make": "Subaru",
    "model": "WRX",
    "year": 2023,
    "color": "Blue",
    "vin": "5N1AT2MT0GC771246",
    "mileage": "7,000 km",
 
    "engine_type": "Gasoline",
    "transmission_type": "Manual",
    "fuel_type": "Petrol",
    "price": "29,995 00KES",
    "images": "images/cars/subaruwrx.jpeg",
    "features":
    [
      "Performance sedan with a turbocharged engine and all-wheel drive",
      "Sharp handling and responsive steering",
      "Sporty interior with supportive seats and a performance-oriented driving position",
      "Advanced driver assistance technologies",
      "State-of-the-art infotainment system"
    ]
  },
  {
    "car_id": "PHM023",
    "make": "Subaru",
    "model": "Forester XT",
    "year": 2023,
    "color": "Geyser Blue",
    "vin": "5N1AT2MT0GC771247",
    "mileage": "8,000 km",
    
    "engine_type": "Turbocharged Gasoline",
    "transmission_type": "Automatic",
    "fuel_type": "Petrol",
    "price": "39,995 00KES",
    "images": "images/cars/forester-xt.jpeg",
    "features": [
      "Compact SUV with a spacious and versatile interior",
      "All-wheel drive standard on all models",
      "Powerful turbocharged engine",
      "Sporty handling and responsive steering",
      "Advanced driver assistance technologies",
      "State-of-the-art infotainment system"
    ]
  },
  {
    "car_id": "PHM024",
    "make": "Subaru",
    "model": "Forester",
    "year": 2016,
    "color": "Silver Metallic",
    "vin": "5N1AT2MT0GC771248",
    "mileage": "100,000 km",
  
    "engine_type": "Gasoline",
    "transmission_type": "Automatic",
    "fuel_type": "Petrol",
    "price": "18,995 00KES",
    "images": "images/cars/forester-2016.jpeg",
    "features": [
      "Spacious and versatile interior",
      "All-wheel drive standard on all models",
      "Efficient engine options",
      "Advanced driver assistance technologies",
      "State-of-the-art infotainment system"
    ]
  }
  

]

export default function Dash() {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{marginTop:'30px',marginLeft:'auto',marginRight:'auto'}}>
      <Grid item md={12} sm={12} >
      <Typography sx={{fontWeight:'bold',fontSize:'30px'}}>FEATURED CARS</Typography>
      <Typography sx={{fontWeight:'bold',fontSize:'20px'}}>We have cars in stock and others are imports from Japan, UK and Thailand</Typography>
      </Grid>
     {/* <Typography>sdsdsdsd</Typography> */}
     {/* {
        cars.map((car,index)=>{
          <Grid item sm={6} xs={12} key={index}>
              <Card elevation={3}>
                <CardContent>dada</CardContent>
              </Card>
             </Grid>
        })
     } */}

    {cars.map((car)=>(
      <Grid item md={3}  marginBottom={2} >
        <Card elevation={3}>
          <CardHeader
            title= {
              <Typography sx={{fontWeight:'bold',fontStyle:'uppercase'}}>{car.make}</Typography>
            }
            subheader= {
              <Typography sx={{fontWeight:'bold',fontStyle:'uppercase'}}> {car.model}</Typography>
            }
            avatar = {
              
              <Stack direction="row" spacing={1}>
                <Badge badgeContent={10} color='primary'>
                <CameraAlt/> 
                </Badge>
              </Stack>
            }
            action= {
             <MoreVert/>
            }
          />
          <CardContent>
            <img
              src={car.images}
              alt="no"
              style={{width:'100%',height:'250px'}}
            />
            
            
          </CardContent>
          <CardActions>
            <Stack spacing={1}>
              <Typography sx={{fontWeight:'bold',fontSize:'20px'}}>${car.price}</Typography>
              <Rating name='read-only' value={5}/>
              <Stack direction='row' spacing={2}>
                <Button variant='outlined' size='small' startIcon={<ShoppingCart/>}>Reserve</Button>
                <Button variant='outlined' size='small' startIcon={<CreditCard/>}>Get A Quote</Button>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
     ))} 
   
  </Grid>
  );
}