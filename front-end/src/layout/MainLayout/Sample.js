import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function AppBarNav() {
    return (
        <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'white' }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Add Header here
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
