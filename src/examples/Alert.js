import React from 'react';
import { Alert, AlertTitle, Button, Grid, IconButton, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';

// Custom styled alert
const CustomAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: theme.palette.info.light,
  color: theme.palette.info.dark,
}));

const AlertExamples = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <Grid container spacing={4} p={2}>
      {/* Basic Alerts */}
      <Grid item xs={12} sm={6}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Alert severity="info">This is an info alert — check it out!</Alert>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Alert severity="success">This is a success alert — check it out!</Alert>
      </Grid>

      {/* Alerts with Titles */}
      <Grid item xs={12} sm={6}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert with a title.
        </Alert>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert with a title.
        </Alert>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert with a title.
        </Alert>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert with a title.
        </Alert>
      </Grid>

      {/* Alerts with Actions */}
      <Grid item xs={12} sm={6}>
        <Alert severity="error" action={<Button color="inherit" size="small">UNDO</Button>}>
          This is an error alert with an action.
        </Alert>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Alert severity="warning" action={<Button color="inherit" size="small">DISMISS</Button>}>
          This is a warning alert with an action.
        </Alert>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Alert severity="info" action={<Button color="inherit" size="small">LEARN MORE</Button>}>
          This is an info alert with an action.
        </Alert>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Alert severity="success" action={<Button color="inherit" size="small">CELEBRATE</Button>}>
          This is a success alert with an action.
        </Alert>
      </Grid>

      {/* Alerts with Close Button */}
      <Grid item xs={12} sm={6}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setOpen(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          This is an error alert with a close button.
        </Alert>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Alert
          severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setOpen(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          This is a warning alert with a close button.
        </Alert>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Alert
          severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setOpen(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          This is an info alert with a close button.
        </Alert>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setOpen(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          This is a success alert with a close button.
        </Alert>
      </Grid>

      {/* Alerts with Icons */}
      <Grid item xs={12} sm={6}>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          This is a success alert with a custom icon.
        </Alert>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Alert icon={<CloseIcon fontSize="inherit" />} severity="error">
          This is an error alert with a custom icon.
        </Alert>
      </Grid>

      {/* Custom Styled Alert */}
      <Grid item xs={12} sm={6}>
        <CustomAlert>
          This is a custom styled alert.
        </CustomAlert>
      </Grid>

      {/* Alert with Snackbar-like Behavior */}
      <Grid item xs={12}>
        {open && (
          <Alert
            severity="info"
            onClose={() => setOpen(false)}
            sx={{ mb: 2 }}
          >
            This is an alert with snackbar-like behavior.
          </Alert>
        )}
      </Grid>
    </Grid>
  );
};

export default AlertExamples;
