import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import Button from "../../ui/Button";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(`Name : ${form.name}  
      Email : ${form.email}
      Subject : ${form.subject}
      Message : ${form.message}`);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <div className="contact">
      <div className="message-box">
        <form className="message-form" onSubmit={handleSubmit} action="/action">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="LeoU"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            placeholder="LeoU@Example.com"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            placeholder="Plant Care"
            id="subject"
            value={form.subject}
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
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <Button className="message-form-btn" onClick={handleSubmit}>
            Send
          </Button>
        </form>
      </div>

      <div className="contact-background">
        <img
          className="contact-background-img"
          src="/contact/contact-bg.png"
          alt="page background"
        />
      </div>

      <div className="social-icon-box">
        <div className="social-icon">
          <Link to="https://web.whatsapp.com/">
            <img src="/social/whats-app-logo.png" alt="WhatsApp" />
          </Link>
        </div>
        <div className="social-icon">
          <Link to="https://www.facebook.com/">
            <img src="/social/fb-logo.png" alt="Facebook" />
          </Link>
        </div>
        <div className="social-icon">
          <Link to="https://twitter.com/">
            <img src="/social/x-logo.png" alt="Twitter" />
          </Link>
        </div>
        <div className="social-icon">
          <Link to="https://www.instagram.com/">
            <img src="/social/insta-logo.png" alt="Instagram" />
          </Link>
        </div>
      </div>
    </div>
  );
}
