import { Box, Button, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { IconDatabase } from '@tabler/icons';
import ModalComponent from 'ui-component/extended/ModalComponent';

import dataColumnAdmin, { columns, rows } from './dummy/admin/data';
import Form from './view/admin/Form';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAdmin, getDataByIdAdmin } from 'action/master/admin/post';
import { SpinnerLoading } from 'ui-component/extended/Spinner';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import { dispatchSingle } from 'utils/dispatch';
import { ALERT_ADMIN, GET_ROW_ADMIN, STATUS_DIALOGS, STATUS_MODAL } from 'store/actions';
import ModalDialogs from 'ui-component/extended/ModalDialogs';

const Admin = () => {
  const dispatch = useDispatch();
  const dataAdmin = useSelector((state) => state.admin);

  // handle modal
  const handleOpen = useMemo(
    () => () => {
      dispatchSingle(dispatch, STATUS_MODAL, true);
      dispatchSingle(dispatch, GET_ROW_ADMIN, null);
    },
    [dispatch, dataAdmin.getAdminRow]
  );

  const handleClose = () => {
    dispatchSingle(dispatch, STATUS_MODAL, false);
  };

  const handleAlert = useMemo(() => {
    return () => {
      dispatchSingle(dispatch, ALERT_ADMIN, '');
    };
  }, [dataAdmin.alertAdmin]);

  const handleEdit = useMemo(
    () => (row) => {
      dispatch(getDataByIdAdmin(row._id));
    },
    [dataAdmin.getAdminRow, dataAdmin.modalAdmin]
  );

  const [openDialogs, setOpenDialogs] = useState('');
  const handleRemove = (row) => {
    dispatchSingle(dispatch, STATUS_DIALOGS, true);
    setOpenDialogs(row._id);
  };

  useEffect(() => {
    dispatch(getDataAdmin());

    return () => {};
  }, [dispatch, dataAdmin.refreshData]);

  return (
    <>
      {dataAdmin.alertAdmin != '' && (
        <Alert
          action={
            <Button color="inherit" size="small" onClick={handleAlert}>
              <CloseIcon />
            </Button>
          }
        >
          {dataAdmin.alertAdmin}
        </Alert>
      )}

      <MainCard
        title="Management Data Admin"
        secondary={<SecondaryAction title={'Table Admin'} icon={<IconDatabase size={20} onClick={handleOpen} />} />}
      >
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={12}>
            <Box style={{ width: '100%', position: 'relative' }}>
              {dataAdmin.getAdminLoading ? (
                <SpinnerLoading />
              ) : (
                <DataGrid
                  rows={dataAdmin.getAdminResult.map((item, idx) => ({ no: idx + 1, ...item }))}
                  columns={dataColumnAdmin(handleEdit, handleRemove)}
                  getRowId={(rows) => rows._id}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 }
                    }
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                  onCellClick={(params, event) => {
                    if (params.field === 'action') {
                      event.stopPropagation(); // Menghentikan penyebaran event
                    }
                  }}
                />
              )}
            </Box>

            <ModalComponent
              title={'Form Admin'}
              handleClose={handleClose}
              open={dataAdmin.modalAdmin}
              content={<Form handleClose={handleClose} rowData={dataAdmin.getAdminRow} />}
            />
            {dataAdmin.dialogsAdmin && (
              <ModalDialogs
                title={`Ingin menghapus data ini ?`}
                description={`Pastikan kembali data anda ini, jika benar-benar yakin maka klik tombol Ya, dan jika ingin membatalkan maka klik tombol Tidak`}
                openDialog={dataAdmin.dialogsAdmin}
                _id={openDialogs}
              />
            )}
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
};

export default Admin;
