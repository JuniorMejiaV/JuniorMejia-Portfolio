// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';



function ContactForm() {
  const [state, handleSubmit] = useForm("xbjedvap");
    if (state.succeeded) {
        return <p className='text-center'>Thank you for your submission. Have a great day!</p>;
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className="name d-flex flex-column">
        <div className="name d-flex flex-column my-2">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" />
            <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            />
        </div>
        <div className="email d-flex flex-column my-2">
            <label htmlFor="first-name">Email</label>
            <input type="text" className="form-control" name="email" />
            <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            />
        </div>
        <div className="Subjact d-flex flex-column my-2">
            <label htmlFor="first-name">Subject</label>
            <input type="text" className="form-control" name="subject" />
            <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
            />
        </div>
        <div className="Message d-flex flex-column my-2">
            <label htmlFor="first-name">Message</label>
            <textarea
            className="contact-body mb-2"
            id="contact-body"
            cols="30"
            rows="5"
            name="message"
            ></textarea>
            <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            />
        </div>
        </div>
    <button className="contact-btn btn col-12" type="submit" disabled={state.submitting}>Submit</button>
  </form>
  );
}
export default ContactForm;
