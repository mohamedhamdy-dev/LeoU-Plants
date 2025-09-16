import "./ToolsBar.css";
import { IoCartOutline, IoStorefrontOutline } from "react-icons/io5";
import Search from "./Search";
import Sort from "./Sort";
import { Link, useLocation } from "react-router-dom";

export default function ToolsBar() {
  const { pathname } = useLocation();
  const inStore = pathname === "/store/products" || pathname === "/store";

  return (
    <div className="tools">
      <Search />
      <Sort />
      {inStore ? (
        <Link to="./cart" className="tools__link">
          <IoCartOutline className="tools__icon" />
        </Link>
      ) : (
        <Link to="./products" className="tools__link">
          <IoStorefrontOutline className="tools__icon" />
        </Link>
      )}
    </div>
  );
}
