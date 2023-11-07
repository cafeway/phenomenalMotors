import { Card, CardMedia, Grid } from "@mui/material";


const BrandBanner = ({image}) => {
    return (
      
       <Grid item sm={4} md={4}>
             <Card elevation={2}>
                <CardMedia image={image}/>
             </Card>
       </Grid>
    );
}

export default BrandBanner;