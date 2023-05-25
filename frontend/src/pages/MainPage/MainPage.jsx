import React from 'react';
import './main_page.sass';
import HeadCarousel from "../../components/HeadCarousel/HeadCarousel";
import {NavLink} from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';

import {SocialIcon} from 'react-social-icons';

import {BsFillBusFrontFill} from "react-icons/bs";

import ph1 from "./img/7_camping.png"
import ph2 from "./img/1_camping.jpg"
import ph3 from "./img/2_camping.jpg"
import ph4 from "./img/8_camping.jpg"


function MainPage() {
  return (
    <>
      <section className="main-team pt-3 pb-3">
        <Container>
          <h1 className="main-team__header text-center pb-5 pt-5">Команда Банда им Н.Э. Баумана</h1>
        </Container>
      </section>

      <HeadCarousel/>

      <section className="main-hello pt-3 pb-3">
        <Container>
          <h2 className="text-center mb-3">Привет друг!</h2>
          <p>
                        Привет, мы команда Банда им. Н.Э. Баумана и хотели бы приветствовать всех участников
                        туристического слета! Мы рады быть здесь с вами и готовы принять участие во всех мероприятиях,
                        которые запланированы в этом увлекательном туре. Давайте поработаем вместе, чтобы сделать этот
                        слет незабываемым для всех!
          </p>
        </Container>
      </section>

      <section className="main-team-photo pt-3 pb-3">
        <Container>
          <h2 className="main-team-photo__header text-center mb-3">Слет студенческой молодежи</h2>

          <div className="main-team-photo__body">
            <Row>
              <Col xs={4} className="main-team-photo__item">
                <Image rounded className="team-logo" src={ph2} alt=""/>
              </Col>
              <Col xs={4} className="main-team-photo__item">
                <Image rounded className="team-logo" src={ph3} alt=""/>
              </Col>
              <Col xs={4} className="main-team-photo__item">
                <Image rounded className="team-logo" src={ph4} alt=""/>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="main-about-us pt-3 pb-3">
        <Container>
          <Row>
            <h2 className="main-about-us__header text-center mb-3">О нас</h2>
            <Col xs={12} md={8} className="about-us__body">

              <div className="main-about-us__text">
                <p>
                                    Наша команда готовится к участию в спортивном слете с палатками. Мы состоим из 10
                                    человек, включая тренера. В нашей команде есть опытные лагерные инструкторы, которые
                                    будут отвечать за нашу безопасность и обеспечение комфортных условий проживания в
                                    палатках.
                </p>
                <p>
                                    Мы не только участвуем в различных спортивных мероприятиях, таких как
                                    ориентирование,
                                    скандинавская ходьба и тугорун, но и выполняем различные командные задания, что
                                    помогает
                                    нам развивать навыки командной работы и укреплять дух коллектива.
                </p>
                <p>
                                    В нашу команду входят люди разных возрастов и уровней физической подготовки, но мы
                                    уверены, что благодаря сильному духу коллектива и нашему стремлению достичь общей
                                    цели,
                                    мы сможем показать отличные результаты.
                </p>
                <p>
                                    Мы тщательно готовимся к слету, перебираем и выбираем оборудование и инвентарь,
                                    необходимый нам для палаточной жизни и спортивных мероприятий. Мы собираемся
                                    приехать на
                                    место заранее, чтобы иметь достаточно времени на расстановку палаток, готовку пищи и
                                    настройку на спортивную атмосферу.
                </p>
                <p>
                                    Мы уверены, что наша команда сможет стать лучшей не только в спортивном плане, но и
                                    в
                                    организационном. Мы готовы взять на себя ответственность за нашу команду и стремимся
                                    к
                                    победе!
                </p>
              </div>
            </Col>
            <Col xs={12} md={4} className="main-about-us__photo">
              <Image rounded className="team-logo" src={ph1} alt=""/>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="main-people pt-3 pb-3">
        <Container>
          <Row>
            <h2 className="main-people__header text-center mb-3">Наши участники</h2>
            <Col xs={12} className="main-people__body">
              <div className="main-people__text">
                <p>
                                    В нашей команде на туристический слет участвуют несколько человек, которые являются
                                    настоящими любителями активного отдыха и приключений на природе.
                </p>
                <p>
                                    Первым участником нашей команды является Алексей, который уже имеет большой опыт
                                    походов и знает как правильно готовиться к таким поездкам. Он отвечает за выбор и
                                    подготовку общего снаряжения, а также за планирование маршрута.
                </p>
                <p>
                                    Вторым членом нашей команды является Екатерина, которая ответственна за организацию
                                    провизии. Она знает, как правильно выбирать и транспортировать продукты, чтобы они
                                    сохраняли свежесть и полезные свойства в течение всей поездки.
                </p>
                <p>
                                    Третьим участником нашей команды является Денис, который занимается подготовкой и
                                    обслуживанием оборудования для приготовления пищи и размещения. Он также отвечает за
                                    построение костров и обеспечение безопасности на месте стоянки.
                </p>
                <p>
                                    Четвертым участником нашей команды является Мария, которая является врачом и
                                    отвечает за здоровье участников похода. Она проводит медицинские осмотры, готовит
                                    необходимые лекарства и знает, как действовать в критических ситуациях.
                </p>
                <p>
                                    Вместе мы образуем команду, которая готова к любым трудностям и испытаниям, которые
                                    могут возникнуть во время похода. Мы доверяем друг другу и знаем, что каждый член
                                    команды сделает все возможное для того, чтобы поход прошел успешно и был
                                    запоминающимся.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="main-contacts pt-3 pb-3">
        <Container>
          <Row>
            <h2 className="main-contacts__header text-center mb-3">Контакты</h2>
            <div className="main-contacts__boss d-flex">
              <div className="fw-bold me-2"><BsFillBusFrontFill/> Капитан:</div>
              <NavLink to='https://vk.com/ilyatsimerman' target='_blank' className='nav-link d-inline'>
                                Илья Цимерман
              </NavLink>
            </div>

            <div className="d-flex justify-content-center">
              <SocialIcon className="me-2" url="https://t.me/%20m-wb5PxPoPthZDVi" network="telegram"/>
              <SocialIcon url="https://vk.com/bmstu_banda" network="vk"/>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default MainPage;
