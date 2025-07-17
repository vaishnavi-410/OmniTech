"use client";
import { useState } from "react";

export default function FAQPage() {
  const [feedbacks, setFeedbacks] = useState({});
  const [footerFeedback, setFooterFeedback] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(2); // Initially open FAQ at index 2

  const faqs = [
    {
      question: "Is the product compatible with all devices?",
      answer: "Yes, it works with iOS, Android, Windows, and macOS devices.",
    },
    {
      question: "Can the firmware be updated offline?",
      answer: "Firmware updates require an internet connection via the app.",
    },
    {
      question: "Is customer support available 24/7?",
      answer: "Yes, our support team is available 24/7 via chat and email.",
    },
    {
      question: "Does the app support biometric login?",
      answer: "Yes, it supports Face ID, Touch ID, and fingerprint login.",
    },
    {
      question: "Can I schedule automatic backups?",
      answer: "Yes, daily, weekly, or monthly cloud backups are available.",
    },
  ];

  const handleFeedback = (index) => {
    setFeedbacks({ ...feedbacks, [index]: true });
  };

  const handleMouseEnter = (index) => {
    setOpenFAQ(index);
  };

  const handleMouseLeave = () => {
    // Keep the FAQ open when mouse leaves to allow interaction with buttons
    // setOpenFAQ(null);
  };

  return (
    <>
      <style>{`
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #ffffff;
          color: #333333;
          padding: 40px 20px;
          transition: all 0.5s ease;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          max-width: 900px;
          margin: auto;
          background: #ffffff;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        header {
          text-align: center;
          margin-bottom: 30px;
          animation: fadeInDown 0.8s ease-out;
        }

        header h1 {
          font-size: 2.6rem;
          background: linear-gradient(90deg, #53acc5, #a0f7c7);
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          font-weight: 600;
          animation: subtleGlow 3s infinite alternate, titleFloat 4s ease-in-out infinite;
          transform-origin: center;
        }

        header h3 {
          font-size: 1.2rem;
          margin-top: 10px;
          color: #666;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .faq-item {
          background: linear-gradient(135deg, #f8fbff 0%, #ffffff 100%);
          border-radius: 15px;
          margin-bottom: 15px;
          padding: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          animation: slideInStagger 0.6s ease forwards;
          cursor: pointer;
          border: 1px solid rgba(83, 172, 197, 0.1);
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
        }

        .faq-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
          transition: left 0.6s ease;
        }

        .faq-item:hover::before {
          left: 100%;
        }

        .faq-item:hover {
          background: linear-gradient(135deg, #e3f7e6 0%, #f0fff4 100%);
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 12px 40px rgba(83, 172, 197, 0.25);
          border-color: rgba(83, 172, 197, 0.3);
        }

        .question {
          font-size: 1.2rem;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          user-select: none;
          position: relative;
        }

        .question:hover {
          color: #0badda;
          text-shadow: 0 0 8px rgba(11, 173, 218, 0.3);
          transform: translateX(5px);
        }

        .expand-icon {
          font-size: 1.4rem;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          background: linear-gradient(135deg, #53acc5, #a0f7c7);
          color: white;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(83, 172, 197, 0.3);
        }

        .expand-icon.open {
          transform: rotate(45deg) scale(1.1);
          box-shadow: 0 4px 20px rgba(83, 172, 197, 0.5);
        }

        .answer {
          margin-top: 15px;
          font-size: 1rem;
          line-height: 1.6;
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(-10px);
        }

        .answer.open {
          max-height: 250px;
          opacity: 1;
          transform: translateY(0);
          animation: slideInContent 0.5s ease-out;
        }

        .feedback {
          margin-top: 15px;
        }

        .feedback span {
          display: inline-block;
          margin-right: 10px;
          font-weight: 500;
        }

        .feedback button {
          padding: 10px 22px;
          border-radius: 12px;
          cursor: pointer;
          border: none;
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          margin-right: 10px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          transform: translateY(0);
        }

        .feedback button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .feedback button:hover::before {
          left: 100%;
        }

        .feedback .yes {
          background: linear-gradient(135deg, #2ecc71, #2cff84);
          box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3);
        }

        .feedback .no {
          background: linear-gradient(135deg, #ff4c38, #fa3f2a);
          box-shadow: 0 4px 15px rgba(255, 76, 56, 0.3);
        }

        .feedback button:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .feedback button:active {
          transform: translateY(0) scale(0.98);
          transition: all 0.1s ease;
        }

        .thank-you {
          color: #00b894;
          font-size: 0.95rem;
          margin-top: 0.5rem;
        }

        footer {
          text-align: center;
          margin-top: 40px;
          font-size: 0.9rem;
          color: #555;
          animation: fadeInUp 1s ease-out 0.8s both;
        }

        footer p {
          font-size: 1rem;
          margin-bottom: 12px;
          font-weight: 600;
          animation: pulse 2s infinite;
        }

        footer button {
          padding: 12px 28px;
          border-radius: 14px;
          border: none;
          font-weight: 600;
          font-size: 1rem;
          margin: 5px;
          color: #fff;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background-size: 200% auto;
          background-position: left center;
          box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }

        footer button::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transition: all 0.4s ease;
          transform: translate(-50%, -50%);
        }

        footer button:hover::after {
          width: 100%;
          height: 100%;
        }

        footer .yes {
          background-image: linear-gradient(to right, #00c9ff 0%, #0cff24 51%, #b3dde9 100%);
        }

        footer .no {
          background-image: linear-gradient(to right, #d8356c 0%, #ff0000 51%, #ff6a6a 100%);
        }

        footer button:hover {
          background-position: right center;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
        }

        footer button:active {
          transform: translateY(-1px) scale(1.02);
          transition: all 0.1s ease;
        }

        a {
          color: #18cdff;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }

        a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #18cdff, #a0f7c7);
          transition: width 0.3s ease;
        }

        a:hover::after {
          width: 100%;
        }

        a:hover {
          color: #0badda;
          text-shadow: 0 0 8px rgba(24, 205, 255, 0.3);
        }

        @keyframes subtleGlow {
          from { text-shadow: 0 0 2px #00c9ff33; }
          to   { text-shadow: 0 0 6px #a0f7c7aa; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInDown {
          from { 
            opacity: 0; 
            transform: translateY(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes titleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes slideInStagger {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes slideInContent {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        @media (max-width: 600px) {
          header h1 {
            font-size: 2rem;
          }

          footer button {
            width: 100%;
            margin: 8px 0;
          }
        }
      `}</style>

      <div className="container">
        <header>
          <h1>Omni Tech</h1>
          <h3>FAQ / Support</h3>
        </header>

        <div className="faq">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="question">
                {faq.question}
                <span className={`expand-icon ${openFAQ === index ? 'open' : ''}`}>
                  +
                </span>
              </div>
              <div className={`answer ${openFAQ === index ? 'open' : ''}`}>
                {faq.answer}
                <div className="feedback">
                  {feedbacks[index] ? (
                    <p className="thank-you">Thank you for your feedback!</p>
                  ) : (
                    <>
                      <span>Was this helpful?</span>
                      <button
                        type="button"
                        className="yes"
                        onClick={() => handleFeedback(index)}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        className="no"
                        onClick={() => handleFeedback(index)}
                      >
                        No
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer id="footerFeedback">
          <p>Was this page helpful?</p>
          {footerFeedback ? (
            <p className="thank-you">Thank you for your feedback!</p>
          ) : (
            <>
              <button
                type="button"
                className="yes"
                onClick={() => setFooterFeedback(true)}
              >
                👍 Yes
              </button>
              <button
                type="button"
                className="no"
                onClick={() => setFooterFeedback(true)}
              >
                👎 No
              </button>
            </>
          )}
          <br />
          <small>
            Need more help? Email us at <br />
            <a href="mailto:gayatridengale515@gmail.com">
              gayatridengale515@gmail.com
            </a>
          </small>
        </footer>
      </div>
    </>
  );
}