'use client';

import React, { useEffect, useState } from 'react';

export default function ContactPage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <style>{`
        body {
          background: #ffffff;
          color: #171717;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .container {
          margin: 0 auto;
          padding: 50px 20px;
          max-width: 1100px;
          background-color: #fff;
          border-radius: 15px;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
        }

        h1 {
          font-size: 44px;
          font-weight: 700;
          color: #2c3e50;
          text-align: center;
          margin: 0 auto;
          padding-bottom: 1rem;
          line-height: 1.2;
        }

        .description {
          color: #2c3e50;
          font-weight: 400;
          font-size: 18px;
          text-align: center;
          max-width: 700px;
          margin: 0 auto 40px auto;
          line-height: 1.6;
        }

        .sectionTitle {
          font-size: 20px;
          font-weight: 600;
          color: #2c3e50;
          text-align: left;
          position: relative;
          padding-bottom: 8px;
          margin-bottom: 24px;
        }

        .sectionTitle::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 3px;
          background-color: #2c3e50;
          border-radius: 3px;
          transition: width 0.4s ease;
        }

        .sectionTitle:hover::after {
          width: 100px;
        }

        .flexRow {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
          margin-bottom: 40px;
        }

        .box {
          background: #f2f7fc;
          border-radius: 12px;
          padding: 24px;
          flex: 1;
          min-width: 300px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #e0e0e0;
        }

        .box:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
        }

        .getInTouch input,
        .getInTouch textarea {
          width: 100%;
          padding: 12px 16px;
          margin-top: 10px;
          margin-bottom: 15px;
          border: 1px solid #d0d0d0;
          border-radius: 8px;
          font-size: 15px;
          font-family: inherit;
          color: #2c3e50;
          background-color: #fafafa;
          transition: all 0.3s ease;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .getInTouch input:hover,
        .getInTouch textarea:hover {
          border-color: #999;
          background-color: #f5f5f5;
        }

        .getInTouch input:focus,
        .getInTouch textarea:focus {
          border-color: #d9001b;
          background-color: #fff;
          outline: none;
          box-shadow: 0 0 0 4px rgba(217, 0, 27, 0.15);
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .row input {
          flex: 1;
          min-width: 140px;
        }

        .sendButton {
          background-color: #d9001b;
          color: #fff;
          border: none;
          padding: 14px 28px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          max-width: 220px;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(217, 0, 27, 0.2);
        }

        .sendButton:hover {
          background-color: #b30018;
          box-shadow: 0 6px 16px rgba(217, 0, 27, 0.3);
          transform: translateY(-2px);
        }

        .contactGroup {
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex: 1;
        }

        .contactCard {
          background: #f2f7fc;
          border-radius: 12px;
          padding: 28px 26px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          border: 1px solid #e0e0e0;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 90px;
        }

        .contactCard:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          background-color: #fcfcfc;
        }

        .contactCard p {
          margin: 0;
          color: #2c3e50;
          font-size: 16px;
          font-weight: 500;
        }

        .box table {
          width: 100%;
          border-collapse: collapse;
        }

        .box table td {
          padding: 8px 0;
          font-size: 16px;
          color: #2c3e50;
        }

        .box table td:first-child {
          font-weight: 500;
          width: 50%;
        }

        .box table td:last-child {
          width: 50%;
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeSlideUp 0.8s ease-out both;
        }

        .animated {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeSlideUp 0.8s ease-out forwards;
        }

        .delay-1 {
          animation-delay: 0.3s;
        }

        .delay-2 {
          animation-delay: 0.5s;
        }

        .delay-3 {
          animation-delay: 0.7s;
        }

        .delay-4 {
          animation-delay: 0.9s;
        }
      `}</style>

      <div className={`container ${animate ? 'fade-in' : ''}`}>
        <h1 className={animate ? 'animated' : ''}>CONTACT US</h1>

        <p className={`description ${animate ? 'animated delay-1' : ''}`}>
          If you have any questions, feel free to get in touch with us via phone, text,
          email, the form below, or even on social media!
        </p>

        <div className={`flexRow ${animate ? 'animated delay-2' : ''}`}>
          <div className="box getInTouch">
            <h3 className="sectionTitle">GET IN TOUCH</h3>
            <form>
              <div className="row">
                <input type="text" placeholder="Enter your name*" required />
                <input type="text" placeholder="Enter your phone number*" required />
              </div>
              <input type="email" placeholder="Enter your email*" required />
              <textarea rows="4" placeholder="Your message"></textarea>
              <button type="submit" className="sendButton">SEND MESSAGE</button>
            </form>
          </div>

          <div className="contactGroup">
            <div className="contactCard">
              <h3 className="sectionTitle">PHONE</h3>
              <p><strong>📞</strong> <a href="tel:9112005341">02422-252076</a></p>
            </div>
            <div className="contactCard">
              <h3 className="sectionTitle">EMAIL</h3>
              <p><strong>📧</strong> <a href="mailto:delxnhelp30@gmail.com">delxnhelp30@gmail.com</a></p>
            </div>
            <div className="contactCard">
              <h3 className="sectionTitle">ADDRESS</h3>
              <p><strong>📍</strong> <a href="https://maps.app.goo.gl/rwhUwAm4n9PvCUFXA" target="_blank" rel="noreferrer">DelXN Technologies Pvt Ltd</a></p>
            </div>
          </div>
        </div>

        <div className={animate ? 'animated delay-3' : ''}>
          <div className="box">
            <h3 className="sectionTitle">BUSINESS HOURS</h3>
            <table>
              <tbody>
                <tr><td>MONDAY – FRIDAY</td><td>9:00 am – 8:00 pm</td></tr>
                <tr><td>SATURDAY</td><td>9:00 am – 6:00 pm</td></tr>
                <tr><td>SUNDAY</td><td>9:00 am – 5:00 pm</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={animate ? 'animated delay-4' : ''} style={{ marginTop: '30px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.847499760441!2d73.82044547518984!3d18.445231982633693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295004697c6ff%3A0xe9ea1fced14e13bb!2sDelXN%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1750830089853!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: 10 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DelXN Technologies Map"
          ></iframe>
        </div>
      </div>
    </>
  );
}
