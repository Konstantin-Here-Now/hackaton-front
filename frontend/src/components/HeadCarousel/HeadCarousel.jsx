import React, {useState} from 'react';
import {
  Carousel
} from 'react-bootstrap';

import ph1 from "./img/9_camping.png"
import ph2 from "./img/10_camping.png"
import ph3 from "./img/3_camping.png"

const HeadCarousel = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };


  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item style={{maxHeight: "600px"}}>
        <img
          className="d-block w-100"
          src={ph1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text-center">Команда Банда им Н.Э. Баумана</h3>
          <p>Слет ССМ</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{maxHeight: "600px"}}>
        <img
          className="d-block w-100"
          src={ph2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="text-center">Команда Банда им Н.Э. Баумана</h3>
          <p>Слет ССМ</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{maxHeight: "600px"}}>
        <img
          className="d-block w-100"
          src={ph3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="text-center">Команда Банда им Н.Э. Баумана</h3>
          <p>Слет ССМ</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeadCarousel;
