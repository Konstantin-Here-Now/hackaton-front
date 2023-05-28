import "./detail_cheaf.sass"

import React from 'react';
import {Container} from "react-bootstrap";

function DetailCheafProfilePage(props) {
    return (
        <section className="detail-cheaf">
            <div className="container card one-element">
                <div className="two-column-wide">
                    <h3>Иван Иванов</h3>
                    <h5>Москва</h5>
                </div>

                <h4>Java-программист</h4>
                <h4>Желаемая з/п: 90 000 руб.</h4>

                <div className="two-column-wide">
                    <h4>Предыдущие места работы</h4>
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
                <a className="one-element-button two-column-wide usual-button" href="#">
                    Рассмотреть резюме
                </a>
            </div>
        </section>
    );
}

export default DetailCheafProfilePage;
