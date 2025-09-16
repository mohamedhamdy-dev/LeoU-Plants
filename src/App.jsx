import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./features/contact/Contact";
import Gallery from "./features/gallery/Gallery";
import Home from "./features/home/Home";
import Store from "./features/store/Store";
import Account from "./features/account/Account";
import PageNotFound from "./ui/PageNotFound";
import SignIn from "./features/account/SignIn";
import { SignUp } from "./features/account/SignUp";
import { Cart } from "./features/cart/Cart";
import StoreLayout from "./features/store/StoreLayout";
import CartProvider from "./context/cartContext";
import StoreProvider from "./context/storeContext";
import Header from "./features/header/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <CartProvider>
          <StoreProvider>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="store" element={<StoreLayout />}>
                <Route index element={<Store />} />
                <Route path="products" element={<Store />} />
                <Route path="cart" element={<Cart />} />
              </Route>

              <Route path="account" element={<Account />}>
                <Route index element={<SignIn />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SignUp />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </StoreProvider>
        </CartProvider>
      </div>
    </BrowserRouter>
  );
}
