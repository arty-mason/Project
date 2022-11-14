import { createContext, useContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider, signInWithPopup,
  // signInWithRedirect,
} from "firebase/auth"
import { auth } from "../firebase"

const UserContext = createContext();

/* const UserAPI = {
  Queries: {
    createUser: (request, options = {}) => createUserWithEmailAndPassword(auth, email, password),
    signIn: (type) => { }
  },
}; 

UserAPI.Queries.createUser();
*/
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    // signInWithRedirect(auth, provider);
  }

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser)
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logOut, signIn, googleSignIn }}>
      {children}
    </UserContext.Provider >
  )
};

export const useUserAuth = () => {
  return useContext(UserContext);
}