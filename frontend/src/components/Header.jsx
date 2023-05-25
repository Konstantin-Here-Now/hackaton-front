import {Link, useNavigate} from "react-router-dom";
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import {logoutUser, auth} from '../configs/firebase';
import User from "./User";
import {Navbar, Nav, Container} from 'react-bootstrap';
import {isUserAdmin} from "../utils/utils";

function Header() {

  // получим текущего юзера
  const {currentUser, setCurrentUser} = useContext(AuthContext);

  const navigate = useNavigate();

  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    isUserAdmin(auth?.currentUser?.uid) ? setShowLink(true) : setShowLink(false)
  }, [currentUser, showLink])

  const handleLogout = () => {
    logoutUser()
    setCurrentUser(null)
    setShowLink(false)
    navigate("/")
  }


  return (
    <div className="header">

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>

          <Navbar.Brand href="#">
            <Link to="/" style={{textDecoration: "none"}}>
              <a className="navbar-brand" href="#">Команда</a>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">
                <Link to="/" style={{textDecoration: "none"}}>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Главная</a>
                  </li>
                </Link>
              </Nav.Link>

              <Nav.Link href="#">
                <Link to="/list" style={{textDecoration: "none"}}>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Люди</a>
                  </li>
                </Link>
              </Nav.Link>

              {
                showLink ?
                  <Nav.Link href="#">
                    <Link to="/edit" style={{textDecoration: "none"}}>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Добавить</a>
                      </li>
                    </Link>
                  </Nav.Link> : <></>
              }

              <Nav.Link href="#">
                <Link to="/private" style={{textDecoration: "none"}}>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Связаться с нами</a>
                  </li>
                </Link>
              </Nav.Link>
            </Nav>

            <Nav>
              {currentUser
                                && <Nav.Link href="#">
                                  <li className="nav-item nav-link">
                                    <User/>
                                  </li>
                                </Nav.Link>
              }

              {currentUser ?
                <Nav.Link href="#">
                  <Link to="#" style={{textDecoration: "none"}}>
                    <li className="nav-item">
                      <a className="nav-link"
                        onClick={() => handleLogout()}
                        href="#">Выйти</a>
                    </li>
                  </Link>
                </Nav.Link>                                :
                <Nav.Link href="#">
                  <Link to="/login" style={{textDecoration: "none"}}>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Войти</a>
                    </li>
                  </Link>
                </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;
