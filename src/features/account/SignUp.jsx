import { useState } from "react";
import Button from "../../ui/Button";
import { NavLink } from "react-router-dom";

export function SignUp() {
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
    <>
      <div className="account-text">
        <h2 className="account-heading">🌿 Dear Plant Enthusiast 😊</h2>
        <p className="account-message">
          Hello into a world where nature meets nurture, and where every leaf
          tells a story. Welcome to LeoU's, your premier destination for all
          things green and beautiful! We're thrilled to have you join our
          community of plant lovers and embark on a journey to create your own
          botanical haven
        </p>
      </div>
      <div className="sign-up-form-box">
        <form className="common-form create-form" onSubmit={handleSubmit}>
          <div>
            <img
              src="/account/register-icon.png"
              alt="user icon"
              className="common-form-img"
              style={{
                boxShadow: "-0.5rem 0.4rem 0.7rem #969897",
                borderRadius: "50%",
              }}
            />
          </div>
          <p className="common-form-title sign-up-title">sign up</p>
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
            <NavLink className="form-link" to="/contact">
              Contact Us
            </NavLink>
            <NavLink className="form-link" to="/account/sign-in">
              Login
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}
