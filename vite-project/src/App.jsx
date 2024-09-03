import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Pages from "./Pages/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages.Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
