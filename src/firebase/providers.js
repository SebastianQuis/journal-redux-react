import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleAuthProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleAuthProvider);
    // const credetencials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      user: {
        displayName,
        email,
        photoURL,
        uid,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      error,
    };
  }
};

export const registerUserEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { uid, photoURL } = resp.user;

    // todo - actualizar la información del usuario creado
    await updateProfile(FirebaseAuth.currentUser, {
      displayName,
      photoURL,
    });

    return {
      ok: true,
      user: {
        displayName,
        email,
        photoURL,
        uid,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      error: error.code,
    };
  }
};

export const loginUserEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { photoURL, displayName, uid } = resp.user;
    // console.log(uid, photoURL, displayName);

    await updateProfile(FirebaseAuth.currentUser, {
      displayName,
      photoURL,
    });

    return {
      ok: true,
      user: {
        displayName,
        email,
        photoURL,
        uid,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      error: error.code,
    };
  }
};
