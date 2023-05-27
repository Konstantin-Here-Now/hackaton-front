import "./login.sass"

import React from 'react';
import {Container} from "react-bootstrap";

function LoginPage(props) {
    return (
        <>
            <div className="container card">
                <form className="form" method="post">
                    <div className="two-column-wide">
                        <label htmlFor="email">Электронная почта</label>
                        <input type="text" id="email" name="email"/>
                    </div>

                    <div className="two-column-wide">
                        <label htmlFor="password">Пароль</label>
                        <input type="password" id="password" name="password1"/>
                    </div>
                    <button className="submit two-column-wide usual-button" type="submit">Авторизоваться</button>
                </form>
            </div>
        </>
    );
}

export default LoginPage;
