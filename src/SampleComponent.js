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
import likeIcon from './assets/like-svgrepo-com.svg'
import Autocomplete from '@mui/material/Autocomplete';
import CustomAutoComplete from "./ui_components/CustomAutoComplete";
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
import TablesGrid from "./examples/Tables";
import EnhancedTable from "./examples/TableComplete";
import TooltipExamples from "./examples/ToolTipComplete";
import TypographyExamples from "./examples/Typography";
import AlertExamples from "./examples/Alert";
import DialogExamples from "./examples/DialogAndModel";
import ProgressExamples from "./examples/Progress";
import SnackbarExample from "./examples/SnackBar";
import CardExamples from "./examples/CardExample";
import ProductCard from "./examples/ProductCard";
import ChartExamples from "./examples/ChartExample";
import ButtonExample from "./examples/Buttons";
import InputListExample from "./examples/InputListExample";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-dot': {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
}));


const customData = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' }
  ];
  
  

const SampleComponent = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event) => {
    setSelectedOptions(event.target.value);
  };


  const handleChange2 = (event, newValue) => {
    console.log(newValue);
  };

  const [state, setState] = useState({
    standard: true,
    disabled: false,
    size: false,
    color: false,
  });

  const handleChange3 = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

    return <>
    <h2>Chart Examples</h2>
    <ChartExamples/>    
    <h2>Button List</h2>
    <ButtonExample/>
    <h2>Input List</h2>
    <div>
    <InputListExample/>
    <h4>Auto Complete Input</h4>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={6}>
        <Autocomplete
          freeSolo
          options={['Option 1', 'Option 2', 'Option 3']}
          renderInput={(params) => <TextField {...params} label="Free Solo" />}
        />
      </Grid>
      <Grid item xs={6}>
        <Autocomplete
          options={['Option 1', 'Option 2', 'Option 3']}
          renderInput={(params) => <TextField {...params} label="Standard" />}
        />
      </Grid>
      <Grid item xs={6}>
        <Autocomplete
          disabled
          options={['Option 1', 'Option 2', 'Option 3']}
          renderInput={(params) => <TextField {...params} label="Disabled" />}
        />
      </Grid>
      <Grid item xs={6}>
        <Autocomplete
          loading
          options={['Option 1', 'Option 2', 'Option 3']}
          renderInput={(params) => <TextField {...params} label="Loading" />}
        />
      </Grid>
      <Grid item xs={6}>
        <Autocomplete
          multiple
          options={['Option 1', 'Option 2', 'Option 3']}
          renderInput={(params) => <TextField {...params} label="Multiple" />}
        />
      </Grid>
      <Grid item xs={6}>
        <Autocomplete
          options={['Option 1', 'Option 2', 'Option 3']}
          getOptionLabel={(option) => option.toUpperCase()}
          renderInput={(params) => <TextField {...params} label="Custom Option Label" />}
        />
      </Grid>
      <Grid item xs={6}>
        <CustomAutoComplete
          label="Custom Option AutoComplete"
          options={customData}
          onValueSelected={(option) => console.log(option)}

        />
      </Grid>
    </Grid>
    </div>
    <h2>Select Input</h2>
    <Grid container spacing={2}>
      {/* Standard Select */}
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel>Standard</InputLabel>
          <Select>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Select with multiple options */}
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel>Multiple</InputLabel>
          <Select multiple value={selectedOptions} onChange={handleChange}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Disabled Select */}
      <Grid item xs={4}>
        <FormControl fullWidth disabled>
          <InputLabel>Disabled</InputLabel>
          <Select>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Select with grouped options */}
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel>Grouped</InputLabel>
          <Select>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="group1">Group 1</MenuItem>
            <MenuItem value="group2">Group 2</MenuItem>
            <MenuItem value="group3">Group 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Select with outlined variant */}
      <Grid item xs={4}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Outlined</InputLabel>
          <Select>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Select with native select element */}
      <Grid item xs={4}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Native</InputLabel>
          <Select native>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
    <h2>Checkbox List</h2>
    <Grid container spacing={2} alignItems="center">
        <Grid item>
          <FormControlLabel control={<Checkbox />} label="Unchecked" />
        </Grid>
        <Grid item>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Checked" />
        </Grid>
        <Grid item>
          <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
        </Grid>
        <Grid item>
          <FormControlLabel control={<Checkbox defaultChecked disabled />} label="Checked & Disabled" />
        </Grid>
        <Grid item>
          <FormControlLabel control={<Checkbox indeterminate />} label="Indeterminate" />
        </Grid>
        <Grid item>
          <FormControlLabel control={<Checkbox defaultChecked indeterminate />} label="Checked & Indeterminate" />
        </Grid>
    </Grid>
    <h2>Floating Button</h2>
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Grid>
      <Grid item>
        <Fab color="secondary">
          <EditIcon />
        </Fab>
      </Grid>
      <Grid item>
        <Fab color="error">
          <DeleteIcon />
        </Fab>
      </Grid>
      <Grid item>
        <Fab variant="extended">
          <SaveIcon />
          Save
        </Fab>
      </Grid>
    </Grid>
    <h2>Radio</h2>
    <Grid container spacing={2} alignItems="center">
      <RadioGroup row aria-label="radio buttons">
        <Grid item>
          <FormControlLabel value="a" control={<Radio />} label="Option A" />
        </Grid>
        <Grid item>
          <FormControlLabel value="b" control={<Radio />} label="Option B" />
        </Grid>
        <Grid item>
          <FormControlLabel value="c" control={<Radio />} label="Option C" />
        </Grid>
      </RadioGroup>
      <RadioGroup row aria-label="radio buttons disabled">
        <Grid item>
          <FormControlLabel value="a" control={<Radio />} label="Disabled" disabled />
        </Grid>
        <Grid item>
          <FormControlLabel value="b" control={<Radio />} label="Disabled" disabled />
        </Grid>
        <Grid item>
          <FormControlLabel value="c" control={<Radio />} label="Disabled" disabled />
        </Grid>
      </RadioGroup>
    </Grid>
    <h2>Rating</h2>
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Typography>Default Rating:</Typography>
        <Rating defaultValue={2.5} precision={0.5} />
      </Grid>
      <Grid item>
        <Typography>Disabled Rating:</Typography>
        <Rating value={3} readOnly />
      </Grid>
      <Grid item>
        <Typography>Custom Icon Rating:</Typography>
        <Rating defaultValue={4} precision={1} icon={<img src={likeIcon} style={{width:'30px'}} alt="Custom Icon" />} />
      </Grid>
      <Grid item>
        <Typography>Half Rating:</Typography>
        <Rating defaultValue={3.5} precision={0.5} />
      </Grid>
      <Grid item>
        <Typography>Read-only Rating:</Typography>
        <Rating value={4} readOnly />
      </Grid>
      <Grid item>
        <Typography>Large Rating:</Typography>
        <Rating defaultValue={3} size="large" />
      </Grid>
      <Grid item>
        <Typography>Small Rating:</Typography>
        <Rating defaultValue={4} size="small" />
      </Grid>
    </Grid>
    <h2>Slider</h2>
    <Grid container spacing={2}>
      {/* Standard Slider */}
      <Grid item xs={4}>
        <Typography id="standard-slider" gutterBottom>
          Standard Slider
        </Typography>
        <Slider
          defaultValue={30}
          aria-labelledby="standard-slider"
          valueLabelDisplay="auto"
          onChange={handleChange2}
        />
      </Grid>

      {/* Discrete Slider */}
      <Grid item xs={4}>
        <Typography id="discrete-slider" gutterBottom>
          Discrete Slider
        </Typography>
        <Slider
          defaultValue={20}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          onChange={handleChange2}
        />
      </Grid>

      {/* Range Slider */}
      <Grid item xs={4}>
        <Typography id="range-slider" gutterBottom>
          Range Slider
        </Typography>
        <Slider
          defaultValue={[20, 50]}
          aria-labelledby="range-slider"
          valueLabelDisplay="auto"
          onChange={handleChange2}
        />
      </Grid>
    </Grid>
    <h2>Switches</h2>
    <Grid container spacing={2}>
      {/* Standard Switch */}
      <Grid item xs={4}>
        <Typography variant="subtitle1">Standard Switch</Typography>
        <FormControlLabel
          control={<Switch checked={state.standard} onChange={handleChange3('standard')} />}
          label="Standard"
        />
      </Grid>

      {/* Disabled Switch */}
      <Grid item xs={4}>
        <Typography variant="subtitle1">Disabled Switch</Typography>
        <FormControlLabel
          control={<Switch disabled checked={state.disabled} onChange={handleChange3('disabled')} />}
          label="Disabled"
        />
      </Grid>

      {/* Size Switch */}
      <Grid item xs={4}>
        <Typography variant="subtitle1">Size Switch</Typography>
        <FormControlLabel
          control={<Switch size="small" checked={state.size} onChange={handleChange3('size')} />}
          label="Small"
        />
      </Grid>

      {/* Color Switch */}
      <Grid item xs={4}>
        <Typography variant="subtitle1">Color Switch</Typography>
        <FormControlLabel
          control={<Switch color="primary" checked={state.color} onChange={handleChange3('color')} />}
          label="Primary"
        />
      </Grid>
    </Grid>
    <h2>Badge and Avatar</h2>
    <Grid container spacing={2}>
      {/* Badge with Dot */}
      <Grid item xs={3}>
        <Typography variant="subtitle1">Badge</Typography>
        <StyledBadge color="primary" variant="standard">
          <Avatar alt="Avatar" src="/avatar.jpg" />
        </StyledBadge>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle1">Badge with Dot</Typography>
        <StyledBadge color="primary" variant="dot">
          <Avatar alt="Avatar" src="/avatar.jpg" />
        </StyledBadge>
      </Grid>

      {/* Badge with Number */}
      <Grid item xs={3}>
        <Typography variant="subtitle1">Badge with Number</Typography>
        <StyledBadge badgeContent={5} color="secondary">
          <Avatar alt="Avatar" src="/avatar.jpg" />
        </StyledBadge>
      </Grid>

      {/* Badge with Overflow */}
      <Grid item xs={3}>
        <Typography variant="subtitle1">Badge with Overflow</Typography>
        <StyledBadge badgeContent={100} max={99} color="error">
          <Avatar alt="Avatar" src="/avatar.jpg" />
        </StyledBadge>
      </Grid>
    </Grid>
    <h2>Chips list</h2>
    <Grid container spacing={2}>
      {/* Standard Chip */}
      <Grid item xs={4}>
        <Typography variant="subtitle1">Standard Chip</Typography>
        <Chip label="Standard Chip" />
      </Grid>

      {/* Outlined Chip */}
      <Grid item xs={4}>
        <Typography variant="subtitle1">Outlined Chip</Typography>
        <Chip label="Outlined Chip" variant="outlined" />
      </Grid>

      {/* Clickable Chip */}
      <Grid item xs={4}>
        <Typography variant="subtitle1">Clickable Chip</Typography>
        <Chip label="Clickable Chip" onClick={() => alert('Clicked!')} />
      </Grid>

      {/* Deletable Chip */}
      <Grid item xs={4}>
        <Typography variant="subtitle1">Deletable Chip</Typography>
        <Chip label="Deletable Chip" onDelete={() => alert('Deleted!')} />
      </Grid>

      {/* Custom Avatar Chip */}
      <Grid item xs={4}>
        <Typography variant="subtitle1">Custom Avatar Chip</Typography>
        <Chip
          avatar={<Avatar>M</Avatar>}
          label="Custom Avatar Chip"
        />
      </Grid>

      {/* Custom Delete Icon Chip */}
      <Grid item xs={4}>
        <Typography variant="subtitle1">Custom Delete Icon Chip</Typography>
        <Chip
          label="Custom Delete Icon Chip"
          onDelete={() => alert('Deleted!')}
          deleteIcon={<IconButton><Delete /></IconButton>}
        />
      </Grid>

      {/* Custom Editable Chip */}
      <Grid item xs={4}>
        <Typography variant="subtitle1">Custom Editable Chip</Typography>
        <Chip
          label="Custom Editable Chip"
          onDelete={() => alert('Deleted!')}
          deleteIcon={<IconButton><Delete /></IconButton>}
          avatar={<Avatar>E</Avatar>}
          clickable
          onClick={() => alert('Clicked!')}
        />
      </Grid>
    </Grid>
    <h2>Divider</h2>
    <Grid container spacing={2}>
      {/* Standard Divider */}
      <Grid item xs={3}>
        <Typography variant="subtitle1">Standard Divider</Typography>
        <Divider />
      </Grid>

      {/* Vertical Divider */}
      <Grid item xs={3}>
        <Typography variant="subtitle1">Vertical Divider</Typography>
        <Divider orientation="vertical" />
      </Grid>

      {/* Inset Divider */}
      <Grid item xs={3}>
        <Typography variant="subtitle1">Inset Divider</Typography>
        <Divider variant="inset" />
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h6">Section 1</Typography>
        {/* Horizontal Divider */}
        <Divider />
        <Typography variant="body1">Content of Section 1</Typography>
      </Grid>
    </Grid>
    <h2>List</h2>
    <Grid container spacing={2}>
      {/* Simple List */}
      <Grid item xs={6}>
        <List>
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 2" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 3" />
          </ListItem>
        </List>
      </Grid>

      {/* List with Avatar */}
      <Grid item xs={6}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Avatar 1" src="/avatar1.jpg" />
            </ListItemAvatar>
            <ListItemText primary="Avatar 1" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Avatar 2" src="/avatar2.jpg" />
            </ListItemAvatar>
            <ListItemText primary="Avatar 2" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Avatar 3" src="/avatar3.jpg" />
            </ListItemAvatar>
            <ListItemText primary="Avatar 3" />
          </ListItem>
        </List>
      </Grid>

      {/* List with Icons */}
      <Grid item xs={6}>
        <List>
          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Send" />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6">List with Divider</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Item 2" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Item 3" />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={6}>
      <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Messages
        </Typography>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="User 1" src="https://picsum.photos/200" />
            </ListItemAvatar>
            <ListItemText
              primary="User 1"
              secondary={
                <React.Fragment>
                  <Typography variant="body2" color="textPrimary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    10:00 AM
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider/>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="User 2" src="https://picsum.photos/200" />
            </ListItemAvatar>
            <ListItemText
              primary="User 2"
              secondary={
                <React.Fragment>
                  <Typography variant="body2" color="textPrimary">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    11:30 AM
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
      </Grid>
      <h2>Tables</h2>
      <TablesGrid/>
      <h2>Table Complete with API,Sorting,Searching and Pagination</h2>
      <EnhancedTable/>
      <h2>Tooltip Example</h2>
      <TooltipExamples/>
      <h2>Typography Examples</h2>
      <TypographyExamples/>
      <h2>Alert Example</h2>
      <AlertExamples/>
      <h2>Dialog and Modal Examples</h2>
      <DialogExamples/>
      <h2>Progress Examples</h2>
      <ProgressExamples/>
      <br/>
      <h2>Snackbar</h2>
      <SnackbarExample/>
      <h2>Card</h2>
      <CardExamples/>
      <h2>Product Card</h2>
      <ProductCard/>
    </Grid>
    </>
}
export default SampleComponent;