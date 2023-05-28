import "./create_resume.sass"

import React from 'react';
import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function CreateWorkerResumePage(props) {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success("Все ок!");
        navigate("/")
    }

    return (
        <section className="create-worker">
            <div className="container card">
                <form className="form" method="post" onSubmit={handleSubmit}>
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
                        <input type="text" id="last_name" name="last_name"/>
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
        </section>
    );
}

export default CreateWorkerResumePage;
