import * as React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const MyFormRadio = ({ label, defaultValue, content }) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">
        <Typography variant={'h5'} component={'span'}>
          {label}
        </Typography>
      </FormLabel>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue={defaultValue} name="radio-buttons-group">
        {content}
      </RadioGroup>
    </FormControl>
  );
};

MyFormRadio.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  content: PropTypes.element
};

export default MyFormRadio;
