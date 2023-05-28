import "./register.sass"

import React from 'react';
import {Container} from "react-bootstrap";

function RegisterPage(props) {
    return (
        <section className="register-page">
            <div className="container card">
                <form className="form" method="post">
                    <div className="two-column-wide">
                        <label htmlFor="email">Электронная почта</label>
                        <input type="text" id="email" name="email"/>
                    </div>

                    <div>
                        <label htmlFor="password1">Введите пароль</label>
                        <input type="password" id="password1" name="password1"/>
                    </div>
                    <div>
                        <label htmlFor="password2">Повторите пароль</label>
                        <input type="password" id="password2" name="password2"/>
                    </div>
                        <button className="submit two-column-wide usual-button" type="submit">
                            Зарегистрироваться
                        </button>
                </form>
            </div>
        </section>
    );
}

export default RegisterPage;
