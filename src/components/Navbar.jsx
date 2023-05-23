import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
import { Typography } from '@mui/material';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between',
        zIndex: 20
      }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} height={45} alt="logo" />
        <Typography variant="h4" fontWeight="bold" sx={{ color: 'white', ml: 1 }} >
          iTube
        </Typography>
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default Navbar;
