import {useParams, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import './detail_page.sass';
import { doc, getDoc} from "firebase/firestore";
import {db} from "../../configs/firebase";

import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';

function DetailPage() {

  const [person, setPerson] = useState(null);

  const navigate = useNavigate();

  // в какой папке на сервер все храниться
  const dataCatalogServer = "test"

  const {id} = useParams();

  const fetchDetail = async() => {
    const docRef = doc(db, dataCatalogServer, id);
    const blogDetail = await getDoc(docRef);

    setPerson(blogDetail.data())
    console.log("fetchDetail", blogDetail.data());
  }

  useEffect(() => {
    fetchDetail()
  }, []);

  if (person) {
    return (
      <>
        <section className="detail-title py-2">
          <Container>
            <Row>
              <Col sm={12} md={2} className="d-flex align-items-center">
                <button onClick={() => navigate("/list")}
                  className="detail-title__btn btn btn-success w-100">назад
                </button>
              </Col>
              <Col sm={12} md={10} className="">
                <h1 className="detail-title__header  text-center pb-5 pt-5">Подробная информация об
                                    участнике</h1></Col>
            </Row>
          </Container>
        </section>

        <section className="detail-card py-3">
          <Container>

            <h2 className="detail-card__header text-center my-4">{`${person.firstName} ${person.secondName}`}</h2>

            <div className="detail-card__body person-detail">
              <Row>
                <Col sm={12} md={6} className="person-photography">
                  <div className="person-photography__row">
                    <div className="person-photography__col">
                      <Image rounded className="person-photography__img" src={person.photo ? person.photo : "https://placehold.jp/800x800.png"}
                        alt=""/>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={6} className="person-content">
                  <div className="person-content__row">
                    <div className="person-content__col">
                      <div className="person-content__year">
                        <span className="fw-bold">Год участия: </span>
                        <span className="year">{`${person.year}`}</span>
                      </div>
                      <div className="person-content__role">
                        <span className="fw-bold">Роль в команде:  </span>
                        <span className="level">{`${person.level}`}</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

            </div>
          </Container>
        </section>

        <section className="detail-description py-3">
          <Container>
            <div className="py-3">
              <h3 className="detail-description__header text-center mb-3">Об участнике</h3>
              <div className="detail-description__body">
                <p className="detail-description__text">
                  {`${person.description}`}
                </p>
              </div>
            </div>
          </Container>
        </section>

      </>)
  } else {
    return (
      <div>Ничего не нашлось</div>
    )
  }

}

export default DetailPage;
