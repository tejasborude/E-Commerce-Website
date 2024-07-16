import React from "react";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Cart from "./Component/Cart";
import Products from "./Component/Products";
import Product from "./Component/Product";
import Navbar from './Component/Navbar'
import Login from "./Component/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./Component/Register";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/products/:id" element={<Product/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
}
