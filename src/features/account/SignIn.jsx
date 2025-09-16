import { useState } from "react";
import Button from "../../ui/Button";
import { NavLink } from "react-router-dom";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.type]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(form);

    setForm({ email: "", password: "" });
  }

  return (
    <div className="account account--sign-in">
      <div className="account__text">
        <h2 className="account__title">☘️ Welcome Back 🥳</h2>
        <p className="account__message">
          🏵️ Thanks for choosing LeoU’s again! We’re glad to grow our
          plant-loving community with you and can’t wait for this green journey
          together
        </p>
      </div>

      <form className="account__form" onSubmit={handleSubmit}>
        <div>
          <img
            src="/account/login-icon.png"
            alt="user icon"
            className="account__img"
          />
        </div>
        <p className="account__form-title">sign in</p>
        <input
          type="email"
          className="account__field account__email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          className="account__field account__password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <Button onClick={handleSubmit}>Sign In</Button>
        <div>
          <span className="account__footer-text">Don't have an account?</span>
          <NavLink className="account__link" to="/account/sign-up">
            Sign Up
          </NavLink>
        </div>
      </form>
    </div>
  );
}
