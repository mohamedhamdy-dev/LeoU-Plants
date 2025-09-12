import { React, useState } from "react";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

export function CreateAccount({ onSwitch }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);

    setForm({ name: "", email: "", password: "" });
  }

  return (
    <div className="create-form-box">
      <form className="common-form create-form" onSubmit={handleSubmit}>
        <div className="create-form-logo">
          <img
            src="/account/register-icon.png"
            alt="user icon"
            className="common-form-img create-form-img"
          />
        </div>
        <p className="common-form-title create-form-title">Create Account</p>
        <input
          type="text"
          name="name"
          placeholder="User Name"
          className="input-field"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-field"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-field"
          value={form.password}
          onChange={handleChange}
          required
        />

        <Button onClick={handleSubmit}>Sign Up</Button>
        <div className="form-footer">
          <Link className="form-footer-link" to="/Contact">
            Contact Us
          </Link>
          <button className="login-create-btn" onClick={onSwitch}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
