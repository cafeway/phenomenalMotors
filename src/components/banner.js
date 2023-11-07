import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, CardMedia, Card, CardHeader, Typography, Stack, Grid } from '@mui/material';
import '../carousel.css'
function Example(props) {
    var items = [
        {
            name: "BEST CAR DEALER IN KENYA",
            description: "Welcome to Phenomenal Imports Global Limited Jacaranda Close off Ridgeways Road",
            image: "images/sitebanner.png"
        },
        {
            name: "Trade in Your Car",
            description: "We'll provide you with a competitive trade-in offer based on your car's market value.",
            image: "images/sitebanner.png"
        },
        // {
        //     name: "Random Name #2",
        //     description: "Hello World!",
        //     image: "images/sitebanner.png"
        // }
    ];

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    );
}

function Item(props) {
    
    return (
        // <Grid  container  elevation={2} sx={{marginTop:'70px'}}>
        //     <Grid item sm={12} md={12}>
        //     <Card>
               
        //        <CardHeader
                   
        //            title={
        //                <CardMedia sx={{width: '500px',height:'300px'}}
        //                image={props.item.image}
        //            />
        //            }
        //            action = {
        //                <Stack>
        //                    <Typography>{props.item.name}</Typography>
        //                </Stack>
        //            }
        //        />
               
                
        //    </Card>
        //     </Grid>
            
        
        //     <h2>{props.item.name}</h2>
        //     <p>{props.item.description}</p>

        //     <Button className="CheckButton">
        //         Check it out!
        //     </Button>
        // </Grid>
        <Paper className="carousel-item"sx={{backgroundColor:'#F15F2C'}}><img src={props.item.image} alt={props.item.name} className="carousel-image"  />
            
            <div className="carousel-text">
                <h2 style={{fontSize:'40px'}}>{props.item.name}</h2>
                <p style={{fontSize:'30px'}}>{props.item.description}</p>
                
            </div>
        </Paper>
    );
}

export default Example;
