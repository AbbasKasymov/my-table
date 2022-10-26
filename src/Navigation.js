import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItem from "./components/AddItem";
import MainPage from "./components/MainPage";
import Table from "./components/Table";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
