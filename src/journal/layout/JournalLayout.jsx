import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { NavBar } from '../components/NavBar';
import { SideBar } from '../components/SideBar';

const sidebarWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    
    <Box
        sx={{display: 'flex'}}
    >

        <NavBar sidebarWidth={ sidebarWidth }/> 

        <SideBar sidebarWidth={ sidebarWidth }/>
        
        <Box
            component='main'
            sx={{flexGrow:1,}} //  p:3
        >
            <Toolbar/> {/* todo - no ocupa el espacio ya utilizado */}
            
            {/* TODO LOS VIEWS */}
            {children}
            
        </Box>
    </Box>
    
  )
}
