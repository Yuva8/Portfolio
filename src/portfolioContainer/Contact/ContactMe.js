import React, { useState } from "react";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

export default function ContactMe(props) {
  const notify = () => {
    toast.success("Thanks for Your Interest, I will contact you soon !!", {
      position: "top-right",
    });
  };

  const [showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9u8h6at",
        "template_yzlcl5w",
        e.target,
        "dsoyLrYbOZQ_NsA2h"
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
    showResult(true);
  };

  return (
    <div id={props.id || ""}>
      <div className="main-container">
        <div className="heading">
          <ScreenHeading
            subHeading={"lets Keep In Touch"}
            title={"Contact Me"}
          />
        </div>
        <div className="contactme-container">
          {/* <div className="contactme-parent">
          lets Keep In Touch
          <hr style={{ color: "white" }} />
          <h4 className="contactme-heading">Contact Me</h4>
        </div> */}
          <div className="container-parent">
            <div className="container">
              <div className="contactinfo">
                <div className="box">
                  <div className="icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="text">
                    <h3>Location</h3>
                    <p>Chennai-Tamilnadu</p>
                  </div>
                </div>

                <div className="box">
                  <div className="icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="text">
                    <h3>Phone</h3>
                    <p>+91 9677203943</p>
                  </div>
                </div>

                <div className="box">
                  <div className="icon">
                    <i className="fa fa-github"></i>
                  </div>
                  <div className="text">
                    <h3>Github</h3>
                    <a
                      href="https://github.com/Yuva8"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textdecoration: "none", color: "white" }}
                    >
                      https://github.com/Yuva8
                    </a>
                  </div>
                </div>

                <div className="box">
                  <div className="icon">
                    <i className="fa fa-linkedin"></i>
                  </div>
                  <div className="text">
                    <h3>LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/yuvaraj-m-52604215b/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textdecoration: "none", color: "white" }}
                    >
                      https://www.linkedin.com/in/yuvaraj-m-52604215b/
                    </a>
                  </div>
                </div>

                <div className="box">
                  <div className="icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="text">
                    <h3>Email</h3>
                    <p>yuvarajgv0129@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="contactform">
                <form action="" onSubmit={sendEmail}>
                  <h2>Send Message</h2>

                  <div className="inputbox">
                    <input type="text" name="from_name" required="required" />
                    <span>Full Name</span>
                  </div>

                  <div className="inputbox">
                    <input type="text" name="email" required="required" />
                    <span>Email</span>
                  </div>

                  <div className="inputbox">
                    <input type="number" name="phone" required="required" />
                    <span>Phone no</span>
                  </div>

                  <div className="inputbox">
                    <textarea name="message" required="required"></textarea>
                    <span>Your Message..</span>
                  </div>

                  <div className="inputbox">
                    <input
                      type="submit"
                      onClick={notify}
                      name=""
                      value="Send"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
