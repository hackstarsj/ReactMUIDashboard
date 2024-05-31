import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Grid, IconButton } from '@mui/material';
import { Delete as DeleteIcon, Favorite as FavoriteIcon, Share as ShareIcon } from '@mui/icons-material';

const CardExamples = () => {
  return (
    <Grid container spacing={4} p={2}>
      {/* Basic Card */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Basic Card
            </Typography>
            <Typography variant="body2">
              This is a basic card example.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>

      {/* Card with Media */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random"
            alt="Random"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Card with Media
            </Typography>
            <Typography variant="body2">
              This card includes media.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>

      {/* Card with Actions */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Card with Actions
            </Typography>
            <Typography variant="body2">
              This card includes actions.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>

      {/* Card with Icons */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Card with Icons
            </Typography>
            <Typography variant="body2">
              This card includes icons.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardExamples;
