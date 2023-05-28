import "./login.sass"
import React, { useState } from 'react';
import {Container} from "react-bootstrap";
import {AuthApi} from "../../api/AuthApi";
import {useDispatch} from "react-redux";
import {addToken, rmToken} from '../../store/todoSlice';
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    email: "",
    password: "",
};


function LoginPage(props) {
    const [form, setForm] = useState(initialState);
    const {email, password} = form;

    const navigate = useNavigate();

    const handleInputChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const auth = new AuthApi()
    const dispatch = useDispatch();

    const saveToke = (data) => {
        if (data.Code === 404){
            toast.error("Что то пошло не так!");
        }
        else{
            dispatch(addToken({token: data.Content.access_token}))
            toast.success("Все ок!");
            navigate("/");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        auth.login(email, password).then((data)=>saveToke(data))
    }

    return (
        <section className="login-page">
            <div className="container card">
                <form className="form" method="post" onSubmit={handleSubmit}>
                    <div className="two-column-wide">
                        <label htmlFor="email">Электронная почта</label>
                        <input type="text"
                               id="email"
                               name="email"
                               value={email}
                               onChange={handleInputChange}
                        />
                    </div>

                    <div className="two-column-wide">
                        <label htmlFor="password">Пароль</label>
                        <input type="password"
                               id="password"
                               name="password"
                               value={password}
                               onChange={handleInputChange}
                        />
                    </div>
                    <button className="submit two-column-wide usual-button" type="submit">Авторизоваться</button>
                </form>
            </div>
        </section>
    );
}

export default LoginPage;
