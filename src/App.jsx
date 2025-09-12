import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./features/nav/NavBar";
import Contact from "./features/contact/Contact";
import Gallery from "./features/gallery/Gallery";
import Home from "./features/home/Home";
import Store from "./features/store/Store";
import Account from "./features/account/Account";
import PageNotFound from "./ui/PageNotFound";
import CartProvider from "./context/cartContext";
import SignIn from "./features/account/SignIn";
import { SignUp } from "./features/account/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <CartProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="store" element={<Store />} />
            <Route path="account" element={<Account />}>
              <Route index element={<SignIn />} />
              <Route path="sign-in" element={<SignIn />} />
              <Route path="sign-up" element={<SignUp />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CartProvider>
      </div>
    </BrowserRouter>
  );
}
