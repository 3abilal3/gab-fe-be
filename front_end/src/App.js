import React from "react";
import Home from "./container/Home";

import Login from "./Form/Login";
import Register from "./Form/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>

      <BrowserRouter>


        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
