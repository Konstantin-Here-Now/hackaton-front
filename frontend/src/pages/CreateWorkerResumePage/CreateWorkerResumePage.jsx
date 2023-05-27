import "./create_resume.sass"

import React from 'react';
import {Container} from "react-bootstrap";

function CreateWorkerResumePage(props) {
    return (
        <>
            <section className="main-team pt-3 pb-3">
                <Container>
                    <h1 className="main-team__header text-center pb-5 pt-5">CreateResumePage</h1>
                </Container>
            </section>
            <div className="container card">
                <form className="form" method="post">
                    <div className="two-column-wide">
                        <label htmlFor="specialisation">Ваша специализация</label>
                        <input type="text" id="specialisation" name="specialisation"/>
                    </div>


                    <div className="two-column-wide">
                        <label htmlFor="salary">Желаемая зарплата</label>
                        <input type="number" id="salary" name="salary"/>
                    </div>

                    <div>
                        <label htmlFor="first_name">Имя</label>
                        <input type="text" id="first_name" name="first_name"/>
                    </div>
                    <div>
                        <label htmlFor="last_name">Фамилия</label>
                        <input type="text" id="last_name" name="first_name"/>
                    </div>

                    <div>
                        <label htmlFor="city">В каком городе проживаете?</label>
                        <input type="text" id="city" name="city"/>
                    </div>

                    <div className="two-column-wide">
                        <label>Предыдущие места работы</label>
                        <div className="input-massive">
                            <input type="text" name="place[time_start]" placeholder="Начало работы на прошлой работе"/>
                            <input type="text" name="place[time_end]"
                                   placeholder="Окончание работы на прошлой работе"/>
                            <input type="text" name="place[specialisation]"
                                   placeholder="Специализация на прошлой работе"/>
                            <input type="text" name="place[responsibilities]"
                                   placeholder="Обязанности на прошлой работе"/>
                        </div>
                    </div>
                    <button className="submit two-column-wide usual-button" type="submit">Отправить резюме</button>
                </form>
            </div>
        </>
    );
}

export default CreateWorkerResumePage;
