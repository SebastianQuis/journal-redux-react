import { checkingCredentials } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleAuthenticacion = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};