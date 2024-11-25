import React from 'react'

import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { LogoutRounded, MenuOutlined } from '@mui/icons-material'

export const NavBar = ({ sidebarWidth = 240}) => {
    return (
        <AppBar
            position='fixed'
            sx={{ 
                width:{ sm: `calc(100% - ${sidebarWidth}px)`},
                ml:{ sm: `${sidebarWidth}px` }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr:2, display: {sm: 'none'}}} // pantallas pequeñas se esconde
                >
                    <MenuOutlined/>
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center' >
                    <Typography variant='h6' noWrap component='div'>Journal</Typography>

                    <IconButton>
                        <LogoutRounded
                            color='error'
                        />
                    </IconButton>
                </Grid>

            </Toolbar>

        </AppBar>
    )
}
