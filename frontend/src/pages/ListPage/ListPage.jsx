import React, { useEffect, useState} from "react";
import {db} from '../../configs/firebase';
import './people_page.sass';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import {
  collection,
  getDocs
} from "firebase/firestore";

import Pearson from "../../components/Pearson/Pearson";
import {Link} from "react-router-dom";


function ListPage() {

  const [people, setPeople] = useState([]);

  // в какой папке на сервер все храниться
  const dataCatalogServer = "test"

  const fetchPeople = async() => {
    // получим список участник из ФБ
    const list = []

    const blogRef = collection(db, dataCatalogServer)
    const docSnapshot = await getDocs(blogRef);

    docSnapshot.docs.forEach(doc => {
      list.push({id: doc.id, ...doc.data()});
    });
    list.sort((a, b) => String(a.timestamp) > String(b.timestamp))
    setPeople(list);
  };


  useEffect(() => {
    fetchPeople()
  }, []);

  return (
    <>
      <section className="list-team pt-3 pb-3">
        <Container>
          <h1 className="team-name__header text-center pb-5 pt-5">Участники команды</h1>
        </Container>
      </section>

      <section className="list-description pt-3 pb-3">
        <Container>

          <h2 className="description__header text-center mb-3">О нас</h2>
          <div className="description__body">
            <div className="description__text">
              <p>
                                На нашем туристическом слете участвуют люди со всей страны, которые любят природу и
                                активный
                                отдых. Каждый участник нашей команды имеет богатый опыт в походах, кемпинге и
                                путешествиях, и готов
                                поделиться своими знаниями и опытом с другими участниками. Мы ценим каждого члена нашей
                                команды и убеждены, что каждый участник приносит свой вклад в общее дело и создает
                                неповторимую атмосферу объединения.
              </p>
              <p>
                                На странице "Участники нашей команды на туристический слет" вы можете познакомиться с
                                каждым
                                членом нашей команды, узнать об их опыте и достижениях в области туризма, а также
                                посмотреть
                                фотографии с наших предыдущих походов и путешествий.
              </p>
              <p>
                                Если вы также любите путешествовать, открыть для себя новые места и наслаждаться
                                красотами
                                природы, мы будем рады приветствовать вас в нашей команде на следующем туристическом
                                слете!
              </p>
            </div>
          </div>

        </Container>
      </section>


      <section className="list-people pt-3 pb-3">
        <Container>
          <h2 className="people__header text-center mb-3">Наши участники</h2>

          <div className="people__body">
            <Container fluid>
              <Row className="gy-3 gx-3">
                {
                  people.length ?
                    people.map(el => (
                      <Col xs={12} md={4}>
                        <Link style={{textDecoration: "none", color: "inherit"}}
                          to={`/detail/${el.id}`}>
                          <Pearson data={el}/>
                        </Link>
                      </Col>
                    )) :
                    <div>Ничего не нашлось</div>
                }
              </Row>
            </Container>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ListPage;
