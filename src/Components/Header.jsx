import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, Tooltip, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import LogoURL from '../Images/Logo.jpg';
//Styling
const NavBar = styled(AppBar)`
background-color: #FFF5F1;
box-shadow:none;
`;
const GetStartedButton = styled(Button)`
background-color:white;
border-radius: 25px;
color:blue;
text-decoration:none;
text-transform:capitalize;
`;
//NavBar Components
const pages = ['Courses', 'About Us', 'Teachers', 'Pricing', 'Careers', 'Blog'];

export const Header = () => {
   const [anchorElNav, setAnchorElNav] = React.useState(null);
   const [anchorElUser, setAnchorElUser] = React.useState(null);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };
   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };
   return (
      <Box style={{ margin: "1.1rem 1.1rem 0 1.1rem" }}>
         <NavBar position="static">
            <Container maxWidth="xl">
               <Toolbar disableGutters>
                  <Typography>
                     <img src={LogoURL} alt='image' style={{ height: '2em' }} />
                  </Typography>
                  <Typography
                     variant="h6"
                     noWrap
                     component="a"
                     href="/"
                     sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'black',
                        textDecoration: 'none',
                     }}
                  >
                     Lingua
                  </Typography>

                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                     <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="#FFF5F1"
                     >
                        <MenuIcon />
                     </IconButton>

                     <Menu style={{ textAlign: 'center' }}
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                           vertical: 'bottom',
                           horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: 'top',
                           horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                           display: { xs: 'block', md: 'none' },
                        }}
                     >
                        {pages.map((page) => (
                           <MenuItem style={{ textAlign: "center" }} key={page} onClick={handleCloseNavMenu}>
                              <Box textAlign="center">{page}</Box>
                           </MenuItem>
                        ))}
                     </Menu>

                  </Box>
                  <Box justifyContent="center" style={{ textAlign: 'center', backgroundColor: '#FFF5F1' }} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
                     {pages.map((page) => (
                        <Box>
                           <Button
                              style={{ textTransform: 'capitalize' }}
                              key={page}
                              onClick={handleCloseNavMenu}
                              sx={{ my: 2, color: '#666680', display: 'block' }}
                           >
                              {page}
                           </Button>
                        </Box>
                     ))}
                  </Box>
                  <Box sx={{ flexGrow: 0 }}>
                     <Tooltip title="get started">
                        <GetStartedButton variant="contained">Get started</GetStartedButton>
                     </Tooltip>
                  </Box>
               </Toolbar>
            </Container>
         </NavBar>
      </Box>
   );
}

