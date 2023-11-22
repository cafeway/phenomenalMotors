import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, CardMedia, Card, CardHeader, Typography, Stack, Grid } from '@mui/material';
import '../carousel.css'
function Example(props) {
    var items = [
        {
            name: "BEST CAR DEALER IN KENYA",
            description: "Welcome to Phenomenal Imports Global Limited Jacaranda Close off Ridgeways Road",
            image: "images/audi.jpg"
        },
        {
            name: "Trade in Your Car",
            description: "We'll provide you with a competitive trade-in offer based on your car's market value.",
            image: "images/lexus.jpg"
        },
        {
            name: "BEST CAR DEALER IN KENYA",
            description: "Welcome to Phenomenal Imports Global Limited Jacaranda Close off Ridgeways Road",
            image: "images/volkswagen.webp"
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
        <Card className="carousel-item"><img src={props.item.image} alt={props.item.name} className="carousel-image"  />
            
            <div className="carousel-text">
            <Typography variant="body1" sx={{ fontSize: { sm: '10px', md: '30px' } }}>{props.item.name}</Typography>
            <Typography variant="body1" sx={{ fontSize: { sm: '10px', md: '30px' } }}>{props.item.description}</Typography> 
               
                
            </div>
        </Card>
    );
}

export default Example;
