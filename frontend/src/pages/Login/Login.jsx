import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {loginUser} from '../../configs/firebase';
import './login_page.sass';
import {toast} from "react-toastify";
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';

const Login = () => {

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
    loginUser(email, password)
      .then(() => {
        toast.info("Вы вошли!");
        navigate("/")
      })
      .catch(error => {
        const errorCode = error.code;

        if (errorCode === "auth/user-not-found" ){
          toast.error("Пользователь не найден!");
        }
        else if (errorCode === "auth/wrong-password"){
          toast.error("Неверный пароль!");
        }
        else{
          toast.error("Что то пошло не так!");
        }

        console.log(error);
        console.log(errorCode);
      });
  };

  return (
    <section className="login py-2 h-100">
      <Container className="h-100">
        <Row className="h-100 d-flex justify-content-center align-items-center">
          <Col xs={10} md={6}>
            <Form className="border border-success rounded rounded-3 px-5 py-5">
              <h1 className="text-center py-3">Вход</h1>
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
                                    Войти
                </Button>
              </div>

              <div className="account-exists text-center">
                <span className="account-exists__question">У вас еще нет аккаунта? </span>
                <span className="account-exists__link"
                  onClick={() => navigate('/register')}>
                            Зарегистрироваться!
                </span>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
