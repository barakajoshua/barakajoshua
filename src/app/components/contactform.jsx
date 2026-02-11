"use client"
import React,{ useRef,useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mtxtbhx",
        "template_kvviezv",
        formRef.current,
        "owR2yxJKTWRwdCv6u"
      )
      .then(
        (result) => {
          console.log(result.text);
          return(
            <div className="z-20 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <p>
                Message sent successfully!,Thank you for your message
              </p>
            </div>
          )
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full" style={{ fontFamily: "'Space Mono', monospace" }}>
      <h1 className="text-3xl sm:text-4xl font-bold text-[#64FFDA]">
        Get In <span className="text-amber-500">Touch</span>
      </h1>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="space-y-4 mt-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name*"
            className="w-full bg-[#112240] text-[#CCD6F6] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email Address*"
            className="w-full bg-[#112240] text-[#CCD6F6] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
          />
          <textarea
            name="message"
            placeholder="Your Message*"
            className="w-full bg-[#112240] text-[#CCD6F6] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64FFDA] min-h-[120px]"
          ></textarea>
          <button className="cursor-pointer bg-amber-500 text-[#0A192F] p-3 rounded-md hover:bg-[#64FFDA] transition duration-300 w-full sm:w-auto">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
