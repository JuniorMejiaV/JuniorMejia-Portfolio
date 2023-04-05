//Components
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "../components/contact/contactform";

function Github() {
  window.open("https://github.com/JuniorMejiaV/PersonalProjects");
}

function LinkedIn() {
  window.open("https://www.linkedin.com/in/junior-mejia-2bb603150");
}

function Contact() {
  return (
    <>
      <div className="main-contact d-flex flex-column justify-content-center align-items-center">
        <div className="header-contact d-flex flex-column justify-content-center align-items-center mt-3">
          <h1 className="mb-2">Contact Me</h1>
          <p className="mb-1 text-center mx-2">
            Thank you for taking the time to explore my website!
          </p>
          <p className="mb-1 text-center mx-2">
            Send me a email regarding any questions you may have, fun project
            ideas you would like me to try, or just to say hello!
          </p>
          <div className="icons d-flex flex-row gap-2 my-2">
            <a onClick={Github}>
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a onClick={LinkedIn}>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>

        <div className="contact-card card flex-fill col-10 col-md-8 col-lg-6 mt-3">
          <h3 className="d-flex justify-content-center"></h3>
          <div className="card-body">
            <ContactForm />
            {/* <div className="col-12 my-2 d-flex flex-row gap-2 justify-content-center">
              <button
                className="contact-btn btn col-12"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
