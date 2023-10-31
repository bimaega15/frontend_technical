import { Button, FormControlLabel, Grid, Radio, Typography } from '@mui/material';
import FlexButton, { Item } from 'ui-component/extended/FlexButton';
import MyFormChecked from 'ui-component/extended/MyFormChecked';
import MyFormFile from 'ui-component/extended/MyFormFile';
import MyFormGroup from 'ui-component/extended/MyFormGroup';
import MyFormRadio from 'ui-component/extended/MyFormRadio';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import { colorTrash, gridSpacing } from 'store/constant';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { formSubmit } from 'action/master/admin/post';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL_GLOBAL } from 'utils/helper';

const Form = ({ handleClose, rowData }) => {
  const dispatch = useDispatch();
  const dataAdmin = useSelector((state) => state.admin);
  let dataError = [];

  if (dataAdmin.getAdminError != false && dataAdmin.getAdminError != null) {
    dataAdmin.getAdminError.map((v, i) => {
      dataError[v.param] = v.msg;
    });
  }

  const [formData, setFormData] = useState({
    email: rowData != null && rowData != '' ? rowData.admin.email : '',
    username: rowData != null && rowData != '' ? rowData.users.username : '',
    password: '',
    password_confirm: '',
    name: rowData != null && rowData != '' ? rowData.admin.name : '',
    phoneNumber: rowData != null && rowData != '' ? rowData.admin.phoneNumber : '',
    gender: rowData != null && rowData != '' ? (rowData.admin.gender == 'laki-laki' ? 'L' : 'P') : 'L',
    isActive: rowData != null && rowData != '' ? (rowData.users.isActive ? 1 : '') : 1,
    picture: rowData != null && rowData != '' ? rowData.admin.picture : ''
  });

  const [gambar, setGambar] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleChecked = (e) => {
    const { name, value } = e.target;
    let setActive = value == 1 ? 0 : 1;

    setFormData({
      ...formData,
      [name]: setActive
    });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    const { name, value } = e.target;

    setGambar(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let setFormData = new FormData();

    Object.keys(formData).map((value, index) => {
      let name = value;
      let setValue = formData[value];

      setFormData.append(name, setValue);
    });
    setFormData.append('picture', gambar);

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };

    if (rowData != '' && rowData != null) {
      dispatch(formSubmit(setFormData, config, rowData._id));
    } else {
      dispatch(formSubmit(setFormData, config));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6}>
            <MyFormGroup label={`Email Address`} name={'email'} value={formData.email} onChange={handleChange} />
            {dataError['email'] != null ? (
              <Typography variant="h6" component={'small'} color={colorTrash}>
                {dataError['email']}
              </Typography>
            ) : (
              ''
            )}
          </Grid>
          <Grid item xs={6}>
            <MyFormGroup label={`Username`} name={'username'} value={formData.username} onChange={handleChange} />
            {dataError['username'] != null ? (
              <Typography variant="h6" component={'small'} color={colorTrash}>
                {dataError['username']}
              </Typography>
            ) : (
              ''
            )}
          </Grid>
          <Grid item xs={6}>
            <MyFormGroup label={`Password`} name={'password'} secure={true} value={formData.password} onChange={handleChange} />
            {dataError['password'] != null ? (
              <Typography variant="h6" component={'small'} color={colorTrash}>
                {dataError['password']}
              </Typography>
            ) : (
              ''
            )}
          </Grid>
          <Grid item xs={6}>
            <MyFormGroup
              label={`Password Konfirmasi`}
              name={'password_confirm'}
              value={formData.password_confirm}
              onChange={handleChange}
              secure={true}
            />
            {dataError['password_confirm'] != null ? (
              <Typography variant="h6" component={'small'} color={colorTrash}>
                {dataError['password_confirm']}
              </Typography>
            ) : (
              ''
            )}
          </Grid>
          <Grid item xs={12}>
            <MyFormGroup label={`Nama Lengkap`} name={'name'} value={formData.name} onChange={handleChange} />
            {dataError['name'] != null ? (
              <Typography variant="h6" component={'small'} color={colorTrash}>
                {dataError['name']}
              </Typography>
            ) : (
              ''
            )}
          </Grid>
          <Grid item xs={12}>
            <MyFormGroup label={`No. Telephone`} name={'phoneNumber'} value={formData.phoneNumber} onChange={handleChange} type="number" />
            {dataError['phoneNumber'] != null ? (
              <Typography variant="h6" component={'small'} color={colorTrash}>
                {dataError['phoneNumber']}
              </Typography>
            ) : (
              ''
            )}
          </Grid>
          <Grid item xs={6}>
            <MyFormRadio
              label={'Jenis Kelamin'}
              defaultValue={formData.gender}
              content={
                <>
                  <FormControlLabel name="gender" value="P" onChange={handleChange} control={<Radio />} label="Perempuan" />
                  <FormControlLabel name="gender" value="L" onChange={handleChange} control={<Radio />} label="Laki-laki" />
                </>
              }
            />
            {dataError['gender'] != null ? (
              <Typography variant="h6" component={'small'} color={colorTrash}>
                {dataError['gender']}
              </Typography>
            ) : (
              ''
            )}
          </Grid>
          <Grid item xs={6}>
            <MyFormFile label={'Upload Gambar'} buttonName={'Upload'} name={'picture'} onChange={handleFile} />
            {gambar != null && gambar != '' ? (
              <Box sx={{ textAlign: 'center', marginTop: 1 }}>
                <img src={URL.createObjectURL(gambar)} alt={`${gambar.name}`} style={{ height: '200px', borderRadius: '10px' }} />
              </Box>
            ) : (
              formData.picture != null &&
              formData.picture != '' && (
                <>
                  <Box sx={{ textAlign: 'center', marginTop: 1 }}>
                    <img
                      src={`${API_URL_GLOBAL}/uploads/master/admin/${formData.picture}`}
                      alt={`${formData.picture}`}
                      style={{ height: '200px', borderRadius: '10px' }}
                    />
                  </Box>
                </>
              )
            )}
            {dataError['picture'] != null ? (
              <Typography variant="h6" component={'small'} color={colorTrash}>
                {dataError['picture']}
              </Typography>
            ) : (
              ''
            )}
          </Grid>

          <Grid item xs={12}>
            <MyFormChecked label={'Apakah user ini aktif ?'} name={'isActive'} value={formData.isActive} onChange={handleChecked} />
            {dataError['isActive'] != null ? (
              <Typography variant="h6" component={'small'} color={colorTrash}>
                {dataError['isActive']}
              </Typography>
            ) : (
              ''
            )}
          </Grid>
          <Grid item xs={12}>
            <FlexButton
              content={
                <>
                  <Item>
                    <Button type="submit" variant="contained" color="primary">
                      <SendIcon sx={{ marginRight: 1 }} /> Submit
                    </Button>
                  </Item>
                  <Item style={{ marginLeft: '0' }}>
                    <Button type="reset" variant="contained" color="error" onClick={handleClose}>
                      <ClearIcon sx={{ marginRight: 1 }} /> Close
                    </Button>
                  </Item>
                </>
              }
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Form;
