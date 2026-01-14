import React from "react";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginForget from "./Components/LoginForget";
import LoginCreate from "./Components/LoginCreate";
import E404 from "./Components/E404";

const App = () => {
  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create" element={<LoginCreate />} />
          <Route path="/forget" element={<LoginForget />} />
          <Route path="*" element={<E404 />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
