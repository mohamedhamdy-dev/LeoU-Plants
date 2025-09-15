import { Outlet } from "react-router-dom";
import "./Store.css";
import ToolsBar from "./ToolsBar";

export default function StoreLayout() {
  return (
    <>
      <ToolsBar />
      <Outlet />
    </>
  );
}
