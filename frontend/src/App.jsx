import './App.sass';
import {Route, Routes} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

import React, {useContext} from 'react';
import NotFoundPage from "./pages/NotFoundPage";
import {ToastContainer} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import DetailCheafProfilePage from "./pages/DetailCheafProfilePage/DetailCheafProfilePage";
import CreateJobPage from "./pages/CreateJobPage/CreateJobPage";
import ListWorkerPage from "./pages/ListWorkerPage/ListWorkerPage";
import CreateWorkerResumePage from "./pages/CreateWorkerResumePage/CreateWorkerResumePage";
import ListJobPage from "./pages/ListJobPage/ListJobPage";
import DetailJobPage from "./pages/DetailJobPage/DetailJobPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {

    let byDimaBorisvo = ''

    return (
        <div className="App">
            <Header/>
            <Content>
                <ToastContainer position="top-center"/>
                <Routes>
                    {/* OTHER */}
                    <Route path="/" element={<MainPage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/register' element={<RegisterPage/>}/>

                    {/* JOB */}
                    <Route path="/job/create/profile" element={<CreateJobPage/>}/>
                    <Route path="/job/create/job" element={<CreateJobPage/>}/>
                    <Route path="/job/profile" element={<ProfilePage/>}/>
                    <Route path="/job/list" element={<ListJobPage/>}/>
                    <Route path="/job/detail/:id" element={<DetailJobPage/>}/>

                    {/* WORKER */}
                    <Route path="/worker/create/resume" element={<CreateWorkerResumePage/>}/>
                    <Route path="/worker/detail" element={<DetailCheafProfilePage/>}/>
                    <Route path="/worker/profile" element={<ProfilePage/>}/>
                    <Route path="/worker/list" element={<ListWorkerPage/>}/>

                    {/* ERRORS */}
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </Content>
            <Footer/>
        </div>

    )
}

export default App;
