import { API_URL_GLOBAL } from 'utils/helper';
import Link from '@mui/material/Link';
import { Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { colorPencil, colorTrash } from 'store/constant';

// data table dummy admin
const dataColumnAdmin = (handleEdit, handleRemove) => {
  const columns = [
    {
      field: 'no',
      headerName: 'No.',
      flex: 0.1
    },
    {
      field: 'username',
      headerName: 'Username',
      flex: 0.2,
      valueGetter: (params) => params.row.users.username
    },
    {
      field: 'name',
      headerName: 'Nama',
      flex: 0.15,
      valueGetter: (params) => params.row.admin.name
    },
    {
      field: 'phoneNumber',
      headerName: 'No. Telephone',
      flex: 0.2,
      valueGetter: (params) => params.row.admin.phoneNumber
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 0.15,
      valueGetter: (params) => params.row.admin.email
    },
    {
      field: 'gender',
      headerName: 'Jenis Kelamin',
      flex: 0.2,
      valueGetter: (params) => params.row.admin.gender
    },
    {
      field: 'picture',
      headerName: 'Gambar',
      flex: 0.2,
      renderCell: (params) => (
        <Link href={`${API_URL_GLOBAL}/uploads/master/admin/${params.row.admin.picture}`} target="_blank" rel="noreferrer">
          <img
            src={`${API_URL_GLOBAL}/uploads/master/admin/${params.row.admin.picture}`}
            alt={params.row.admin.picture}
            style={{ height: '150px', borderRadius: '15px' }}
          />
        </Link>
      )
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 0.2,
      renderCell: (params) => {
        return (
          <>
            <Box sx={{ textAlign: 'center', width: '100%' }}>
              <Button
                variant="text"
                style={{ padding: 0, minWidth: 0, marginRight: '10px' }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(params.row);
                }}
              >
                <EditIcon sx={{ color: colorPencil }} />
              </Button>

              <Button
                variant="text"
                style={{ padding: 0, margin: 0, minWidth: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(params.row);
                }}
              >
                <DeleteIcon sx={{ color: colorTrash }} />
              </Button>
            </Box>
          </>
        );
      }
    }
  ];

  return columns;
};

export default dataColumnAdmin;
