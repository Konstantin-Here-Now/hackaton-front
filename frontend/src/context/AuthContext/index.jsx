import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();


// используетсяв index.js для того чтоб прокидывать пользователя везде
export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);
  const {currentUserEmail, setCurrentUserEmail} = useState(null);

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid;

        setCurrentUser(uid);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);


  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, currentUserEmail, setCurrentUserEmail}}>
      {children}
    </AuthContext.Provider>
  );

};
