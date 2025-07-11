'use client';

import React, { useState, useEffect } from 'react';
import ContactForm from './src/components/ContactForm';
import ContactInfo from './src/components/ContactInfo';
import BusinessHours from './src/components/BusinessHours';
import ContactMap from './src/components/ContactMap';
import './src/globals.css';

export default function ContactPage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`container ${animate ? 'fade-in' : ''}`}>
      <h1 className={animate ? 'animated' : ''}>CONTACT US</h1>

      <p className={`description ${animate ? 'animated delay-1' : ''}`}>
        If you have any questions, feel free to get in touch with us via phone, text,
        email, the form below, or even on social media!
      </p>

      <div className={`flexRow ${animate ? 'animated delay-2' : ''}`}>
        <ContactForm />
        <ContactInfo />
      </div>

      <div className={animate ? 'animated delay-3' : ''}>
        <BusinessHours />
        <ContactMap />
      </div>
    </div>
  );
}
