import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { ForgetPassword } from "./Authentication/forgetPassword";
import { Login } from "./Authentication/login";
import { Register } from "./Authentication/register";
import { Home } from "./Pages/Home";
import { Error_404 } from "./Pages/Error_404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="*" element={<Error_404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
