import {
  loginUserEmailPassword,
  registerUserEmailPassword,
  singInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleAuthenticacion = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const resp = await singInWithGoogle();
    if (!resp.ok) return dispatch(logout(resp));

    dispatch(login(resp));
  };
};

export const startRegisterUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const resp = await registerUserEmailPassword({
      email,
      password,
      displayName,
    });

    if (!resp.ok) return dispatch(logout(resp));

    dispatch(login(resp));
  };
};

export const startSignInUserWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const resp = await loginUserEmailPassword({ email, password });

    console.log(resp);
    if (!resp.ok) return dispatch(logout(resp));
    dispatch(login(resp));
  };
};
