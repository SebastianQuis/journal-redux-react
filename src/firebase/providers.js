import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleAuthProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleAuthProvider);
    // const credetencials = GoogleAuthProvider.credentialFromResult(result);
    // console.log(credetencials);
    // console.log(result.user);
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
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      error,
    };
  }
};
