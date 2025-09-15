import "./ToolsBar.css";
import { IoCartOutline, IoStorefrontOutline } from "react-icons/io5";
import Search from "./Search";
import Sort from "./Sort";
import { Link, useLocation } from "react-router-dom";

export default function ToolsBar() {
  const location = useLocation();
  const inStore = location.pathname === "/store/products";

  return (
    <div className="tools">
      <Search />
      <Sort />
      {inStore ? (
        <Link to="./cart" className="tools-link">
          <IoCartOutline className="tools-link-icon" />
        </Link>
      ) : (
        <Link to="./products" className="tools-link">
          <IoStorefrontOutline className="tools-link-icon" />
        </Link>
      )}
    </div>
  );
}
