import React, { useEffect } from "react";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Profile from "./pages/profile";
import Project from "./pages/project";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;
