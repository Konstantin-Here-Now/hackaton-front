import React, { useContext, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';
import { db } from '../configs/firebase';

const User = () => {

  const { currentUser } = useContext(AuthContext);

  const [email, setEmail] = useState(null);

  const getUserInformation = async() => {
    const docRef = doc(db, "users", currentUser);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();

      setEmail(userData.email);
    } else {
      console.log("This document does not exists");
    }
  };

  useEffect(() => {
    getUserInformation();
  }, []);

  return (
    <>
      {email}
    </>
  );
};

export default User;
