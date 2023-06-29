import {MdOutlineMailOutline} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

import emailjs from 'emailjs-com'
import React, { useRef } from "react";

import './contact.css'
const Contact = () => {

  // ==========Email api============

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(
        "service_1847lzx",
        "template_mg11nf8",
        form.current,
        "mSpsMeLCg4Q4Q_Moq"
      );

      e.target.reset()
    };

  return (
    <section id="contact">
      <h5 className='contact__h5'>Get in Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>emmak6600@gmail.com</h5>
            <a href="gmailto:emmak6600@gmail.com">send a message</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>facebook</h5>
            <a href="https://m.me/uwase">send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+230787387</h5>
            <a href="https://api.whatsapp.com/send?phone+250789405393">
              send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn primary">send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact