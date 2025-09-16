import { NavLink } from "react-router-dom";

export default function NavList({ onNav = () => {} }) {
  return (
    <>
      <li className="desktop-nav__item mobile-nav__item" onClick={onNav}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="desktop-nav__item mobile-nav__item" onClick={onNav}>
        <NavLink to="gallery">Gallery</NavLink>
      </li>
      <li className="desktop-nav__item mobile-nav__item" onClick={onNav}>
        <NavLink to="store">Store</NavLink>
      </li>
      <li className="desktop-nav__item mobile-nav__item" onClick={onNav}>
        <NavLink to="contact">Contact</NavLink>
      </li>
      <li className="desktop-nav__item mobile-nav__item" onClick={onNav}>
        <NavLink to="account">Account</NavLink>
      </li>
    </>
  );
}
