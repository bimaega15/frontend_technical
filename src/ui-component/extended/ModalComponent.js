import PropTypes from 'prop-types';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Divider from '@mui/material/Divider';

const ModalComponent = ({ title, handleClose, open, content }) => {
  const style = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: 550,
    overflowY: 'scroll',
    marginTop: 0
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" component="h2">
          {title}
        </Typography>
        <Divider
          sx={{
            marginTop: 2,
            marginBottom: 2
          }}
        />
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {content}
        </Typography>
      </Box>
    </Modal>
  );
};

ModalComponent.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  handleClose: PropTypes.func,
  open: PropTypes.bool
};

export default ModalComponent;
