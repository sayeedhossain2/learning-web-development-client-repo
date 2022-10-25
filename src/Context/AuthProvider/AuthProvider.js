import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 1. google login
  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  //   2. creat account (register)
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   3. login
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   4.logout
  const logOut = () => {
    return signOut(auth);
  };

  //   5. github login
  const githubProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };

  //   6. update profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    providerLogin,
    creatUser,
    signIn,
    logOut,
    githubProvider,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
