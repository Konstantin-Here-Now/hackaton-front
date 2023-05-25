import React, { useState, useEffect } from 'react';
import {
  Form,
  Button
} from 'react-bootstrap';
import {addDoc, collection, serverTimestamp} from "firebase/firestore";

import { db} from '../configs/firebase';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const initialState = {
  email: "",
  name: "",
  text: ""
};

function ContactUs({userEmail}) {

  console.log(userEmail)

  const [form, setForm] = useState(initialState);
  const {email, name, text} = form;

  console.log(form)

  useEffect(() => {
    setForm({...form, email:userEmail})
  }, [userEmail])

  const messagesCatalogServer = "messages"

  const navigate = useNavigate();

  const handleSubmit = async e => {

    e.preventDefault();

    if (email && name && text) {
      console.log(form)
      try
      {
        await addDoc(collection(db, messagesCatalogServer), {
          ...form,
          timestamp: serverTimestamp()
        });
        toast.success("Форма отправлена!");
      }
      catch (err)
      {
        console.log(err);
        toast.error("Возможно вы не заполнили все поля!");
      }
    }

    navigate("/");
  };


  // дли обычных полей
  const handleInputChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Form className="border border-success rounded rounded-3 px-5 py-5">

      <h1 className="text-center py-3">Связаться с нами</h1>

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Почта</Form.Label>
        <Form.Control
          type="email"
          placeholder="example@mail.ru"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Имя</Form.Label>
        <Form.Control
          type="Имя"
          placeholder="Дима"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </Form.Group>


      <Form.Group className="mb-3"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Сообщение</Form.Label>
        <Form.Control as="textarea"
          rows={3}
          placeholder="Сообщение"
          value={text}
          name="text"
          onChange={handleInputChange}
        />
      </Form.Group>


      <div className="d-grid gap-2">
        <Button
          variant="primary"
          type="submit"
          className="mb-2"
          onClick={handleSubmit}
        >
                        Отправить
        </Button>
      </div>
    </Form>
  );
}

export default ContactUs;
