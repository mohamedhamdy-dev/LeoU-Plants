import { useState } from "react";
import Button from "../../ui/Button";
import { NavLink } from "react-router-dom";

export function SignUp() {
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);

    setForm({ fullName: "", email: "", password: "" });
  }

  return (
    <div className="account account--sign-up">
      <div className="account__text">
        <h2 className="account__title">🌿 Dear Plant Enthusiast 😊</h2>
        <p className="account__message">
          Welcome to LeoU’s — where every leaf tells a story. We’re excited to
          have you join our plant-loving community and grow your own green
          haven! 🌿✨
        </p>
      </div>

      <form className="account__form" onSubmit={handleSubmit}>
        <div>
          <img
            src="/account/register-icon.png"
            alt="user icon"
            className="account__img"
            style={{
              boxShadow: "-0.5rem 0.4rem 0.7rem #969897",
              borderRadius: "50%",
            }}
          />
        </div>
        <p className="account__form-title ">sign up</p>
        <input
          type="name"
          name="fullName"
          placeholder="Full Name"
          className="account__field account__name"
          value={form.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="account__field account__email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="account__field account__password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <Button onClick={handleSubmit}>Sign Up</Button>

        <div>
          <span className="account__footer-text">Don't have an account?</span>
          <NavLink className="account__link" to="/account/sign-in">
            Sign In
          </NavLink>
        </div>
      </form>
    </div>
  );
}
