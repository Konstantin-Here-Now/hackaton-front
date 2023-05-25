import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {doc, setDoc, Timestamp} from 'firebase/firestore';
import {registerUser, db} from '../../configs/firebase';
import './register_page.sass';

import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';

import {toast} from "react-toastify";

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault()
    registerUser(email, password)
      .then(userCredential => {
        const user = userCredential.user

        setDoc(doc(db, 'users', user.uid), {
          email: email,
          registeredAt: Timestamp.fromDate(new Date())
        });
        toast.info("Пользователь успешно создан!");
        navigate("/")
      })
      .catch(error => {
        const errorCode = error.code;

        if (errorCode === "auth/weak-password"){
          toast.error("Пароль слишком простой!");
        }
        else if (errorCode === "auth/invalid-email"){
          toast.error("Невалидный email!");
        }
        else if (errorCode === "auth/email-already-in-use"){
          toast.error("Такой пользователь уже есть!");
        }
        else {
          toast.error("Что-то пошло не так!");
        }

        console.log(error);
        console.log(errorCode);
      });
  }

  return (
    <section className="register py-2 h-100">
      <Container className="h-100">
        <Row className="h-100 d-flex justify-content-center align-items-center">
          <Col xs={10} md={6}>
            <Form className="border border-success rounded rounded-3 px-5 py-5">
              <h1 className="text-center py-3">Регистрация</h1>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Почта</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@mail.ru"
                  value={email}
                  onChange={handleEmail}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="1234qwer"
                  value={password}
                  onChange={handlePassword}
                />
              </Form.Group>
              <div className="d-grid gap-2">

                <Button
                  variant="primary"
                  type="submit"
                  className="mb-2"
                  onClick={handleSubmit}
                >
                                    Зарегистрироваться
                </Button>
              </div>

              <div className="account-exists text-center">
                <span className="account-exists__question">У вас уже есть аккаунт? </span>
                <span className="account-exists__link"
                  onClick={() => navigate('/login')}
                >
                                Войти!
                </span>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default Register;

