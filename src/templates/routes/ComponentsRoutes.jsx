import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../components/login/Login";
import Products from "../../components/listProducts/Products";
import Categories from "../../components/categories/Categories";

export default function CompoentnsRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}
