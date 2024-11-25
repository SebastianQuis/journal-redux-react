import { ReportGmailerrorredOutlined, TurnedInNotOutlined } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'

export const SideBar = ({ sidebarWidth = 240 }) => {
  
    return (
        <Box
            component='nav'
            sx={{ padding:'0px 0px', width: {sm: sidebarWidth}, flexShrink: {sm: 0}  }}
        >
            <Drawer
                variant='permanent' // temporary // ocultar y mostrar
                open // true // 
                sx= {{
                    display: {xs: 'block'},
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box', 
                        width: sidebarWidth
                    }
                }}
            >
                <Toolbar>
                    <Typography variant='h5' noWrap component='div' sx={{fontWeight: 'bold'}}>
                        Hola Sebastian
                    </Typography>
                </Toolbar>
                <Divider/>
                <List sx={ {mt: 0, pt: 0} }>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map( texto => (
                          <ListItem 
                            key={texto}
                            sx={{padding:'0px'}} 
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ReportGmailerrorredOutlined/>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={texto}/>
                                        <ListItemText secondary='esto es para una nota'/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>  
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
