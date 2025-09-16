import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import Button from "../../ui/Button";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(form);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <div className="contact">
      <form className="contact__form" onSubmit={handleSubmit} action="/action">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="contact__name"
          placeholder="LeoU"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          className="contact__email"
          placeholder="LeoU@Example.com"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message" className="textarea-label">
          Message:
        </label>
        <textarea
          cols="30"
          rows="10"
          id="message"
          className="contact__message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <Button className="message-form-btn" onClick={handleSubmit}>
          Send
        </Button>
      </form>
      <div className="contact__img-container">
        <img
          className="contact__img"
          src="/contact/contact-bg.png"
          alt="contact page background"
        />
      </div>

      <div className="contact__icon-box">
        <Link to="https://web.whatsapp.com/" className="contact__icon">
          <img src="/social/whats-app-logo.png" alt="WhatsApp" />
        </Link>

        <Link to="https://www.facebook.com/" className="contact__icon">
          <img src="/social/fb-logo.png" alt="Facebook" />
        </Link>

        <Link to="https://twitter.com/" className="contact__icon">
          <img src="/social/x-logo.png" alt="Twitter" />
        </Link>

        <Link to="https://www.instagram.com/" className="contact__icon">
          <img src="/social/insta-logo.png" alt="Instagram" />
        </Link>
      </div>
    </div>
  );
}
