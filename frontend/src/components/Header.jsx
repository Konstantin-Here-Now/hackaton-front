import {Link, Route, useNavigate} from "react-router-dom";
import React, {useContext, useEffect, useState} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {isAdmin, isUserAdmin} from "../utils/utils";
import {useDispatch, useSelector} from "react-redux";
import {setUserAdmin, setUserWorker} from '../store/todoSlice';
import DetailJobPage from "../pages/DetailJobPage/DetailJobPage";

function Header() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const user = useSelector(state => state.todos.user);

    useEffect(()=>{},
        [user])

    const toggleUser = () => {
        user === "admin" ? dispatch(setUserWorker()) : dispatch(setUserAdmin())
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

                            {isAdmin(user)
                                ?
                                <>
                                    <Nav.Link href="#">
                                        <Link to="/job/profile" style={{textDecoration: "none"}}>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Профиль</a>
                                            </li>
                                        </Link>
                                    </Nav.Link>


                                    <Nav.Link href="#">
                                        <Link to="/job/create/job" style={{textDecoration: "none"}}>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Создать вакансию</a>
                                            </li>
                                        </Link>
                                    </Nav.Link>


                                    <Nav.Link href="#">
                                        <Link to="/worker/list" style={{textDecoration: "none"}}>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Список работников</a>
                                            </li>
                                        </Link>
                                    </Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link href="#">
                                        <Link to="/worker/profile" style={{textDecoration: "none"}}>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Профиль</a>
                                            </li>
                                        </Link>
                                    </Nav.Link>

                                    <Nav.Link href="#">
                                        <Link to="/worker/create/resume" style={{textDecoration: "none"}}>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Создать портфолио</a>
                                            </li>
                                        </Link>
                                    </Nav.Link>


                                    <Nav.Link href="#">
                                        <Link to="/job/list" style={{textDecoration: "none"}}>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Список вакансий</a>
                                            </li>
                                        </Link>
                                    </Nav.Link>
                                </>
                            }

                            <Nav.Link href="#">
                                <Link to="/login" style={{textDecoration: "none"}}>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Войти</a>
                                    </li>
                                </Link>
                            </Nav.Link>

                            <Nav.Link href="#">
                                <Link to="/register" style={{textDecoration: "none"}}>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Регистрация</a>
                                    </li>
                                </Link>
                            </Nav.Link>

                        </Nav>

                        <Nav>
                            <Nav.Link href="#">
                                <Link to="#" style={{textDecoration: "none"}}>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">{user}</a>
                                    </li>
                                </Link>
                            </Nav.Link>

                            <Nav.Link href="#">
                                <Link to="#" style={{textDecoration: "none"}}>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" onClick={toggleUser}>Toggle</a>
                                    </li>
                                </Link>
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
