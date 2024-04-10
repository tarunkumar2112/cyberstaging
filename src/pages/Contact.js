import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Call from '../assets/call.png';
import Addresss from '../assets/addres.png';
import Mails from '../assets/mail.png'
function ContactForm() {
  const [state, handleSubmit] = useForm("xjvnpojr");

  if (state.succeeded) {
    return <p className="success-message">Thanks for reaching out! We'll get back to you soon.</p>;
  }

  return (
    <div className="contact-form-container">
      <h2>Send Us a Message</h2>
      <p>Have a question or inquiry?We're here to help! Send us a message and we'll get back to you shortly!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              required
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company:</label>
            <input
              id="company"
              type="text"
              name="company"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              type="tel"
              name="phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              id="email"
              type="email"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            id="subject"
            type="text"
            name="subject"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button className="btn bg-[#1E1333] text-sm transition-all hover:bg-[#DBD9DE] text-[rgba(124, 124, 124, 1)] hover:text-[#2E1C63] font-medium py-2 px-4 rounded-[5px] border border-solid border-slate-400/40 hover:border-white mt-[30px]" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

function Contact() {
  return (
    <div className='main-section-blog contact-blog'>

    <div className="container max-w-[1200px] w-full mx-auto px-[15px]">
      <div className='row d-flex'>
      <div className='form-main bg-price-bg rounded-[5px]'><ContactForm /></div>
      <div className='form-information'>
      <h5 className='text-Primary'>Get In Touch</h5>
      <h2>Seamless Cummunication, Global Impact</h2>
      <p>Reach out to us effortlessly, and let's make a global impact together. Your message matters, and matters, and we're here to listen.</p>
      <div className='icon-list'>
        <div className='item bg-price-bg rounded-[5px]'>
<div className='flex-wrapper '>
  <div className='icon'>
    <img src={Addresss} alt="address"/>
  </div>
  <div className='content-info'>
    <h3 className='text-white'>Head Office</h3>
    <p>Test, Address 123 No.12 <br />California, USA</p>
  </div>
</div>
        </div>
        <div className='item bg-price-bg rounded-[5px]'>
        <div className='flex-wrapper'>
  <div className='icon'>
    <img src={Mails} alt="mail"/>
  </div>
  <div className='content-info'>
    <h3 className='text-white'>Email Support</h3>
    <p><a href='mailto:tess@gmail.com'>tess@gmail.com</a></p>
  
  </div>
</div>
          </div>
          <div className='item bg-price-bg rounded-[5px]'>
          <div className='flex-wrapper'>
  <div className='icon'>
    <img src={Call} alt="call"/>
  </div>
  <div className='content-info'>
    <h3 className='text-white'>Let's Talk</h3>
    <p><a href='tel:48375327942563'>+1234567890</a></p>
  </div>
</div>
          </div>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
