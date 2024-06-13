import React from "react";
import Home from "./assets/home/Home";
import Courses from "./assets/course/Courses";

import { Route, Routes } from "react-router-dom";
import Signup from "./component/Signup";
// import Login from "./component/Login";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signup" element={<Signup/>} />
        {/* <Route path="/login" element={<Login/>} /> */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
