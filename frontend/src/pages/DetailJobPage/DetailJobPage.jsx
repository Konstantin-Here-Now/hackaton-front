import "./detail_resumes.sass"
import {useParams, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import {JobAPi} from "../../api/JobApi";



function DetailJobPage(props) {
    const {id} = useParams()

    console.log(id)

    const [job, setJob] = useState({});

    const jobApi = new JobAPi()

    useEffect(() => {
            jobApi.getJobDetail(id).then((data) => setJob(data.Content))
        },
        [])

    return (
        <section className="detail-job">
            <div className="container card one-element">
                <h3 className="two-column-wide">{job?.profession_name}</h3>
                <div>
                    <h4>{job?.company_name}</h4>
                    <p>{job?.city_name}</p>
                    <p>Опыт работы от 1 года</p>
                    <p>Полный рабочий день</p>
                </div>
                <div className="left-placed">
                    <h4>от {job?.salary} руб.</h4>
                </div>

                <div className="two-column-wide">
                    <h4>Описание вакансии</h4>
                    <p>
                        {job?.description}
                    </p>
                </div>

                <div className="two-column-wide">
                    <h4>Обязанности</h4>
                    <p>
                        {job?.tasks}
                    </p>
                </div>

                <div className="two-column-wide">
                    <h4>Требования</h4>
                    <p>
                        {job?.important}
                    </p>
                </div>

                <div className="two-column-wide">
                    <h4>Дополнительные требования</h4>
                    <p>
                        {job?.plus}
                    </p>
                </div>

                <div className="two-column-wide">
                    <h4>Условия работы</h4>
                    <p>
                        {job?.conditions}
                    </p>
                </div>

                <div className="two-column-wide">
                    <h4>Ключевые навыки</h4>
                    <p>
                        {job?.key_skills}
                    </p>
                </div>

            </div>
        </section>
    );
}

export default DetailJobPage;
