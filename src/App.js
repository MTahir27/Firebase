import React from "react";
import "./App.css";
import { ForgetPassword } from "./Authentication/forgetPassword";
import { Login } from "./Authentication/login";
import { Register } from "./Authentication/register";

function App() {
  return (
    <div>
      {/* <Register /> */}
      {/* <Login /> */}
      <ForgetPassword />
    </div>
  );
}

export default App;
