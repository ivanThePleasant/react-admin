import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

interface HeaderInterface {
  title?: string,
  subtitle?: string
}

const Header = ({ title = 'Title', subtitle = 'Subtitle' }: HeaderInterface): JSX.Element => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb='30px'>
      <Typography variant='h2' color={colors.grey[100]} fontWeight='bold' sx={{ mb: '5px' }}>{title}</Typography>
      <Typography variant='h5' color={colors.greenAccent[500]}>{subtitle}</Typography>
    </Box>
  )
}

export default Header