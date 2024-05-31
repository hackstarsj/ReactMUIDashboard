import React from 'react';
import { Button, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import {Grid} from '@mui/material';

const SnackbarExample = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container spacing={2} p={2}>
        <Grid item xs={12}>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
      </Grid>
      </Grid>
  );
};

export default SnackbarExample;
