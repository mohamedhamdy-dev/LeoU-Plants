import { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [icon, setIcon] = useState(false);

  function handleIcon() {
    icon === true ? setIcon(false) : setIcon(true);
  }

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="logo" className="logo-image" />
        <div className="logo-text">LeoU's</div>
      </div>
      <nav className="nav">
        <div className="nav-list-icon" onClick={handleIcon}>
          <svg
            className="nav-list-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </div>
        <ul className={`nav-list ${icon === true ? "show-nav-list" : ""}`}>
          <li className="nav-list-item" onClick={handleIcon}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-list-item" onClick={handleIcon}>
            <NavLink to="gallery">Gallery</NavLink>
          </li>
          <li className="nav-list-item" onClick={handleIcon}>
            <NavLink to="store">Store</NavLink>
          </li>
          <li className="nav-list-item" onClick={handleIcon}>
            <NavLink to="contact">Contact</NavLink>
          </li>
          <li className="nav-list-item" onClick={handleIcon}>
            <NavLink to="account">Account</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
