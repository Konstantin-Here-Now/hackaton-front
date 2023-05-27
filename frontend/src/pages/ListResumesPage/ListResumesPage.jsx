import "./list_resumes.sass"

import React from 'react';
import {Container} from "react-bootstrap";

function ListResumesPage(props) {
    return (
        <>
            <div className="container-grid">
                <div className="filter">
                    <form className="card">
                        <div className="filter-function">
                            <input type="text" name="job_name" placeholder="Должность"/>
                        </div>
                        <div className="filter-function">
                            <input type="text" name="company" placeholder="Компания"/>
                        </div>
                        <div className="filter-function">
                            <input type="text" name="city" placeholder="Город"/>
                        </div>
                        <button className="usual-button" type="submit">Найти</button>
                    </form>
                </div>
                <div className="list">
                    <a href="#" className="card-link">
                        <div className="card list-element">
                            <div className="one-line">
                                <h1 className="job-name">Java-разработчик</h1>
                                <h2>Совкомбанк-технологии</h2>
                            </div>
                            <div className="one-line">
                                <div>
                                    <h3>Опыт от 1 года</h3>
                                    <h3>Москва</h3>
                                </div>
                                <h2>от 100 000 руб.</h2>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="card-link">
                        <div className="card list-element">
                            <div className="one-line">
                                <h1 className="job-name">Старший менеджер</h1>
                                <h2>Совкомбанк</h2>
                            </div>
                            <div className="one-line">
                                <div>
                                    <h3>Опыт от 2 лет</h3>
                                    <h3>Москва</h3>
                                </div>
                                <h2>от 90 000 руб.</h2>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="card-link">
                        <div className="card list-element">
                            <div className="one-line">
                                <h1 className="job-name">Аналитик данных</h1>
                                <h2>Совкомбанк</h2>
                            </div>
                            <div className="one-line">
                                <div>
                                    <h3>Опыт от 1 года</h3>
                                    <h3>Санкт-Петербург</h3>
                                </div>
                                <h2>от 86 000 руб.</h2>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="card-link">
                        <div className="card list-element">
                            <div className="one-line">
                                <h1 className="job-name">Ещё одна вакансия</h1>
                                <h2>Совкомбанк-технологии</h2>
                            </div>
                            <div className="one-line">
                                <div>
                                    <h3>Опыт от 1 года</h3>
                                    <h3>Москва</h3>
                                </div>
                                <h2>от 100 000 руб.</h2>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="card-link">
                        <div className="card list-element">
                            <div className="one-line">
                                <h1 className="job-name">Ещё одна вакансия</h1>
                                <h2>Совкомбанк-технологии</h2>
                            </div>
                            <div className="one-line">
                                <div>
                                    <h3>Опыт от 1 года</h3>
                                    <h3>Москва</h3>
                                </div>
                                <h2>от 100 000 руб.</h2>
                            </div>
                        </div>
                    </a>
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
        </>
    );
}

export default ListResumesPage;
