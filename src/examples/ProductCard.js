import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box, Grid,IconButton,Chip,Avatar, Divider,useTheme } from '@mui/material';
import { AddShoppingCart, AddShoppingCart as AddShoppingCartIco } from '@mui/icons-material';
import { LocationOn as LocationOnIcon, Today as TodayIcon, AttachMoney as AttachMoneyIcon    } from '@mui/icons-material';
import { WbSunny as SunnyIcon, Cloud as CloudIcon, BeachAccess as BeachIcon, HotTub as HotTubIcon } from '@mui/icons-material';

const ProductCard = () => {
    const theme = useTheme();

    const data = {
        "Name": "John Doe",
        "Age": 30,
        "Gender": "Male",
        "Occupation": "Software Engineer",
        "Location": "New York, USA",
        "Email": "john.doe@example.com",
        "Phone": "+1 123-456-7890"
      };

        const weatherData = {
          "Location": "New York, USA",
          "Temperature": "25°C",
          "Condition": "Sunny",
          "Humidity": "60%",
          "Wind Speed": "10 km/h"
        };
      
        // Function to get the appropriate weather icon based on condition
        const getWeatherIcon = (condition) => {
          switch (condition.toLowerCase()) {
            case "sunny":
              return <SunnyIcon fontSize="large" />;
            case "cloudy":
              return <CloudIcon fontSize="large" />;
            case "rainy":
              return <BeachIcon fontSize="large" />;
            case "windy":
              return <HotTubIcon fontSize="large" />;
            default:
              return null;
          }
        };
        const gradient = `linear-gradient(to bottom right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`;

  return (
    <Grid container spacing={2} p={2}>
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://picsum.photos/300/200"
        alt="Product"
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Product Name
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Description of the product goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Typography variant="h6" color="text.secondary">
          $19.99
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </Box>
    </Card>
    </Grid>
    <Grid item xs={4}>
            <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://picsum.photos/300/200"
        alt="Product"
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Product Name
        </Typography>
        <Typography variant="h6" color="text.secondary">
          $19.99
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </Box>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://picsum.photos/300/200"
        alt="Product"
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Product Name
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Description of the product goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            $19.99
          </Typography>
          <IconButton aria-label="add to cart" color="primary" sx={{ ml: 1 }}>
            <AddShoppingCart />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5" component="div">
              Product Name
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="text.secondary">
              Description of the product goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
          <Divider sx={{ width: '100%' }} />
          <Grid item xs={12} container spacing={1} alignItems="center">
            <Grid item>
              <LocationOnIcon color="primary" />
            </Grid>
            <Grid item>
              <Typography variant="body2">Location: New York, USA</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={1} alignItems="center">
            <Grid item>
              <TodayIcon color="primary" />
            </Grid>
            <Grid item>
              <Typography variant="body2">Posted: 12th May 2024</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={1} alignItems="center">
            <Grid item>
              <AttachMoneyIcon color="primary" />
            </Grid>
            <Grid item>
              <Typography variant="body2">Price: $19.99</Typography>
            </Grid>
          </Grid>
          <Divider sx={{ width: '100%' }} />
          <Grid item xs={12} mb={2}>
            <Typography variant="subtitle2" color="text.secondary" mb={1}>Tags:</Typography>
            <Grid container spacing={1}>
              <Grid item>
                <Chip label="Electronics" />
              </Grid>
              <Grid item>
                <Chip label="Gadgets" />
              </Grid>
              <Grid item>
                <Chip label="Tech" />
              </Grid>
            </Grid>
          </Grid>
          <Divider sx={{ width: '100%' }} />
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">Additional Details:</Typography>
            <Typography variant="body2">
              Some additional information about the product can be displayed here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Personal Information
        </Typography>
        <Divider sx={{ width: '100%' }} />
        <Grid container spacing={2} mt={2}>
          {Object.entries(data).map(([key, value]) => (
            <Grid item xs={12} key={key}>
              <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>{key}:</Typography>
              <Typography variant="body1" component="div">{value}</Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 400 }}>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                Weather Information
                </Typography>
                <Divider sx={{ width: '100%' }} />
                <Grid container spacing={2} mt={2} alignItems="center">
                <Grid item xs={6} md={4}>
                    {getWeatherIcon(weatherData["Condition"])}
                </Grid>
                <Grid item xs={6} md={8}>
                    {Object.entries(weatherData).map(([key, value]) => (
                    <Typography key={key} variant="body1" component="div">
                        <span style={{ fontWeight: 'bold' }}>{key}:</span> {value}
                    </Typography>
                    ))}
                </Grid>
                </Grid>
            </CardContent>
            </Card>
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 400, background: gradient }}>
        <CardContent>
            <Typography variant="h5" component="div" color="text.secondary">
            Gradient Card
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            This is a gradient card created using the theme's primary and secondary colors.
            </Typography>
        </CardContent>
        </Card>
        </Grid>
    </Grid>
  );
};

export default ProductCard;
