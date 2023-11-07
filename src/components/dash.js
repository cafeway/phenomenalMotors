import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardHeader, Tab ,Typography,Stack, CardActions,Avatar, IconButton, Rating, Button, FormControl, Select, MenuItem, CardContent, MobileStepper, Divider, FormHelperText, Tabs } from '@mui/material';
import { Assessment, AssignmentInd, Calculate, CalendarMonth, CheckCircle, GridView, Insights, KeyboardArrowLeft, KeyboardArrowRight, LocalGasStation, LocalGroceryStoreOutlined, LockClock, MoreVert, Place, PointOfSale, Receipt, RemoveRedEye, Toll, WorkspacePremium } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import { PieChart } from '@mui/x-charts/PieChart';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import RepeatIcon from '@mui/icons-material/Repeat';
import App_Bar from './appbar';

const StyledGrid = styled(Grid)(({ theme }) => ({
  // Default marginTop for all screen sizes

  [theme.breakpoints.up('sm')]: {
    marginTop: '-60px', // Adjusted marginTop for screens with width >= 600px (sm breakpoint
  },

//   [theme.breakpoints.up('md')]: {
//     marginTop: '60px', // Adjusted marginTop for screens with width >= 960px (md breakpoint)
//   },
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const [rating,setRating] = React.useState(4);

  const [station, setStation] = React.useState('Esque Station');
  const images = [
    {
        src: 'images/tlube.jpg',
        price: '1500ksh',
        sales: '100pcs',
        tag: 'Total Lube'
    },
    {
        src: 'images/kgas.jpg',
        price: '2500ksh',
        sales: '1000pcs',
        tag: 'K-Gas'
    },
    {
        src: 'images/airFilter.jpg',
        price: '2900ksh',
        sales: '140pcs',
        tag: 'Air Filters'
    },
    {
        src: 'images/bulb.jpg',
        price: '290ksh',
        sales: '1400pcs',
        tag: 'Bulb'
    },
    
    
    // Add more image URLs as needed
  ];
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const timelineData = [
    {
      title: 'Today',
      content: 'Content for Event 1...',
    },
    {
      title: 'Weekly',
      content: 'Content for Event 2...',
    },
    {
      title: 'Monthly',
      content: 'Content for Event 3...',
    },
    // Add more timeline events as needed
  ];
  const stations = [
    "Esque Station",
    "Chuka Station",
    "Daisy Station",
    "Brian Station",
    "James Station",
  ];
  const data = [
    { label: 'Group A', value: 400 },
    { label: 'Group B', value: 300 },
    { label: 'Group C', value: 300 },
    { label: 'Group D', value: 200 },
  ];

 
  const handleStationChange = (event) => {
    setStation(event.target.value);
  }
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  React.useEffect(() => {
    const autoScroll = setInterval(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % images.length);
    }, 10000); // Auto-scroll every 3 seconds

    return () => {
      clearInterval(autoScroll);
    };
  }, []);
  return (
    <>
    <App_Bar/> 
    <Box sx={{ flexGrow: 1 }} marginTop={1}>
         <Grid container spacing={2} justifyContent='left' marginLeft={5} marginBottom={2}>
            <Grid item>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="primary"
                href="/"
                >
                <GridView color='primary' sx={{ mr: 0.5 }} fontSize="inherit" />
                Crato
                </Link>
                <Link
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="primary"
                href="/material-ui/getting-started/installation/"
                >
                <Assessment color='primary' sx={{ mr: 0.5 }} fontSize="inherit" />
                Dashboard
                </Link>
              
            </Breadcrumbs>
            </Grid>
         </Grid>
         
      <Grid container spacing={2} justifyContent='center'>
        
        <Grid item xs={12} sm={5}>
          
            <Card elevation={0}>
                <CardHeader
                    avatar = {
                        <Avatar src='images/avator.jpg'  sx={{ width: '100px', height: '100px' }}></Avatar>
                    }
                    title= {
                        
                        // <Stack direction='row' spacing={1}>
                        <Typography variant='h6'>Congratulations <b>Brian!!</b> &#127942; </Typography>
                        // <Typography sx={{fontSize:'30px'}}>&#10024;</Typography>
                        /* </Stack> */
                        
                        
                    }
                    subheader ={
                        <Typography sx={{fontSize:'13px'}}>Best seller of the week</Typography>
                    }
                    action= {
                        <IconButton aria-label='settings'>
                            <MoreVert/>
                        </IconButton>
                    }
                />
               
                <CardActions>
                    <Rating
                        name="rating"
                        value={rating}
                        onChange={(event,newValue)=>{
                            setRating(newValue);
                        }}
                    ></Rating>
                    <Button sx={{marginLeft:'10px'}} variant='outlined' startIcon={<AssignmentInd/>}>Profile</Button>
                </CardActions>
            </Card>
          
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card raised='true'>
             
             
             <CardContent>
                <Stack direction='row'spacing={2}justifyContent='center'>
                    <Card elevation={1} sx={{width:'300px'}}>
                        <CardHeader
                            avatar={
                                <LocalGroceryStoreOutlined fontSize='large' color='primary'></LocalGroceryStoreOutlined>
                            }
                            title={
                                <Typography>Total Sales</Typography>
                            }
                            action={
                                <MoreVert/>
                            }
                            subheader="10000/="
                        />
                        <CardActions>
        
                           
                        </CardActions>
                    </Card>
                    <Card elevation={1} sx={{width:'300px'}}>
                        <CardHeader
                            avatar={
                                
                                <Receipt fontSize='large' color='error'></Receipt>
                            }
                            title={
                                <Typography color='error'
                                >Invoices</Typography>
                            }
                            action={
                                <MoreVert/>
                            }
                            subheader={
                                <Chip color='error' variant='outlined' label='100' icon={<Calculate/>}/>
                                    
                            }
                        />
                        <CardActions>
        
                           
                        </CardActions>
                    </Card>
                </Stack>
                <Stack direction='row'spacing={2}justifyContent='center' marginTop={1}>
                    <Card elevation={1} sx={{width:'300px'}}>
                        <CardHeader
                            avatar={
                                <Toll fontSize='large' color='warning'></Toll>
                            }
                            title={
                                <Typography sx={{color:'#ED6C02'}}>Expenses</Typography>
                            }
                            action={
                                <MoreVert/>
                            }
                            subheader={
                                <Chip variant='outlined' color='warning' label="100000"></Chip>
                            }
                        />
                        <CardActions>
        
                           
                        </CardActions>
                    </Card>
                    <Card elevation={1} sx={{width:'300px'}}>
                        <CardHeader
                            avatar={
                                <Insights fontSize='large' color='success'></Insights>
                            }
                            title={
                                <Typography color='#2E7D32'>Total Sales</Typography>
                            }
                            action={
                                <MoreVert/>
                            }
                            subheader={
                                <Chip variant='outlined' color='success' label="100000"></Chip>
                            }
                        />
                        <CardActions>
        
                           
                        </CardActions>
                    </Card>
                </Stack>
             </CardContent>
          </Card>
           
          
        </Grid>
        <StyledGrid item xs={12} sm={5} sx={{marginTop:'auto'}}>
        <Card>
                <CardHeader
                    
                    action= {
                        <></>
                    }
                    title={
                        <>
                        <FormControl  fullWidth='true'>
                        <InputLabel id="demo-simple-select-autowidth-label">Station</InputLabel>
                       <Select
                              id="demo-simple-select-autowidth"
                             
                              label="station"
                              value={station}
                              onChange={handleStationChange} 
                       >
                           
                       
                           {stations.map((station, index) => (
                               <MenuItem key={index} value={station}>
                               {station}
                               </MenuItem>
                           ))}
                       </Select>
                       <FormHelperText>Sales by Products</FormHelperText>
                   </FormControl>
                   
                   </>
                    }
                />
            <CardContent>
                
                
                    <Card fullWidth='true' elevation={0} sx={{flexGrow:1}}>
                        <CardHeader
                            action ={
                                <RemoveRedEye color='primary'/>
                            }
                            avatar={
                                <img src={images[activeStep].src} alt={`Image ${activeStep}`} style={{ width: '100px' }} />
                            }
                            title={
                                <Typography variant="h6" sx={{fontFamily:'robot'}} fontWeight={3} fontStyle='bold' >{images[activeStep].tag}</Typography>
                            }
                            
                            subheader ={
                                
                                <Chip label={`${images[activeStep].sales} sold`} icon={<CheckCircle/>} color="primary" variant='outlined' />
                            }
                            
                        />
                       
                       <CardActions>
                            
                       </CardActions>
                    </Card>
                   
                <MobileStepper
                    variant="dots"
                    steps={images.length}
                    position="end"
                    activeStep={activeStep}
                    nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === images.length - 1}>
                        
                        <KeyboardArrowRight />
                    </Button>
                    }
                    backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft />
                        
                    </Button>
                    }
            />
            </CardContent>
            </Card>
         
        
      </StyledGrid>
        <Grid item xs={12} sm={6}>
            <Card fullWidth>
                <CardContent>
                <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="success"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineConnector sx={{bgcolor:'#2E7D32'}}/>
          <TimelineDot color='success'>
            <PointOfSale/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography sx={{fontSize:'15px'}} component="span" color='#2E7D32'>
            Sale
          </Typography>
          <Typography color='#2E7D32'>kgas</Typography>
          {/* <Stack direction='row' spacing={1}>
         
          <Chip variant='outlined' color='success' label='10kg'></Chip>
          <Place color='success'/>
          <Typography color='#2E7D32' sx={{fontSize:'12px'}}>Chuka filling Station</Typography>
          </Stack> */}
        
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="success"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineConnector sx={{bgcolor:'#2E7D32'}}/>
          <TimelineDot color='success'>
            <PointOfSale/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography sx={{fontSize:'15px'}} component="span" color='#2E7D32'>
            Sale
          </Typography>
          <Typography color='#2E7D32'>kgas</Typography>
          {/* <Stack direction='row' spacing={1}>
         
          <Chip variant='outlined' color='success' label='10kg'></Chip>
          <Place color='success'/>
          <Typography color='#2E7D32' sx={{fontSize:'12px'}}>Chuka filling Station</Typography>
          </Stack> */}
        
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="success"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineConnector sx={{bgcolor:'#2E7D32'}}/>
          <TimelineDot color='success'>
            <PointOfSale/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography sx={{fontSize:'15px'}} component="span" color='#2E7D32'>
            Sale
          </Typography>
          <Typography color='#2E7D32'>kgas</Typography>
          {/* <Stack direction='row' spacing={1}>
         
          <Chip variant='outlined' color='success' label='10kg'></Chip>
          <Place color='success'/>
          <Typography color='#2E7D32' sx={{fontSize:'12px'}}>Chuka filling Station</Typography>
          </Stack> */}
        
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="success"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineConnector sx={{bgcolor:'#2E7D32'}}/>
          <TimelineDot color='success'>
            <PointOfSale/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography sx={{fontSize:'15px'}} component="span" color='#2E7D32'>
            Sale
          </Typography>
          <Typography color='#2E7D32'>kgas</Typography>
          {/* <Stack direction='row' spacing={1}>
         
          <Chip variant='outlined' color='success' label='10kg'></Chip>
          <Place color='success'/>
          <Typography color='#2E7D32' sx={{fontSize:'12px'}}>Chuka filling Station</Typography>
          </Stack> */}
        
        </TimelineContent>
      </TimelineItem>
    </Timeline>
                </CardContent>
            </Card>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}
