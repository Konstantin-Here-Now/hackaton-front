import './App.sass';
import {Route, Routes} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

import React, {useContext} from 'react';
import {AuthContext} from "./context/AuthContext";
import NotFoundPage from "./pages/NotFoundPage";
import {ToastContainer} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Platform - use
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";

// JOB - use
import DetailCheafProfilePage from "./pages/DetailCheafProfilePage/DetailCheafProfilePage";
import CreateJobPage from "./pages/CreateJobPage/CreateJobPage";
import ListResumesPage from "./pages/ListResumesPage/ListResumesPage";

// WORKER - user
import CreateWorkerResumePage from "./pages/CreateWorkerResumePage/CreateWorkerResumePage";
import ListJobPage from "./pages/ListJobPage/ListJobPage";
import DetailJobPage from "./pages/DetailJobPage/DetailJobPage";

import TestPage from "./pages/TestPage";
import NavigateError from "./components/NavigateError";

function App() {

    // получим текущего юзера
    const {currentUser} = useContext(AuthContext);

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
                    <Route path="/test" element={<TestPage/>}/>

                    {/* JOB */}
                    {/* TODO page */}
                    <Route path="/job/create/profile" element={<CreateJobPage/>}/>
                    <Route path="/job/create/job" element={<CreateJobPage/>}/>
                    {/* TODO page */}
                    <Route path="/job/profile" element={<DetailJobPage/>}/>
                    <Route path="/job/detail" element={<DetailJobPage/>}/>
                    <Route path="/job/list" element={<ListJobPage/>}/>

                    {/* WORKER */}
                    {/* TODO page */}
                    <Route path="/worker/create/profile" element={<CreateWorkerResumePage/>}/>
                    <Route path="/worker/create/resume" element={<CreateWorkerResumePage/>}/>
                    {/* TODO page */}
                    <Route path="/worker/detail" element={<DetailCheafProfilePage/>}/>
                    <Route path="/worker/profile" element={<DetailCheafProfilePage/>}/>
                    <Route path="/worker/list" element={<ListResumesPage/>}/>

                    {/* ERRORS */}
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </Content>
            <Footer/>
        </div>

    )
}

export default App;
