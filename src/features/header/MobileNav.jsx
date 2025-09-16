import NavList from "./NavList";
import "./MobileNav.css";
import { motion } from "motion/react";

export default function MobileNav({ onNav }) {
  return (
    <motion.ul
      key="mobile"
      initial={{ x: "100vw" }}
      animate={{ x: "0vw", translateX: "-50%" }}
      transition={{ type: "tween" }}
      exit={{ x: "-100vw" }}
      className="mobile-nav"
    >
      <NavList onNav={onNav} />
    </motion.ul>
  );
}
