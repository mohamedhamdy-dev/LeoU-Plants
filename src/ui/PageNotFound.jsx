import "./PageNotFound.css";

export default function PageNotFound() {
  return (
    <div className="not-found">
      <div>
        <img src="/not-found.png" alt="" className="not-found__img" />
      </div>
      <p className="not-found__message">404 - Page Not Found</p>
    </div>
  );
}
