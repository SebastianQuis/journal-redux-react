import { useDispatch, useSelector } from "react-redux";

import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import {
  checkingAuthentication,
  startGoogleAuthenticacion,
} from "../../store/auth/thunks";
import { useMemo } from "react";

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);
  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const dispatch = useDispatch();

  const { email, password, onInputChange, formState } = useForm({
    email: "sebastian@google.com",
    password: "123456",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication(email, password));
    console.log({ email, password });
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleAuthenticacion());
    console.log("onGoogleSignIn");
  };

  return (
    <>
      <AuthLayout title="Inicia sesión">
        <form onSubmit={onSubmit}>
          <Grid container>
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
              />
            </Grid>
          </Grid>

          {/* BOTONES */}
          <Grid container sx={{ mt: 1 }} spacing={2}>
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isAuthenticating}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                onClick={onGoogleSignIn}
                fullWidth
                variant="outlined"
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* NEW ACCOUNT */}
        <Grid container justifyContent="end" sx={{ mt: 2 }}>
          <Grid item>
            <Link to={"/auth/register"}>Crear una cuenta</Link>
          </Grid>
        </Grid>
      </AuthLayout>
    </>
  );
};
