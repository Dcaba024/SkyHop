// Client.js

import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Client = () => {
  return (
    <div >
          <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Client</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Single" control={<Radio />} label="Single" />
        <FormControlLabel value="Multiple" control={<Radio />} label="Multiple" />
      </RadioGroup>
    </FormControl>
    </div>
  );
};

export default Client;
