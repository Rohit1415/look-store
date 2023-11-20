import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const pages = [
  { title: 'Home', path: '/home' },
  { title: 'Contact', path: '/contact' },
  { title: 'About', path: '/about' },
  { title: 'Profile', path: '/signup' },
];
const Appbar = () =>  {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{p:1, bgcolor:"#fff", color:"#000", boxShadow:"0"}}>
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="a" href="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }} >
            EXCLUSIVE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit" >
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left', }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' },textTransform:"capitalize" }} >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography textAlign='center' noWrap component="a" href="/" sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }} >
            EXCLUSIVE 
          </Typography>

          {/* NOT RESPOSIVE BAR ITEMS */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {
              pages.map((page, index) => (
                <Button key={index} onClick={handleCloseNavMenu} sx={{ my: 2, color: '#000', display: 'block', mr:1, fontSize:"19px",textTransform:"capitalize" }} > 
                  {page.title}
                </Button> ))
            }
          </Box>
            <Box>
              <ShoppingBagOutlinedIcon sx={{
                fontSize : { 
                  xs: 35,
                  sm: 35,
                  md: 40,
                  lg: 45,
                  xl: 50
                },
                cursor: 'pointer'
              }}  />
            </Box>
        </Toolbar>
    </AppBar>


  );
}
export default Appbar;