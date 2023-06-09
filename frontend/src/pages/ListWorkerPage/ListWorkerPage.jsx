import "./list_resumes.sass"

import React from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function ListWorkerPage(props) {

    let byDimaBorisvo = ''

    return (
        <section className="list-resume">
            <div className="container-grid">
                <div className="filter">
                    <form className="card">
                        <div className="filter-function">
                            <input type="text" name="job_name" placeholder="Должность"/>
                        </div>
                        <div className="filter-function">
                            <input type="text" name="company" placeholder="Желаемая зарплата"/>
                        </div>
                        <div className="filter-function">
                            <input type="text" name="city" placeholder="Город"/>
                        </div>
                        <button className="usual-button" type="submit">Найти</button>
                    </form>
                </div>
                <div className="list">
                    <Link to="/worker/detail" style={{textDecoration: "none"}}>
                        <a href="#" className="card-link">
                            <div className="card list-element">
                                <div className="one-line">
                                    <h1 className="job-name">Java-разработчик</h1>
                                    <h2>Желаемая з/п: 70 000 руб.</h2>
                                </div>
                                <div className="one-line">
                                    <div>
                                        <h3>Иван Иванович</h3>
                                        <h3>Москва</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>

                    <Link to="/worker/detail" style={{textDecoration: "none"}}>
                        <a href="#" className="card-link">
                            <div className="card list-element">
                                <div className="one-line">
                                    <h1 className="job-name">Java-разработчик</h1>
                                    <h2>Желаемая з/п: 70 000 руб.</h2>
                                </div>
                                <div className="one-line">
                                    <div>
                                        <h3>Иван Иванович</h3>
                                        <h3>Москва</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>

                    <Link to="/worker/detail" style={{textDecoration: "none"}}>
                        <a href="#" className="card-link">
                            <div className="card list-element">
                                <div className="one-line">
                                    <h1 className="job-name">Java-разработчик</h1>
                                    <h2>Желаемая з/п: 70 000 руб.</h2>
                                </div>
                                <div className="one-line">
                                    <div>
                                        <h3>Иван Иванович</h3>
                                        <h3>Москва</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>

                    <Link to="/worker/detail" style={{textDecoration: "none"}}>
                        <a href="#" className="card-link">
                            <div className="card list-element">
                                <div className="one-line">
                                    <h1 className="job-name">Java-разработчик</h1>
                                    <h2>Желаемая з/п: 70 000 руб.</h2>
                                </div>
                                <div className="one-line">
                                    <div>
                                        <h3>Иван Иванович</h3>
                                        <h3>Москва</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>

                    <Link to="/worker/detail" style={{textDecoration: "none"}}>
                        <a href="#" className="card-link">
                            <div className="card list-element">
                                <div className="one-line">
                                    <h1 className="job-name">Java-разработчик</h1>
                                    <h2>Желаемая з/п: 70 000 руб.</h2>
                                </div>
                                <div className="one-line">
                                    <div>
                                        <h3>Иван Иванович</h3>
                                        <h3>Москва</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>

                    <div className="paginator">
                        <a href="#">«</a>
                        <a href="#">1</a>
                        <a className="active" href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">»</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListWorkerPage;
