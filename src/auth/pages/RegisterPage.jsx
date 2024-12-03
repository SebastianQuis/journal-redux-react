"use client";

import { useMemo, useState } from "react";

import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startRegisterUserWithEmailPassword } from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";

const userData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  displayName: [
    (value) => value.length >= 3,
    "El nombre debe tener al menos 3 caracteres",
  ],
  email: [(value) => value.includes("@"), "El correo debe ser valido"],
  password: [
    (value) => value.length >= 3,
    "La contraseña debe tener al menos 3 caracteres",
  ],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);
  console.log(errorMessage);

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
  } = useForm(userData, formValidations);

  // estado para mostrar el error después de enviar el formulario
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    dispatch(startRegisterUserWithEmailPassword(formState));
    // console.log({ formState });
  };

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  return (
    <>
      <AuthLayout title="Regístrate">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 3 }}>
              <TextField
                label="Nombre completo"
                type="text"
                placeholder="Juan Perez"
                fullWidth
                required
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmitted}
                helperText={displayNameValid}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 3 }}>
              <TextField
                label="Correo electrónico"
                type="email"
                placeholder="correo@gmail.com"
                fullWidth
                required
                name="email"
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 3 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="********"
                fullWidth
                required
                name="password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid>

            {errorMessage && (
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            )}

            {/* BOTONES */}
            <Grid container sx={{ mt: 2 }}>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isAuthenticating}
                >
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>

        {/* NEW ACCOUNT */}
        <Grid container direction="row" justifyContent="end" mt={2}>
          <Typography mr={1}>¿Ya tienes una cuenta?</Typography>

          <Link to={"/auth/login"}> Ingresa aquí </Link>
        </Grid>
      </AuthLayout>
    </>
  );
};
