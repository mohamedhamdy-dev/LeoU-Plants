import "./NavBar.css";
import { IoIosList } from "react-icons/io";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { AnimatePresence } from "motion/react";

export default function NavBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.position = "fixed";
      document.body.style.left = "0";
      document.body.style.right = "0";
    } else {
      document.body.style.position = "";
    }
  }, [isMobileNavOpen]);

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="logo" className="logo-image" />
        <div className="logo-text">LeoU's</div>
      </div>
      <nav className="nav">
        <div className="nav-list-icon">
          {isMobileNavOpen ? (
            <IoCloseOutline
              className="nav-list-svg"
              onClick={() => setIsMobileNavOpen(false)}
            />
          ) : (
            <IoIosList
              className="nav-list-svg"
              onClick={() => setIsMobileNavOpen(true)}
            />
          )}
        </div>

        <AnimatePresence>
          {isMobileNavOpen && (
            <MobileNav onNav={() => setIsMobileNavOpen(false)} />
          )}
        </AnimatePresence>
        <DesktopNav />
      </nav>
    </header>
  );
}
