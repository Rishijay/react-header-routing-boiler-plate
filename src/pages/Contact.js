// src/pages/Contact.js
import React from "react";
import { useSelector } from "react-redux";

function Contact() {
  const count = useSelector((state) => state.reducers);
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Get in touch with us.</p>
      <span>Latest count is {count}</span>
    </div>
  );
}

export default Contact;
