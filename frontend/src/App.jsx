import './App.sass';
import MainPage from "./pages/MainPage/MainPage";
import {Route, Routes} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Login from "./pages/Login/Login";

import React, {useContext} from 'react';
import {AuthContext} from "./context/AuthContext";
import NotFoundPage from "./pages/NotFoundPage";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigateError from "./components/NavigateError";
import Register from "./pages/Register/Register";

import 'bootstrap/dist/css/bootstrap.min.css';
import {isUserAdmin} from "./utils/utils";
import {auth} from "./configs/firebase";
import CreateResumePage from "./pages/CreateResumePage/CreateResumePage";
import CreateWorkPage from "./pages/CreateWorkPage/CreateWorkPage";
import ListWorksPage from "./pages/ListWorksPage/ListWorksPage";


/*
Register
Login
RoomBoss


Registration
Login
ListWorks
Work
ListResumes
Resume
CheafProfile
WorkerProfile

1. Вход/ Регистрация
2. личный кабинет эчара (название отдела куда набирает, имя, должность...)
3. Создание заявки (кто создадет?, работник компании да?)
4. список заявок (список заявок общий - кто видит? нужно ли?)
5. Сатус заявки - календарь, почта, чат, список откликов
6. База кандидатов с фильтрами
7. Карточка одного кандидата
8. Статистика

 */

function App() {

  // получим текущего юзера
  const {currentUser} = useContext(AuthContext);

  return (
    <div className="App">
      <Header/>
      <Content>
        <ToastContainer position="top-center"/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/create/resume" element={<CreateResumePage/>}/>
          <Route path="/create/work" element={<CreateWorkPage/>}/>
          <Route path="/list/works" element={<ListWorksPage/>}/>



            {/*<Route path="/list" element={<ListPage/>}/>*/}
          {/*<Route path="/detail/:id" element={<DetailPage/>}/>*/}

          {/*<Route path='/edit' element={*/}
          {/*  isUserAdmin(auth?.currentUser?.uid) ? <EditPage /> : <NavigateError massage="Страница доступна только админу!" to="/" />*/}
          {/*}*/}
          {/*/>*/}

          {/*<Route path='/private' element={*/}
          {/*  currentUser ? <PrivatePage /> : <NavigateError massage="Страница доступна только вошедшим пользователям" to="/login" />*/}
          {/*}*/}
          {/*/>*/}

          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>


          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Content>
      <Footer/>
    </div>

  )
}

export default App;
