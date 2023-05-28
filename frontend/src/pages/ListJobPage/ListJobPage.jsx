import "./list_work.sass"

import React, {useState, useEffect} from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {JobAPi} from "../../api/JobApi";

function Job(props) {
    return (
        <>
            <Link to="/job/detail" style={{textDecoration: "none"}}>
                <a href="#" className="card-link">
                    <div className="card list-element">
                        <div className="one-line">
                            <h1 className="job-name">{props.profession_name}</h1>
                            <h2>{props.company_name}</h2>
                        </div>
                        <div className="one-line">
                            <div>
                                <h3>Опыт от 1 года</h3>
                                <h3>{props.city_name}</h3>
                            </div>
                            <h2>от {props.salary} руб.</h2>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    );
}


function ListJobPage(props) {

    const [job, setJob] = useState([]);

    const jobApi = new JobAPi()

    useEffect(() => {
            jobApi.getJob().then((data) => setJob(data.Content))
        },
        [])

    return (
        <section className="list-job">
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

                    {job.length ? job.map(el => Job({...el, key: el.id})) : <></>}

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
        </section>
    );
}

export default ListJobPage;
