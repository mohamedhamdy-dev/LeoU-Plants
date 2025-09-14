import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import "./Search.css";

export default function Search({ onSearch, data }) {
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
    <div className="tools-search">
      <GoSearch className="tools-search-icon" />
      <input
        type="text"
        className="tools-search-field"
        placeholder="Search"
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
      />
    </div>
  );
}
