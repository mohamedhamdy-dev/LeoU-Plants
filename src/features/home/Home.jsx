import { React } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <h2 className="home__title">Blossom & Bloom</h2>
        <p className="home__message">
          Welcome new employees, reward your team, or thank clients with
          fully-grown potted plants shipped straight from our greenhouse.
        </p>
        <Link to="/account/sign-in" className="home__btn">
          Get Started
        </Link>
      </div>
      <img className="home__img" src="/home/home-bg.png" alt="plant care" />
    </div>
  );
}
