import React from "react";
import Home from "./assets/home/Home";
import Courses from "./assets/course/Courses";

import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./component/Signup";
// import Login from "./component/Login";
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/Authprovider";

function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(useAuth);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={authUser?<Courses />: <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup/>} />
        {/* <Route path="/login" element={<Login/>} /> */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
