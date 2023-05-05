import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
  updateProfile,
} from "firebase/auth";

async function signupUser(payload) {
  const { name, surname, email, password } = payload;
  const auth = getAuth();
  const result = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await updateProfile(result.user, {
    displayName: `${name} ${surname}`,
  });
  await signOut(auth);
}

export default signupUser;
