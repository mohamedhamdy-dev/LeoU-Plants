import "./Header.css";
import { IoIosList } from "react-icons/io";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { AnimatePresence } from "motion/react";

export default function Header() {
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
      <div className="header__logo">
        <img src="/logo.png" alt="logo" className="header__logo-img" />
        <div>LeoU's</div>
      </div>
      <nav>
        <div className="header__icon-box">
          {isMobileNavOpen ? (
            <IoCloseOutline
              className="header__icon"
              onClick={() => setIsMobileNavOpen(false)}
            />
          ) : (
            <IoIosList
              className="header__icon"
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
