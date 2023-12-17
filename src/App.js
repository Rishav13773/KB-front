import React, { useEffect } from "react";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import { Route, Routes, useNavigate, redirect } from "react-router-dom";
import Profile from "./pages/profile";
import Project from "./pages/project";
import { useSelector } from "react-redux";

const App = () => {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {user && (
          <>
            <Route path="/home" element={<Home />} />
          </>
        )}

        {user && (
          <>
            <Route path="/profile" element={<Profile />} />
          </>
        )}

        {user && (
          <>
            <Route path="/projects/:id" element={<Project />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
