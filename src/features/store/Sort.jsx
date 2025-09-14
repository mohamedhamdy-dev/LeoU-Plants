import "./Sort.css";

export default function Sort({ onSort }) {
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
