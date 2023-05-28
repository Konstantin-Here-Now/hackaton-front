import React from 'react';
import './main_page.sass';
import {NavLink} from "react-router-dom";
import {Link, useNavigate} from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';

import {SocialIcon} from 'react-social-icons';

import {BsFillBusFrontFill} from "react-icons/bs";

function MainPage() {
  return (
    <>
      <section className="main-team pt-3 pb-3">
        <Container>
          <h1 className="main-team__header text-center pb-5 pt-5">Главная страница</h1>
        </Container>
      </section>

    <section>
        <div className="container start-page">
            <a href="#" className="card-link">
                <Link to="/login" style={{textDecoration: "none"}}>
                    <div className="card">
                        Разместить резюме
                    </div>
                </Link>
            </a>
            <a href="#" className="card-link">
                <Link to="/login" style={{textDecoration: "none"}}>
                    <div className="card">
                        Разместить вакансию
                    </div>
                </Link>
            </a>
            <a href="#" className="card-link two-column-wide">
                <Link to="/job/list" style={{textDecoration: "none"}}>
                    <div className="card">
                        Просмотреть вакансии
                    </div>
                </Link>
            </a>
        </div>

    </section>
    </>
  )
}

export default MainPage;
