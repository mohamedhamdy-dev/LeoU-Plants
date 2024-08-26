import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./features/nav/NavBar";
import Contact from "./features/contact/Contact.js";
import Gallery from "./features/galary/Gallery.js";
import Home from "./features/home/Home.js";
import Store from "./features/store/Store.js";
import Login from "./features/login/Login.js";
import PageNotFound from "./ui/PageNotFound";
import CartProvider from "./context/cartContext.js";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App container  ">
        <NavBar />
        <CartProvider>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="LeoU-Plants" element={<Home />}></Route>
            <Route path="Business-Management" element={<Home />}></Route>
            <Route path="Contact" element={<Contact />}></Route>
            <Route path="Gallery" element={<Gallery />}></Route>
            <Route path="Store" element={<Store />}></Route>
            <Route path="Login" element={<Login />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </CartProvider>
      </div>
    </BrowserRouter>
  );
}
