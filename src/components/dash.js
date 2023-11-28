import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel'
import data from '../data/cars.json';
import bodyTypes from '../data/bodytypes.json'
import { CardHeader, Tab ,Typography,Stack, CardActions,Avatar, IconButton, Rating, Button, FormControl, Select, MenuItem, CardContent, MobileStepper, Divider, FormHelperText, Tabs, Card, Icon, Fab, CardMedia, Chip, useMediaQuery, TextField, InputAdornment, createTheme, SpeedDial, SpeedDialAction } from '@mui/material';
import Banner from './banner'
import FormComponent from './formComponent';
import SelectComponent from './selectComponent'
import App_Bar from './appbar';
import { AccountCircle, BrushOutlined, Build, CalendarMonth, CalendarMonthOutlined, Call, Camera, CameraAlt, CarCrashOutlined, CardTravel, Check, CurrencyExchange, Directions, DirectionsCar, Email, Facebook, LocalGasStation, LocalGroceryStore, MoreVert, Paid, PaidOutlined, Search, SearchOff, Sell, Twitter, Visibility, WhatsApp, YouTube } from '@mui/icons-material';
import App from '../App';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Footer from './footer'
import { ThemeProvider } from '@emotion/react';
import theme from './theme'
import BrandBanner from './brandBanner'
import BottomNavigation from './BottomNavigation'
import VehicleFinance from './vehicleFinance'
import BodySize from './bodySize'
import body from '../data/bodies.json'
import CarGrid  from './carsGrid';
import Checkbox from '@mui/material/Checkbox';
import Dashs from './dashboard';
import Dash from './dashboard';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SearchCar from './searchCar';
import TradeIn from './tradeIn'






export default function BasicGrid() {
 
  
  

    // Add more image URLs as needed
  const [selectedTab, setSelectedTab] = React.useState('1');

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const [modalOpen, setModalOpen] = React.useState(false);


  const handleModalOpen = () => {
    setModalOpen(true);
  }

  const handleModalClose = () => {
    setModalOpen(false);
  }

  const [carData,setCarData] = React.useState([]);

  const [cardsPerSlide, setCardsPerSlide] =  React.useState(1);
  React.useEffect(()=>{
    setCarData(data)
  },[])

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

  
  const brands = [
    "images/brands/audi-Audi.jpg",
    "images/brands/benx.jpg",
    "images/brands/bmw.jpg",
    "images/brands/ford.jpg",
    "images/brands/foton.jpg",
    "images/brands/honda.jpg",
    "images/brands/porche.jpg",
    "images/brands/infinite.jpg",
    "images/brands/jeep.jpg",
    "images/brands/kia.jpg",
    "images/brands/landrover.jpg",
    "images/brands/lexus.jpg",
    "images/brands/nisaan-Nisaan.jpg",
    "images/brands/mazda-Mazda.jpg",
    "images/brands/mini-Mini.jpg",
    "images/brands/subaru.jpg",
    "images/brands/volkswagen.jpg",
    "images/brands/volvo-Volvo.jpg",
    "images/brands/hino.png",
    "images/brands/isuzu.jpg",
    "images/brands/foton.jpg",
    "images/brands/mitsubishi.jpg",
    "images/brands/chevy.jpg",
    "images/brands/daihatsu.jpg",
    "images/brands/royal.jpg",
  ]
  const bodies = [
      {
          "name": "convertible",
          "image": "carbody/convertible.png"
      },
      {
          "name": "coupe",
          "image": "carbody/coupe.png"
      },
      {
          "name": "hatchback",
          "image": "carbody/hatchback.png"
      },
      {
          "name": "motorbike",
          "image": "carbody/motorbike.png"
      },
      {
          "name": "pickup",
          "image": "carbody/pickup.png"
      },
      {
          "name": "saloon",
          "image": "carbody/saloon.png"
      },
      {
          "name": "station-wagon",
          "image": "carbody/station-wagon.png"
      },
      {
          "name": "suv",
          "image": "carbody/suv.png"
      },
      {
          "name": "van",
          "image": "carbody/van.png"
      },
      {
          "name": "wagon",
          "image": "carbody/wagon.png"
      }
  ]

  const socialICons = [
    {icon: <WhatsApp sx={{color:'lightgreen'}}/>, name: 'whatsapp'},
    {icon: <Facebook sx={{color:'blue'}}/>, name: 'facebook'},
    {icon: <YouTube sx={{color:'red'}} />, name: 'youtube' },
    {icon: <Twitter sx={{color:'blue'}}/>, name: 'twitter'},
  ];
  

  // icons
  const customIcon = <PaidOutlined color="primary" />;
  

  // //screen sizes
  // const ExtraLargeScreen = useMediaQuery('(min-width: 1920)')
  // const LargeScreen = useMediaQuery('(min-width: 1280px)')
  // const MediumScreen = useMediaQuery('(min-width): 960')
  // const SmallScreen = useMediaQuery('(min-width: 600)')
  // const ExtraSmallScreen = useMediaQuery('(max-width: 600)')

  const [isLaptopScreen, setIsLaptopScreen] = React.useState(useMediaQuery('(min-width: 1024px)'));
  // getting and rendering cards per slide on the carousel
  

  return (
    
    <Grid container>
       <App_Bar/>
       <Banner/>
     
      
      
        <Grid item md={12}>
       
        <TabContext value={selectedTab}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
          <Tab icon={<Search fontSize='small'/>} iconPosition='start' label={<Typography sx={{fontSize:'11px',fontWeight:'bold'}}>Search a car</Typography>} value="1"/>
            <Tab icon={<CurrencyExchange fontSize='small' />} iconPosition='start' label={<Typography sx={{fontSize:'11px',fontWeight:'bold'}}>Trade in</Typography>} value="2"/>
            <Tab icon={<Build fontSize='small'/>} iconPosition='start' label={<Typography sx={{fontSize:'11px',fontWeight:'bold'}}>Service Your car</Typography>}value="3"/>
          </TabList>
        </Box>
        <TabPanel value="1">
        `<Grid container spacing={2}>
            
        <Grid item md={3} sm={12}>
               <SelectComponent select size='small' helperText="Select a make" label="make" fullWidth data={models} icon={<DirectionsCar/>}  ></SelectComponent>
              </Grid>
              <Grid item md={3} sm={12}>
               <SelectComponent select size='small' helperText="Select a model" label="model" fullWidth data={makes} icon={<DirectionsCar/>}  ></SelectComponent>
              </Grid>
                <Grid item md={3} sm={12}>
                  <FormComponent helperText="Minimum price" size="small" label="Min Price" fullWidth customIcon={customIcon}/>
              </Grid>
              <Grid item md={3} sm={12}>
              <FormComponent helperText="Minimum price" size="small" label="Max Price" fullWidth customIcon={customIcon}/>
              </Grid>
              <Grid item md={3} sm={12}>
              <SelectComponent select size='small' helperText="Type of Fuel" label="Fuel Type" fullWidth data={fuelTypes} icon={<LocalGasStation/>}></SelectComponent>
              </Grid>
              <Grid item md={3} sm={12}>
               <SelectComponent select size='small' helperText="Choose a body type" label="bodyType" fullWidth data={bodyTypes} icon={<DirectionsCar/>}></SelectComponent>

              </Grid>
              <Grid item md={3} sm={12}>
              <FormComponent helperText="Minimum year" size="small" label="Min Year" fullWidth customIcon={<CalendarMonth/>}/>
              </Grid>
              <Grid item md={3} sm={12}>
              <FormComponent helperText="Maximum year" size="small" label="Max Year" fullWidth customIcon={<CalendarMonth/>}/>
              </Grid>
            </Grid>
        </TabPanel>
        <TabPanel value="2">
         <Grid container spacing={2}>
            <Grid item md={2} sm={6}>
              <FormComponent helperText="Your preffered name" size="small" label="Name" fullWidth customIcon={<AccountCircle/>}/>
            </Grid>
            <Grid item md={2} sm={4}>
            <FormComponent helperText="Your Contact" size="small" label="PhoneNumber" fullWidth customIcon={<Call/>}/>
            </Grid>
            <Grid item md={2} sm={4}>
            <FormComponent helperText="Your Email Address" size="small" label="Email" fullWidth customIcon={<Email/>}/>
            </Grid>
            <Grid item md={2} sm={4}>
            <FormComponent helperText="Your cars make or model" size="small" label="Make and Model" fullWidth customIcon={<DirectionsCar/>}/>
            </Grid>
            <Grid item md={2} sm={4}>
            <FormComponent  helperText="Year of manufacturing" size="small" label="Year" fullWidth customIcon={<CalendarMonth/>}/>
            </Grid>
            <Grid item md={2} sm={4}>
            <FormComponent helperText="Licence plate" size="small" label="License plate" fullWidth customIcon={<DirectionsCar/>}/>
            </Grid>
         </Grid>
        </TabPanel>
        <TabPanel value="3">
        <Grid container spacing={2}>
            <Grid item md={2} sm={6}>
              <FormComponent helperText="Your preffered name" size="small" label="Name" fullWidth customIcon={<AccountCircle/>}/>
            </Grid>
            <Grid item md={2} sm={4}>
            <FormComponent helperText="Your Contact" size="small" label="PhoneNumber" fullWidth customIcon={<Call/>}/>
            </Grid>
            <Grid item md={2} sm={4}>
            <FormComponent helperText="Your Email Address" size="small" label="Email" fullWidth customIcon={<Email/>}/>
            </Grid>
            <Grid item md={2} sm={4}>
            <FormComponent helperText="Your cars make or model" size="small" label="Make and Model" fullWidth customIcon={<DirectionsCar/>}/>
            </Grid>
           
            <Grid item md={2} sm={4}>
            <FormComponent helperText="Preffered date of service" size="small" label="Date" fullWidth customIcon={<CalendarMonth/>}/>
            </Grid>
         </Grid>
        </TabPanel>
      </TabContext>

        </Grid>
      
     
     
    
    
   
      <Grid container spacing={2} marginLeft={1}>
      {/* <AnimatePresence>
      {brands.map((imageUrl, index) => (
          <motion.img
            key={index}
            src={imageUrl}
            alt={`Brand ${index}`}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        ))}
      </AnimatePresence> */}
     
      {brands.map((brand, i) => (
        <Grid item  key={i}>
          <CardMedia
            component="img"
            alt={brand}
            src={brand}
            sx={{ width: {md:'100px',sm:'15px',xm:'15px'}, height: 'auto' }} // Set the width and height of the images
          />
        </Grid>
      ))}
    </Grid>
     {/* <TradeIn/> */}
    <Grid container spacing={2} marginLeft={1} sx={{backgroundColor:'#white',marginTop:'20px'}} justifyContent='center'>
      <Grid item md={12}>
          <Typography sx={{fontSize:'30px', fontWeight:'bold'}}>SHOP CARS BY BODY STYLE</Typography>
          <Typography sx={{fontSize:'15px', fontWeight:'bold'}}>Get your dream car from Phenomenal Imports Global Limited in Nairobi</Typography>
        </Grid>

        {bodies.map((bodies, i) => (
        <Grid item sm={4} md={3} key={i}>
          <Card sx={{backgroundColor:'#4189B8'}}>
            <CardHeader
            avatar={
              <Checkbox size='small' sx={{backgroundColor:'white'}}/>
            }
              title={
                <Typography color='white '>{bodies.name}</Typography>
              }
              action ={
                <CardMedia
                component="img"
                alt={bodies.name}
                src={bodies.image}
                sx={{ width: '150px', height: '50px' }} // Set the width and height of the images
              />
              }
            />
            
          </Card>
         
        </Grid>
      ))}
    </Grid>
    <Grid container spacing={2} marginLeft={1} sx={{backgroundColor:'#white',marginTop:'20px'}}>
      
      
       
      
      
    </Grid>
   
    <Grid container spacing={2} marginLeft={1} sx={{backgroundColor:'#white',marginTop:'20px'}} justifyContent='center'>
        <Grid item >
              <Button size='large' variant='contained' startIcon={<SearchOff/>}>Search</Button>
      </Grid>
        </Grid>
        <Dash/>
        <Grid container marginTop={10} marginBottom={3} elevation={5} sx={{backgroundColor:'#4189B8'}}>
          <Grid sm={12} md={6} justifyContent='center'>
         
            <img src="images/schedule.jpg" style={{width:'100%',height:'500px'}}/>
            
          </Grid>
          
          <Grid sm={6} md={6} >
          <Stack  spacing={2} sx={{backgroundColor:'#45BBED',marginBottom:'10px',height:'100%'}}>
              <Typography sx={{fontWeight:'bold',fontSize:'30px'}}>Show some love to your car!</Typography>
              <Typography sx={{fontWeight:'bold',textTransform:'capitalize',fontSize:'60px',marginBottom:'10px'}}>Save Time and schedule service online</Typography>
              <Button variant='contained'  size='small' startIcon={<CalendarMonthOutlined/>} sx={{backgroundColor:'#F26737',marginTop:'auto'}}>Schedule</Button>
            </Stack>
            </Grid>
        </Grid>
        <VehicleFinance/>
        <BottomNavigation/>
  
 
        
        <Footer color="primary"/>
     
     
     
      </Grid>
    
  );
}


function CarGridItem ({car}) {
  return (
    <Grid item md={3} sm={6}            
    
    >
    
      <Card elevation={3}
        raised='true'
        sx={{width:'300px'}}
      >
        <CardHeader
       
        title={
          <Typography>{`${car.Make} ${car.Model}`}</Typography>
        }
        subheader ={
         <Stack direction='row' spacing={1}>
          <CameraAlt/>
          <Typography>26</Typography>
         </Stack>
        }
        // action={
        //  <Stack direction='row'>
        //   <Paid/>
        //   <Typography>1,000,000</Typography>
        //  </Stack>
        // }
        />
        <CardMedia
           sx={{height: 150,width:250}}
           image={car.image}
        />
        <CardActions>
          <Stack direction='row' alignContent='center'>
           
            <Stack direction='row'  spacing={0.2}>
              <Button startIcon={<LocalGroceryStore/>}  size="small">Reserve</Button>
              </Stack>
              <Stack direction='row'  spacing={0.2}>
              <Button  startIcon={<Visibility/>}  color='primary' size='small'>More Details</Button>
              </Stack>
          </Stack> 
        </CardActions>
      </Card>
   
    </Grid>
  );
}






