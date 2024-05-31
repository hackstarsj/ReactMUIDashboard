import { Grid, Input } from "@mui/material";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useState } from "react";
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';
import Chip from '@mui/material/Chip';
import { Delete, Edit } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const ButtonExample=()=>{
    return     <div>
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Button size="small">Small</Button>
      </Grid>
      <Grid item>
        <Button size="medium">Medium</Button>
      </Grid>
      <Grid item>
        <Button size="large">Large</Button>
      </Grid>
      <Grid item>
        <Button variant="contained">Contained</Button>
      </Grid>
      <Grid item>
        <Button variant="outlined">Outlined</Button>
      </Grid>
      <Grid item>
        <Button variant="text">Text</Button>
      </Grid>
      <Grid item>
        <Button color="primary">Primary</Button>
      </Grid>
      <Grid item>
        <Button color="secondary">Secondary</Button>
      </Grid>
      <Grid item>
        <Button color="error" variant="contained">Error</Button>
      </Grid>
      <Grid item>
        <Button color="warning" variant="contained">Warning</Button>
      </Grid>
      <Grid item>
        <Button color="success" variant="contained">Success</Button>
      </Grid>
    </Grid>
    </div>

}

export default ButtonExample;