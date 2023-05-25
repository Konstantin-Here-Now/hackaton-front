import React from 'react';
import { Navigate} from 'react-router-dom';
import {toast} from "react-toastify";

const NavigateError = ({ massage, to }) => {

  toast.info(massage);

  return <Navigate to={to} />

};

export default NavigateError;
