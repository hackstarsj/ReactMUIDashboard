import React from 'react';
import { CircularProgress, LinearProgress, Box, Typography, Grid, Backdrop } from '@mui/material';

const ProgressExamples = () => {
  const [loading, setLoading] = React.useState(false);

  const handleToggleLoading = () => {
    setLoading((prevLoading) => !prevLoading);
  };

  return (
    <>
      <Grid container spacing={4}>
        {/* Circular Indeterminate Progress */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 150 }}>
            <CircularProgress />
          </Box>
          <Typography align="center" variant="subtitle1">Circular Indeterminate</Typography>
        </Grid>

        {/* Circular Determinate Progress */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 150 }}>
            <CircularProgress variant="determinate" value={50} />
          </Box>
          <Typography align="center" variant="subtitle1">Circular Determinate (50%)</Typography>
        </Grid>

        {/* Linear Indeterminate Progress */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <LinearProgress />
          </Box>
          <Typography align="center" variant="subtitle1">Linear Indeterminate</Typography>
        </Grid>

        {/* Linear Determinate Progress */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <LinearProgress variant="determinate" value={50} />
          </Box>
          <Typography align="center" variant="subtitle1">Linear Determinate (50%)</Typography>
        </Grid>

        {/* Linear Buffer Progress */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <LinearProgress variant="buffer" value={50} valueBuffer={70} />
          </Box>
          <Typography align="center" variant="subtitle1">Linear Buffer (50% / 70%)</Typography>
        </Grid>

        {/* Linear Query Progress */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <LinearProgress variant="query" />
          </Box>
          <Typography align="center" variant="subtitle1">Linear Query</Typography>
        </Grid>

      {/* Full Screen Progress Loader */}
     
      <Grid item xs={12} sm={6}>

      {/* Button to Toggle Full Screen Progress Loader */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <button onClick={handleToggleLoading}>
          {loading ? 'Hide Loader' : 'Show Loader'}
        </button>
      </Box>
      </Grid>
      </Grid>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default ProgressExamples;
