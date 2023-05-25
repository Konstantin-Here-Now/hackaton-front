import './App.sass';
import MainPage from "./pages/MainPage/MainPage";
import {Route, Routes} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import PrivatePage from "./pages/PrivatePage/PrivatePage";
import Login from "./pages/Login/Login";

import React, {useContext} from 'react';
import {AuthContext} from "./context/AuthContext";
import NotFoundPage from "./pages/NotFoundPage";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigateError from "./components/NavigateError";
import ListPage from "./pages/ListPage/ListPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import EditPage from "./pages/EditPage/EditPage";
import Register from "./pages/Register/Register";

import 'bootstrap/dist/css/bootstrap.min.css';
import {isUserAdmin} from "./utils/utils";
import {auth} from "./configs/firebase";

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
          <Route path="/list" element={<ListPage/>}/>
          <Route path="/detail/:id" element={<DetailPage/>}/>

          <Route path='/edit' element={
            isUserAdmin(auth?.currentUser?.uid) ? <EditPage /> : <NavigateError massage="Страница доступна только админу!" to="/" />
          }
          />

          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

          <Route path='/private' element={
            currentUser ? <PrivatePage /> : <NavigateError massage="Страница доступна только вошедшим пользователям" to="/login" />
          }
          />

          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Content>
      <Footer/>
    </div>

  )
}

export default App;
