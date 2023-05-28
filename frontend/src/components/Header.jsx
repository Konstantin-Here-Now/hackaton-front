import {Link, Route, useNavigate} from "react-router-dom";
import React, {useContext, useEffect, useState} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {isAdmin, isWorker} from "../utils/utils";
import {useDispatch, useSelector} from "react-redux";
import {setUserAdmin, setUserWorker} from '../store/todoSlice';
import DetailJobPage from "../pages/DetailJobPage/DetailJobPage";
import {MetaApi} from "../api/MetaApi";
import {addToken, rmToken, rmUser, setUser} from '../store/todoSlice';

function Header() {

    const [role, setRole] = useState("");


    const navigate = useNavigate();
    const dispatch = useDispatch();
    let metaApi = new MetaApi()

    const token = useSelector(state => state.todos.token);

    useEffect(() => {
            metaApi.getRole(token).then((data) => {
                setRole(data?.Content?.name)
                dispatch(setUser({user:data.Content.name}))
            })
        },
        [token])



    // const user = useSelector(state => state.todos.user);

    useEffect(() => {
        },
        [role])

    const logoutHande = () => {
        dispatch(rmUser())
        dispatch(rmToken())
        setRole("")
        navigate('/')
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
                            {isAdmin(role)
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
                                <></>
                            }

                            {isWorker(role)
                                ?
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
                                :
                                <></>
                            }


                            {
                                role
                                    ?
                                    <Nav.Link href="#">
                                        <Link to="#" style={{textDecoration: "none"}}>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#" onClick={logoutHande}>Выйти</a>
                                            </li>
                                        </Link>
                                    </Nav.Link>
                                    :
                                    <Nav.Link href="#">
                                        <Link to="/login" style={{textDecoration: "none"}}>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Войти</a>
                                            </li>
                                        </Link>
                                    </Nav.Link>
                            }

                            {
                                role
                                    ?
                                    <Nav.Link href="#">
                                        <Link to="#" style={{textDecoration: "none"}}>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">{role}</a>
                                            </li>
                                        </Link>
                                    </Nav.Link>
                                    :
                                    <></>
                            }


                            {/*<Nav.Link href="#">*/}
                            {/*    <Link to="/register" style={{textDecoration: "none"}}>*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <a className="nav-link" href="#">Регистрация</a>*/}
                            {/*        </li>*/}
                            {/*    </Link>*/}
                            {/*</Nav.Link>*/}

                        </Nav>

                        {/*<Nav>*/}


                        {/*</Nav>*/}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
