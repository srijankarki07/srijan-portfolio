"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setIsSubmitting(false);
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send the message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="contact-section" id="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <div className="contact-form">
          <h2>Let's Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="5"
                required
              />
            </div>
            <button
              type="submit"
              className="send-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>

        <div className="contact-info">
          <h2>My Contact Info</h2>
          <p className="info-details">
            <FaPhone />
            +977 9861489006
          </p>
          <p className="info-details">
            <MdEmail />
            srijankarki0@gmail.com
          </p>
          <p className="info-details">
            <FaLocationPin />
            Chandragiri-8, Kathmandu
          </p>
          <div className="social-media">
            <FaLinkedin
              onClick={() =>
                window.open("https://www.linkedin.com/in/srijan-karki/")
              }
            />
            <BsGithub
              onClick={() => window.open("https://github.com/srijankarki07")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
