'use client';

import React from 'react';
import ContactForm from "./src/components/ContactForm";
import ContactInfo from "./src/components/ContactInfo";
import BusinessHours from "./src/components/BusinessHours";
import ContactMap from "./src/components/ContactMap";
import "./src/globals.css";

export default function ContactPage() {
  return (
    <div className="container">
      <h1>CONTACT US</h1>
      <p className="description">
        If you have any questions, feel free to get in touch with us via phone, text,
        email, the form below, or even on social media!
      </p>

      <div className="flexRow">
        <ContactForm />
        <ContactInfo />
      </div>

      <BusinessHours />
      <ContactMap />
    </div>
  );
}
