import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const MyFormChecked = ({ label, name, value, onChange }) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox onChange={onChange} defaultChecked name={name} value={value} />} label={label} />
    </FormGroup>
  );
};

export default MyFormChecked;
