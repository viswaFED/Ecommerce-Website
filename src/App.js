import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/NavBar/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Index";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Store from "./Pages/Store";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Cart/CartProvider";
import Footer from "./Pages/Footer";

function App() {
  const [cart, setCart] = useState(false);

  const hideCartHandler = () => {
    setCart(false);
  };
  const showCartHandler = () => {
    setCart(true);
  };

  return (
    <CartProvider>
      <Router>
        <Navbar Cart={showCartHandler} />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/Store" element={<Store />} />
        </Routes>
      </Router>
      {cart && <Cart onClick={hideCartHandler} />}
      <div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
