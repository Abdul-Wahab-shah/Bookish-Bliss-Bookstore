import React from "react";
import Home from "./assets/home/Home";
import Courses from "./assets/course/Courses";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
      </Routes>
    </div>
  );
}

export default App;
