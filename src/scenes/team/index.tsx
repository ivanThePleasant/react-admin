import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { tokens } from "../../theme";
import { mockDataTeam } from '../../data/mockData.js';
import AdminPanelSettingOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from "../../components/Header";

const Team = (): JSX.Element => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  const RenderCellStyle: React.FC<{access:string}> = ({ access }) => {
    return (
      <Box
        width='60%'
        m='0 auto'
        p='5px'
        display='flex'
        justifyContent='center'
        borderRadius='4px'
        bgcolor={
          access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]
        }
      >
        {access === 'admin' && <AdminPanelSettingOutlinedIcon /> }
        {access === 'manager' && <SecurityOutlinedIcon /> }
        {access === 'user' && <LockOpenOutlinedIcon /> }
        <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
          {access}
        </Typography>
      </Box>
    )
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell'},
    { field: 'age', headerName: 'Age', type: 'number', headerAlign: 'left', align: 'left'},
    { field: 'phone', headerName: 'Phone', flex: 1},
    { field: 'email', headerName: 'Email', flex: 1},
    { field: 'access', headerName: 'Access Level', flex: 1, 
      renderCell: ({ row: { access } }): JSX.Element => <RenderCellStyle access={access} />
    }
  ]
  
  return (
    <Box m='20px'>
      <Header title="TEAM" subtitle="Managing team members" />
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
          }
        }}
      >
        <DataGrid 
          columns={columns}
          rows={mockDataTeam}
        />
      </Box>
    </Box>
  )
}

export default Team