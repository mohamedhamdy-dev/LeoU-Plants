import { React } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-content">
      <div className="home-text">
        <h2 className="home-title">Blossom & Bloom</h2>
        <p className="home-message">
          Welcome new employees, reward your team, or thank clients with
          fully-grown potted plants shipped straight from our greenhouse.
        </p>
        <Link to="/Login" className="home-btn">
          Get Started
        </Link>
      </div>
      <div className="home-image-box">
        <img className="home-img" src="/home/home-bg.png" alt="Plant Care" />
      </div>
    </div>
  );
}
