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


const InputListExample=()=>{
    return     <div>
    <Grid container spacing={2} alignItems="center">
<Grid item>
 <TextField label="Standard" variant="outlined" size="small" />
</Grid>
<Grid item>
 <TextField label="Filled" variant="filled" size="small" />
</Grid>
<Grid item>
 <TextField label="Outlined" variant="outlined" size="small" />
</Grid>
<Grid item>
 <TextField label="Required" variant="outlined" size="small" required />
</Grid>
<Grid item>
 <TextField label="Disabled" variant="outlined" size="small" disabled />
</Grid>
<Grid item>
 <TextField label="Error" variant="outlined" size="small" error />
</Grid>
<Grid item>
 <TextField label="Multiline" variant="outlined" size="small" multiline rows={2} />
</Grid>
<Grid item>
 <TextField label="Password" variant="outlined" size="small" type="password" />
</Grid>
<Grid item>
 <TextField label="Number" variant="outlined" size="small" type="number" />
</Grid>
<Grid item>
 <TextField label="Search" variant="outlined" size="small" type="search" />
</Grid>
</Grid>
</div>

}

export default InputListExample;