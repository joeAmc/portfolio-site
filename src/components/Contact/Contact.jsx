import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q8wareg",
        "template_xnv17ja",
        form.current,
        "2h6htYSEIam7J4f52"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdEmail />
            <h1>Email</h1>
            <h5>joeamcilroy@gmail.com</h5>
            <a href="mailto:joeamcilroy@gmail.com">Send a message</a>
          </article>
        </div>
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />
            <input
              type="text"
              name-="email"
              placeholder="Your email"
              required
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="6"
              placeholder="Enter a message"
              required
            ></textarea>
            <button type="submit" class="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
