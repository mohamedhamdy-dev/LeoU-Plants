import { useState } from "react";
import Button from "../../ui/Button";
import { NavLink } from "react-router-dom";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(form);

    setForm({ email: "", password: "" });
  }

  return (
    <>
      <div className="account-text">
        <h2 className="account-heading">☘️ Welcome Back 🥳</h2>
        <p className="account-message">
          🏵️ Thank you for choosing LeoU's as your botanical destination once
          again. Your return marks the growth of our shared plant-loving
          community, and we can't wait to embark on this green adventure with
          you.
        </p>
      </div>
      <div className="sign-in-form-box">
        <form className="common-form login-form" onSubmit={handleSubmit}>
          <div>
            <img
              src="/account/login-icon.png"
              alt="user icon"
              className="common-form-img"
            />
          </div>
          <p className="common-form-title sign-in-title">sign in</p>
          <input
            type="email"
            name="email"
            className="input-field"
            placeholder="User Name"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className="input-field"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <Button onClick={handleSubmit}>Log In</Button>
          <div className="form-footer">
            <NavLink className="form-link" to="/contact">
              Contact Us
            </NavLink>
            <NavLink className="form-link" to="/account/sign-up">
              Sign Up
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}
