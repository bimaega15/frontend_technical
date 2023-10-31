import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeDataAdmin } from 'action/master/admin/post';
import { useEffect } from 'react';
import { dispatchSingle } from 'utils/dispatch';
import { STATUS_DIALOGS } from 'store/actions';

const ModalDialogs = ({ title, description, _id, openDialog = true }) => {
  const dataAdmin = useSelector((state) => state.admin);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatchSingle(dispatch, STATUS_DIALOGS, false);
  };

  const removeData = () => {
    dispatch(removeDataAdmin(_id));
  };

  useEffect(() => {
    return () => {};
  }, [dataAdmin.dialogsAdmin]);

  return (
    <div>
      <Dialog
        open={dataAdmin.dialogsAdmin}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Tidak</Button>
          <Button onClick={removeData} autoFocus>
            Ya
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalDialogs;
