import "./create_work.sass"

import React from 'react';
import {Container} from "react-bootstrap";

function CreateJobPage(props) {
    return (
        <section className="create-job">
            <div className="container card">
                <form className="form" method="post">
                    <div>
                        <label htmlFor="job_name">Название вакансии</label>
                        <input type="text" id="job_name" name="job_name"/>
                    </div>
                    <div>
                        <label htmlFor="salary">Ориентировочная заработная плата</label>
                        <input type="number" id="salary" name="salary"/>
                    </div>

                    <div>
                        <label htmlFor="required_exp">Требуемый опыт работы</label>
                        <input type="number" id="required_exp" name="required_exp"/>
                    </div>
                    <div>
                        <label htmlFor="emploitment">Вид трудоустройства</label>
                        <input type="text" id="emploitment" name="emploitment" placeholder="Полный рабочий день"/>
                    </div>

                    <div className="two-column-wide">
                        <label htmlFor="company">Описание вакансии</label>
                        <textarea id="company" name="company"/>
                    </div>

                    <div className="two-column-wide">
                        <label htmlFor="tasks">Обязанности</label>
                        <textarea id="tasks" name="tasks"/>
                    </div>

                    <div className="two-column-wide">
                        <label htmlFor="important">Требования</label>
                        <textarea id="important" name="important"/>
                    </div>

                    <div className="two-column-wide">
                        <label htmlFor="plus">Дополнительные требования</label>
                        <textarea id="plus" name="plus"/>
                    </div>

                    <div className="two-column-wide">
                        <label htmlFor="conditions">Условия работы</label>
                        <textarea id="conditions" name="conditions"/>
                    </div>

                    <div className="two-column-wide">
                        <label htmlFor="key_skills">Ключевые навыки</label>
                        <textarea id="key_skills" name="key_skills"/>
                    </div>


                    <div className="two-column-wide">
                        <label htmlFor="city">Город работы</label>
                        <input type="text" id="city" name="city" placeholder="Москва"/>
                    </div>

                    <button className="submit two-column-wide usual-button" type="submit">Создать вакансию</button>
                </form>
            </div>
        </section>
    );
}

export default CreateJobPage;
