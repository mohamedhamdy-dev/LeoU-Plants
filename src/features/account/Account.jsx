import "./Account.css";
import { Outlet } from "react-router-dom";

export default function Account() {
  return (
    <div className="account-page">
      <Outlet />
    </div>
  );
}
