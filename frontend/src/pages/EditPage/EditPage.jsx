import React, { useState, useEffect } from "react";
import {  db, storage } from '../../configs/firebase';
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import {
  addDoc,
  collection,
  serverTimestamp
} from "firebase/firestore";

import { toast } from "react-toastify";

import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';


const initialState = {
  firstName: "",
  secondName: "",
  year: "",
  description: "",
  comments: [],
  likes: []
};


const categoryOption = [
  "Капитан",
  "Участник"
];

const EditPage = ({ user, setActive }) => {

  // хранит данные формы
  const [form, setForm] = useState(initialState);

  // проверяет прогресс загрузки файла
  const [progress, setProgress] = useState(null);

  // сам путь до файла
  const [file, setFile] = useState(null);

  // в какой папке на сервер все храниться
  const dataCatalogServer = "test"
  const fileCatalogServer = "test"

  const navigate = useNavigate();

  // распакуем стейт для удобства
  const { firstName, secondName, year, description } = form;

  useEffect(() => {


    const uploadFile = () => {
      const storageRef = ref(storage, `${fileCatalogServer}/${file.name}`);
      // грузит файл на сервер firebase func
      const uploadTask = uploadBytesResumable(storageRef, file);

      // отслеживание статуса загрузки
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log(`Upload is ${  progress  }% done`);
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        error => {
          console.log(error);
        },
        () => {
          // это стандартная функция - тут идет как колбек
          getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl => {
            toast.info("Фотография загружена успешно!");
            setForm(prev => ({ ...prev, photo: downloadUrl }));
          });
        }
      );
    };

    // если файла етсть то грузи его
    file && uploadFile();
  }, [file]);


  // дли обычных полей
  const handleInputChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // для котегории
  const onCategoryChange = e => {
    setForm({ ...form, level: e.target.value });
  };

  // отправка формы
  const handleSubmit = async e => {

    e.preventDefault();

    if (firstName && secondName) {
      console.log(form)
      try
      {
        await addDoc(collection(db, dataCatalogServer), {
          ...form,
          timestamp: serverTimestamp()
        });
        toast.success("Участник добавлен успешно!");
      }
      catch (err)
      {
        console.log(err);
        toast.error("Возмозжно вы не заполнили все поля!");
      }
    }

    navigate("/list");
  };

  return (
    <>
      <section className="edit py-2">
        <div className="container-fluid mb-4">
          <Container>
            <Row className="h-100 justify-content-center align-items-center">
              <Col sm={12} md={10} lg={10} xl={8} xxl={8}>
                {/*border border-success  rounded rounded-5*/}

                <Form className="border border-success rounded rounded-3 px-5 py-5" onSubmit={handleSubmit}>

                  <h1 className="text-center py-3">Добавить нового участника</h1>

                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control input-text-box"
                      placeholder="Дима"
                      name="firstName"
                      value={firstName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control input-text-box"
                      placeholder="Борисов"
                      name="secondName"
                      value={secondName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>


                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Год</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control input-text-box"
                      placeholder="2023"
                      name="year"
                      value={year}
                      onChange={handleInputChange}
                    />
                  </Form.Group>



                  <Form.Select aria-label="Default select example"
                    onChange={onCategoryChange}
                    className="form-select"
                  >
                    <option>Выберите категорию участника </option>
                    {categoryOption.map((option, index) => (
                      <option value={option || ""} key={index}>
                        {option}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Group className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Описание</Form.Label>
                    <Form.Control as="textarea"
                      rows={3}
                      placeholder="Короткое описание участника"
                      value={description}
                      name="description"
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Фотография участника</Form.Label>
                    <Form.Control type="file"
                      onChange={e => setFile(e.target.files[0])}
                    />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={progress !== null && progress < 100}
                    >
                        Отправить
                    </Button>
                  </div>
                </Form>

              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default EditPage;
