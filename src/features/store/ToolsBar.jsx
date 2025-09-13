import { useEffect, useState } from "react";
import "./ToolsBar.css";
import { GoSearch } from "react-icons/go";

export function ToolsBar({ children }) {
  return <div className="tools">{children}</div>;
}

export function Search({ onSearch, data }) {
  const [searched, setSearched] = useState("");

  useEffect(
    function () {
      const result = data.filter((el) =>
        el.name.toLowerCase().startsWith(searched.toLowerCase())
      );

      onSearch({ type: "search", payload: result });

      return () => onSearch({ type: "cleanUp" });
    },
    [searched, data, onSearch]
  );

  return (
    <div className="search">
      <GoSearch style={{ width: "2.2rem", height: "2.2rem", fill: "#000" }} />
      <input
        type="text"
        placeholder="Search"
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
      />
    </div>
  );
}

export function Sort({ onSort }) {
  return (
    <div className="sort">
      <label>Sort By</label>
      <select onChange={(e) => onSort({ type: e.target.value })}>
        <option value="name">Name</option>
        <option value="lth">Low to High</option>
        <option value="htl">High to Low</option>
      </select>
    </div>
  );
}
