import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid'
import { tokens } from "../../theme";
import { mockDataContacts } from '../../data/mockData.js';
import Header from "../../components/Header";

const Contacts = (): JSX.Element => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  // const RenderCellStyle: React.FC<{access:string}> = ({ access }) => {
  //   return (
  //     <Box
  //       width='60%'
  //       m='0 auto'
  //       p='5px'
  //       display='flex'
  //       justifyContent='center'
  //       borderRadius='4px'
  //       bgcolor={
  //         access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]
  //       }
  //     >
  //       {access === 'admin' && <AdminPanelSettingOutlinedIcon /> }
  //       {access === 'manager' && <SecurityOutlinedIcon /> }
  //       {access === 'user' && <LockOpenOutlinedIcon /> }
  //       <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
  //         {access}
  //       </Typography>
  //     </Box>
  //   )
  // }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'registrarId', headerName: 'Registrar ID' },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell'},
    { field: 'age', headerName: 'Age', type: 'number', headerAlign: 'left', align: 'left'},
    { field: 'phone', headerName: 'Phone', flex: 1},
    { field: 'email', headerName: 'Email', flex: 1},
    { field: 'address', headerName: 'Address', flex: 1},
    { field: 'city', headerName: 'City', flex: 1},
    { field: 'zipCode', headerName: 'Zip Code', flex: 1},
  ]
  
  return (
    <Box m='20px'>
      <Header title="CONTACTS" subtitle="List of contacts for future reference" />
      <Box 
        m='40px 0 0 0' 
        height='75vh'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none'
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none'
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300]
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none'
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400]
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700]
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`
          }
        }}
      >
        <DataGrid 
          columns={columns}
          rows={mockDataContacts}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  )
}

export default Contacts