import { React } from "react";
import "./Button.css";

export default function Button({ onClick, children }) {
  return (
    <button className="app__btn" onClick={onClick}>
      {children}
    </button>
  );
}
