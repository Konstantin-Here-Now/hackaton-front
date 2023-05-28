import React, {useContext, useEffect, useState} from 'react';
import './main_page.sass';
import {NavLink} from "react-router-dom";
import {Link, useNavigate} from "react-router-dom";

import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {isAdmin} from "../../utils/utils";

function MainPage() {


    const token = useSelector(state => state.todos.token);

    const user = useSelector(state => state.todos.user);

    useEffect(() => {
        },
        [token])

    return (
        <section className="main-page">
            <div className="container start-page">

                {
                    isAdmin(user)
                        ?
                        <a href="#" className="card-link two-column-wide">
                            <Link to={token ? "/job/create/job" : "/login"} style={{textDecoration: "none"}}>
                                <div className="card">
                                    Разместить вакансию
                                </div>
                            </Link>
                        </a>
                        :
                        <a href="#" className="card-link two-column-wide">
                            <Link to={token ? "/worker/create/resume" : "/login"} style={{textDecoration: "none"}}>
                                <div className="card">
                                    Разместить резюме
                                </div>
                            </Link>
                        </a>
                }

                <a href="#" className="card-link two-column-wide">
                    <Link to="/job/list" style={{textDecoration: "none"}}>
                        <div className="card">
                            Просмотреть вакансии
                        </div>
                    </Link>
                </a>

            </div>
        </section>
    )
}

export default MainPage;
