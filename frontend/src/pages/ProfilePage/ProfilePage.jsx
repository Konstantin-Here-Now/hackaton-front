import "./detail_resumes.sass"

import React from 'react';
import {Container, Nav} from "react-bootstrap";
import {isAdmin} from "../../utils/utils";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";

function ProfilePage(props) {

    const user = useSelector(state => state.todos.user);

    useEffect(()=>{},
        [user])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section className="profile-page">
            <div className="container card">
                <form className="form" method="post" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Ваша электронная почта</label>
                        <input type="text" id="email" name="email"/>
                    </div>
                    <button className="submit usual-button" type="submit">Изменить электронную почту</button>


                    {isAdmin(user)
                        ?
                        <>
                            <Link to="/job/create/job" style={{textDecoration: "none"}}>
                                <a href="#" className="submit two-column-wide usual-button">Создать вакансию</a>
                            </Link>
                        </>
                        :
                        <>
                            <Link to="/worker/create/resume" style={{textDecoration: "none"}}>
                                <a href="#" className="submit two-column-wide usual-button">Отправить резюме</a>
                            </Link>
                        </>
                    }


                </form>
            </div>
        </section>
    );
}

export default ProfilePage;
