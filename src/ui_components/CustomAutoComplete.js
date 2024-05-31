import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const CustomAutoComplete = ({ options, labelKey = 'name', valueKey = 'id', label, onValueSelected = null, name = "" }) => {
  const handleValueSelected = (event, value) => {
    if (onValueSelected) {
      onValueSelected(value);
    }
    console.log("Selected option:", value); // Logging the selected option
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option[labelKey]}
      getOptionSelected={(option, value) => option[valueKey] === value[valueKey]}
      onChange={handleValueSelected}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}

export default CustomAutoComplete;
