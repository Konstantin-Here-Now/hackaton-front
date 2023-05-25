import React, {useEffect} from "react";
import './people_page.sass';

import {
  Card,
  ListGroup
} from 'react-bootstrap';

function Pearson({data}) {

  useEffect(() => {

  }, []);

  return (
    <Card className="people__item pearson p-2 h-100">
      <Card.Img className="pearson__photo"
        variant="top" src={data.photo ? data.photo : "https://placehold.jp/800x800.png"}/>
      <Card.Body>
        <Card.Title>{`${data.firstName} ${data.secondName}`}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
                        Должность: {data.level}
          </ListGroup.Item>
          <ListGroup.Item>
                        Год участия: {data.year}
          </ListGroup.Item>
        </ListGroup>

        <Card.Text>
          {data.description.slice(0, 100)} ...
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Pearson;
