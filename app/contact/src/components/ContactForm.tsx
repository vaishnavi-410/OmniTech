'use client';

import React from 'react';
import SectionTitle from './SectionTitle';

const ContactForm = () => (
  <div className="box getInTouch">
    <SectionTitle title="GET IN TOUCH" />
    <form>
      <div className="row">
        <input type="text" placeholder="Enter your name*" required />
        <input type="text" placeholder="Enter your phone number*" required />
      </div>
      <input type="email" placeholder="Enter your email*" required />
      <textarea rows={4} placeholder="Your message"></textarea>
      <button type="submit" className="sendButton">SEND MESSAGE</button>
    </form>
  </div>
);

export default ContactForm;
