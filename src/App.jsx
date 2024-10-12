import React from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import { Care } from "./components/Care";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Favorites></Favorites>
      <Care></Care>
      <Products></Products>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
