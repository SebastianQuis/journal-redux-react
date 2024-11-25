import React from 'react'

import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <>
      <AuthLayout title='Regístrate'>
        <form>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 3 }}>
              <TextField
                label="Nombre completo" 
                type="text"
                placeholder='Juan Perez'
                fullWidth
                required
              />
            </Grid>
            
            <Grid item xs={ 12 } sx={{ mt: 3 }}>
              <TextField
                label="Correo electrónico" 
                type="email"
                placeholder='correo@gmail.com'
                fullWidth
                required
              />
            </Grid>
            
            <Grid item xs={ 12 } sx={{ mt: 3 }}>
              <TextField
                label="Contraseña" 
                type="password"
                placeholder='********'
                fullWidth
                required
              />
            </Grid>
          </Grid>
        </form>

        {/* BOTONES */}
        <Grid  container sx={{ mt: 2 }} >
          <Grid item xs={12}>
            <Button fullWidth variant='contained'>
              Crear cuenta
            </Button>
          </Grid>
        </Grid>

        {/* NEW ACCOUNT */}
        <Grid  container direction='row' justifyContent="end" mt={2} >
          
          <Typography mr={1}>¿Ya tienes una cuenta?</Typography>
          
          <Link to={'/auth/login'}> Ingresa aquí </Link>

        </Grid>
      </AuthLayout>      
    </>
  )
}
