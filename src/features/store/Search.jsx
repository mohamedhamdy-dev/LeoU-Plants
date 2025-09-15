import { useState } from "react";
import { GoSearch } from "react-icons/go";
import "./Search.css";
import { useStore } from "../../context/storeContext";

export default function Search() {
  const [query, setQuery] = useState("");

  const { handleSearch } = useStore();

  return (
    <div className="tools-search">
      <GoSearch className="tools-search-icon" />
      <input
        type="text"
        className="tools-search-field"
        placeholder="Search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
