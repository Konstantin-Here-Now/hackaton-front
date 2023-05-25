import React, {useContext, useEffect, useState} from 'react';

import {db} from '../../configs/firebase';
import {doc, getDoc} from 'firebase/firestore';
import {AuthContext} from '../../context/AuthContext';
import ContactUs from "../../components/ContactUs";

import {
  Container,
  Row,
  Col
} from 'react-bootstrap';


const PrivatePage = () => {

  const {currentUser} = useContext(AuthContext);

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
    <section>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={10}>
            <div className="text-center py-4">
              <h1>Welcome {email}!</h1>
            </div>
            <div className="pb-3">
              <ContactUs userEmail={email}/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

  );
};

export default PrivatePage;
