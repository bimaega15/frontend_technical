import { Button, FormGroup, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const MyFormFile = ({ label, buttonName, name, value, onChange }) => {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
  });

  return (
    <FormGroup>
      <Typography variant="h5" component={'span'} sx={{ marginBottom: 2 }}>
        {label}
      </Typography>

      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
        {buttonName}
        <VisuallyHiddenInput type="file" name={name} value={value} onChange={onChange} />
      </Button>
    </FormGroup>
  );
};

export default MyFormFile;
