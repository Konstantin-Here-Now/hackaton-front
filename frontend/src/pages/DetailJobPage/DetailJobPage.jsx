import "./detail_resumes.sass"
import {useParams, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import {JobAPi} from "../../api/JobApi";

function DetailJobPage(props) {
    const {id} = useParams()

    console.log(id)

    // TODO
    // const [job, setJob] = useState([1, 2, 3]);
    //
    // const jobApi = new JobAPi()
    //
    // useEffect(() => {
    //         jobApi.jobAddResponse(id).then((data) => setJob(data.Content))
    //     },
    //     [])


    return (
        <>
            <div className="container card one-element">
                <h3 className="two-column-wide">Java-разработчик</h3>
                <div>
                    <h4>Совкомбанк-технологии</h4>
                    <p>Москва</p>
                    <p>Опыт работы от 1 года</p>
                    <p>Полный рабочий день</p>
                </div>
                <div className="left-placed">
                    <h4>от 100 000 руб.</h4>
                </div>

                <div className="two-column-wide">
                    <h4>Описание вакансии</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit
                        anim id est laborum.
                    </p>
                </div>

                <div className="two-column-wide">
                    <h4>Обязанности</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit
                        anim id est laborum.
                    </p>
                </div>

                <div className="two-column-wide">
                    <h4>Требования</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit
                        anim id est laborum.
                    </p>
                </div>

                <div className="two-column-wide">
                    <h4>Дополнительные требования</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit
                        anim id est laborum.
                    </p>
                </div>

                <div className="two-column-wide">
                    <h4>Условия работы</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit
                        anim id est laborum.
                    </p>
                </div>

                <div className="two-column-wide">
                    <h4>Ключевые навыки</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit
                        anim id est laborum.
                    </p>
                </div>

            </div>
        </>
    );
}

export default DetailJobPage;
