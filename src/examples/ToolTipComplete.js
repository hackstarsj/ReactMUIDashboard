import React from 'react';
import {
  Tooltip, Button, IconButton, Grid, Typography, CircularProgress,
} from '@mui/material';
import { Info as InfoIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Custom Tooltip using styled API
const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: theme.palette.common.black,
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
  [`& .MuiTooltip-arrow`]: {
    color: theme.palette.common.black,
  },
}));

const TooltipExamples = () => {
  return (
    <Grid container spacing={4} p={2}>
      {/* Basic Tooltip */}
      <Grid item xs={12} sm={6} md={4}>
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Grid>

      {/* Tooltip with Different Positions */}
      <Grid item xs={12} sm={6} md={4}>
        <Tooltip title="Bottom Tooltip" placement="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip title="Top Tooltip" placement="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip title="Left Tooltip" placement="left">
          <Button>Left</Button>
        </Tooltip>
        <Tooltip title="Right Tooltip" placement="right">
          <Button>Right</Button>
        </Tooltip>
      </Grid>

      {/* Tooltip with Long Text */}
      <Grid item xs={12} sm={6} md={4}>
        <Tooltip title="This is a very long tooltip that might not fit in a single line. It provides additional information about the element.">
          <Button>Long Tooltip</Button>
        </Tooltip>
      </Grid>

      {/* Disabled Element Tooltip */}
      <Grid item xs={12} sm={6} md={4}>
        <Tooltip title="You cannot click this button">
          <span>
            <Button disabled>Disabled Button</Button>
          </span>
        </Tooltip>
      </Grid>

      {/* Custom Tooltip */}
      <Grid item xs={12} sm={6} md={4}>
        <CustomTooltip title="Custom Styled Tooltip" arrow>
          <Button>Custom Tooltip</Button>
        </CustomTooltip>
      </Grid>

      {/* Tooltip with Arrow */}
      <Grid item xs={12} sm={6} md={4}>
        <Tooltip title="Arrow Tooltip" arrow>
          <Button>Arrow Tooltip</Button>
        </Tooltip>
      </Grid>

      {/* HTML Content Tooltip */}
      <Grid item xs={12} sm={6} md={4}>
        <Tooltip
          title={
            <React.Fragment>
              <Typography color="inherit">HTML Tooltip</Typography>
              <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
              {"It's very engaging. Right?"}
            </React.Fragment>
          }
        >
          <Button>HTML Tooltip</Button>
        </Tooltip>
      </Grid>

      {/* Tooltip with Delay */}
      <Grid item xs={12} sm={6} md={4}>
        <Tooltip title="Tooltip with delay" enterDelay={500} leaveDelay={200}>
          <Button>Delayed Tooltip</Button>
        </Tooltip>
      </Grid>

      {/* Interactive Tooltip */}
      <Grid item xs={12} sm={6} md={4}>
        <Tooltip title="Interactive Tooltip" interactive>
          <Button>Interactive Tooltip</Button>
        </Tooltip>
      </Grid>

      {/* Tooltip Trigger */}
      <Grid item xs={12} sm={6} md={4}>
        <Tooltip title="On Click Tooltip">
          <Button>Click Tooltip</Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default TooltipExamples;