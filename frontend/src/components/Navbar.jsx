import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { LogoutOutlined } from "@mui/icons-material";

const Navbar = ({ userUsername, handleLogout }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Hello {userUsername}
        </Typography>
        <Button 
            variant='text'
            startIcon={<LogoutOutlined />}
            color='inherit' 
            onClick={handleLogout}
            I>
            Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
