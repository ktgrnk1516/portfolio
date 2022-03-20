import React, { useContext, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_95usxzg",
        "template_srxwzih",
        formRef.current,
        "9ei1pmo5abZuW9Ik2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>

          <div className="c-info">
            <div className="c-info-item">
              <i className="bx bx-phone-call"></i>
              +81 070-0000-0000
            </div>
            <div className="c-info-item">
              <i className="bx bxs-message-square-dots"></i>
              portfolio@gmail.com
            </div>
            <div className="c-info-item">
              <i className="bx bxs-home"></i>
              Tokyo,Kangawa
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Lorem ipsum dolor sit amet.</b> Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Velit aut facilis similique nam
            obcaecati blanditiis in tempora.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ background: darkMode && "#444" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ background: darkMode && "#444" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ background: darkMode && "#444" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ background: darkMode && "#444" }}
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Message"
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
