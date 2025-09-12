import "./PageNotFound.css";

export default function PageNotFound() {
  return (
    <div className="page-not-found">
      <div>
        <img src="/not-found.png" alt="" className="not-found-img" />
      </div>
      <p className="not-found-message">404 - Page Not Found</p>
    </div>
  );
}
