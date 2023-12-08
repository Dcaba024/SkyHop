// SplitSchedule.js

import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const SplitSchedule = ({ items }) => {

    


  return (
    <div>
        <div>

            <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Split schedule using social distancing?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
        </div>
    </div>
  );
};

export default SplitSchedule;
