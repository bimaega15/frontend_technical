import React, { useState } from 'react';
import {
  FormControl,
  TextField,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FilledInput,
  Typography,
  FormGroup
} from '@mui/material';
import { LabelOffRounded, Visibility, VisibilityOff } from '@mui/icons-material';
import { ucwords } from '../../utils/helper';

const MyFormGroup = ({ label, name, secure, value, onChange, type = 'text' }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <FormGroup>
        <Typography variant="h5" component={'span'} sx={{ marginBottom: 2 }}>
          {ucwords(label)}
        </Typography>
        <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor={`${label.split(' ').join('_')}`}>{label}</InputLabel>
          <OutlinedInput
            id={`${label.split(' ').join('_')}`}
            type={secure ? (showPassword ? 'text' : 'password') : type == 'text' ? 'text' : 'number'}
            name={name}
            endAdornment={
              secure && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }
            label={`${ucwords(label)}`}
            value={value}
            onChange={onChange}
          />
        </FormControl>
      </FormGroup>
    </>
  );
};

export default MyFormGroup;
