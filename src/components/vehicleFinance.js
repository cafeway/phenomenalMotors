import { AccountBalance, Calculate, CalendarMonth, Call, Email, Facebook, MonetizationOn, Money, MoneyOff, PercentSharp, WhatsApp } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardHeader, Grid, Paper, Slider, Stack, Typography } from "@mui/material";
import * as React from 'react';
import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';

function valuetext(value) {
    return `${value}°ksh`;
}
const Input = styled(MuiInput)`
  width: 42px;
`;
const VehicleFinance = () => {
    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
        setValue(0);
        } else if (value > 100) {
        setValue(100);
        }
    };

    return (
        <Grid container alignItems="center" justifyContent="center" marginTop={3} spacing={2} marginBottom={5}>
            <Grid item md={4}>
                <Card elevation={5}>
                    <CardHeader
                        title={
                            <Typography>MONTHLY BANK INSTALLMENT</Typography>
                        }
                        subheader={
                            <Typography>CALCULATOR</Typography>
                        }
                        avatar={
                            <Calculate/>
                        }
                    />
                    <CardContent>
                        <Typography>Estimate your Monthly Payments with our car loan repayment calculator. If you have not yet contacted us for an indicative rate but wish to estimate repayments, our deposit rates start from 10% to 40% Your actual repayments / monthly installments will depend on credit assessment of your application.</Typography>
                        <Typography sx={{marginTop:'10px'}}>Vehicle amount</Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                            <MonetizationOn />
                            </Grid>
                            <Grid item xs>
                            <Slider
                                value={typeof value === 'number' ? value : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                            />
                            </Grid>
                            <Grid item>
                            <Input
                                value={value}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                step: 10,
                                min: 0,
                                max: 100,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            />
                            </Grid>
                        </Grid>
                        <Typography sx={{marginTop:'10px'}}>Deposit amount</Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                            <MonetizationOn />
                            </Grid>
                            <Grid item xs>
                            <Slider
                                value={typeof value === 'number' ? value : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                            />
                            </Grid>
                            <Grid item>
                            <Input
                                value={value}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                step: 10,
                                min: 0,
                                max: 100,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            />
                            </Grid>
                        </Grid>
                        <Typography sx={{marginTop:'10px'}}>Interest Rate</Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                            <PercentSharp />
                            </Grid>
                            <Grid item xs>
                            <Slider
                                value={typeof value === 'number' ? value : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                            />
                            </Grid>
                            <Grid item>
                            <Input
                                value={value}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                step: 10,
                                min: 0,
                                max: 100,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            />
                            </Grid>
                        </Grid>
                        <Typography sx={{marginTop:'10px'}}>Tenure Months</Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                            <CalendarMonth/>
                            </Grid>
                            <Grid item xs>
                            <Slider
                                value={typeof value === 'number' ? value : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                            />
                            </Grid>
                            <Grid item>
                            <Input
                                value={value}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                step: 10,
                                min: 0,
                                max: 100,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                   <Stack direction='row' spacing={3}>
                   <Button variant="outlined">Calculate </Button>
                   
                                <Typography>Monthly installments: 0 KSH</Typography>
                  
                   </Stack>
                    </CardActions>
                </Card>
               
            </Grid>
            <Grid item md={4}>
                <Card elevation={5}>
                    <CardHeader
                    sx={{marginTop:'20px'}}
                        title={
                            <AccountBalance sx={{marginLeft:'150px',width:'100px',height:'100px'}}/>
                            
                        }
                        subheader={
                            <Typography sx={{marginLeft:'10px',fontSize:'30px'}}>Vehicle Finance banking</Typography>
                        }
                        
                    />
                    <CardContent marginBottom={2}>
                        <Typography>
We facilitate trade-ins and arrange vehicle financing with a wide network of financial institutions. We offer competitive rates and terms, and we can help you find the right loan to fit your budget and needs. We also offer a variety of trade-in options, so you can get the most value for your current vehicle.</Typography>
<Typography marginTop={4}>To learn more about our trade-in and financing programs, please contact us today. Our experienced sales team will be happy to answer your questions and help you find the best solution for your needs.</Typography>
                    </CardContent>
                    <CardActions>
                        <Stack spacing={1}>
                            <Stack spacing={1} direction="row">
                                <Button variant="outlined" size="small" startIcon={<Call/>}>Call Us</Button>
                                <Button variant="outlined" size="small" startIcon={<WhatsApp/>} color="success">WhatsApp</Button>
                                <Button variant="outlined"  size="small" startIcon={<Facebook/>}>Facebook</Button>
                            </Stack>
                            <Stack spacing={2} direction="row">
                            <Email/> info@phenomenalimportsglobal.com
                            </Stack>
                    
                        </Stack>
                       
                    </CardActions>
                </Card>
            </Grid>
            
        </Grid>
    );
}

export default VehicleFinance;