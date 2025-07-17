"use client";
import { useState } from "react";

export default function FAQPage() {
  const [feedbacks, setFeedbacks] = useState({});
  const [footerFeedback, setFooterFeedback] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(2);

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

  return (
    <>
      <style>{`
        .faq-wrapper {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #ffffff;
          color: #333333;
          padding: 40px 20px;
        }

        .container {
          max-width: 900px;
          margin: auto;
          background: linear-gradient(135deg, #ffffff 0%, #f8fbff 50%, #e8f5ff 100%);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 20px 60px rgba(83, 172, 197, 0.2);
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .container::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #53acc5, #a0f7c7, #00d4ff, #53acc5);
          border-radius: 22px;
          z-index: -1;
          opacity: 0.3;
          animation: containerBorder 3s linear infinite;
        }

        .container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 30%, rgba(83, 172, 197, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(160, 247, 199, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 90% 70%, rgba(83, 172, 197, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 10% 90%, rgba(160, 247, 199, 0.08) 0%, transparent 50%);
          border-radius: 20px;
          z-index: -1;
          animation: bubbleFloat 8s ease-in-out infinite;
        }

        @keyframes containerBorder {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes bubbleFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-10px) scale(1.05);
            opacity: 0.8;
          }
        }

        .bubble {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(83, 172, 197, 0.1), rgba(160, 247, 199, 0.1));
          animation: floatBubble 6s ease-in-out infinite;
          z-index: 0;
        }

        .bubble:nth-child(1) {
          width: 60px;
          height: 60px;
          top: 10%;
          left: 15%;
          animation-delay: 0s;
        }

        .bubble:nth-child(2) {
          width: 40px;
          height: 40px;
          top: 70%;
          right: 20%;
          animation-delay: 2s;
        }

        .bubble:nth-child(3) {
          width: 80px;
          height: 80px;
          bottom: 15%;
          left: 10%;
          animation-delay: 4s;
        }

        .bubble:nth-child(4) {
          width: 30px;
          height: 30px;
          top: 50%;
          right: 10%;
          animation-delay: 1s;
        }

        .bubble:nth-child(5) {
          width: 50px;
          height: 50px;
          top: 25%;
          right: 40%;
          animation-delay: 3s;
        }

        @keyframes floatBubble {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.3;
          }
          33% { 
            transform: translateY(-15px) translateX(10px) scale(1.1);
            opacity: 0.5;
          }
          66% { 
            transform: translateY(-5px) translateX(-8px) scale(0.9);
            opacity: 0.4;
          }
        }

        header {
          text-align: center;
          margin-bottom: 30px;
          position: relative;
          z-index: 1;
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
        }

        .faq {
          position: relative;
          z-index: 1;
        }

        .faq-item {
          background: #ffffff;
          border-radius: 15px;
          margin-bottom: 15px;
          padding: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          position: relative;
          cursor: pointer;
          border: 1px solid rgba(83, 172, 197, 0.1);
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
          transition: all 0.3s ease;
        }

        .question:hover {
          color: #0badda;
          text-shadow: 0 0 8px rgba(11, 173, 218, 0.3);
          transform: translateX(5px);
        }

        .expand-icon {
          font-size: 1.4rem;
          background: linear-gradient(135deg, #53acc5, #a0f7c7);
          color: white;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s ease;
        }

        .expand-icon.open {
          transform: rotate(45deg) scale(1.1);
        }

        .answer {
          margin-top: 15px;
          font-size: 1rem;
          line-height: 1.6;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: all 0.4s ease;
        }

        .answer.open {
          max-height: 250px;
          opacity: 1;
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
        }

        .feedback .yes {
          background: linear-gradient(135deg, #2ecc71, #2cff84);
        }

        .feedback .no {
          background: linear-gradient(135deg, #ff4c38, #fa3f2a);
        }

        .feedback button:hover {
          transform: scale(1.05);
        }

        .thank-you {
          color: #00b894;
          font-size: 0.95rem;
        }

        footer {
          text-align: center;
          margin-top: 40px;
          font-size: 0.9rem;
          color: white;
        }

        footer button {
          padding: 12px 28px;
          border-radius: 14px;
          border: none;
          font-weight: 600;
          font-size: 1rem;
          margin: 5px;
          color: #fff;
        }

        footer .yes {
          background-image: linear-gradient(to right, #00c9ff 0%, #0cff24 51%, #b3dde9 100%);
        }

        footer .no {
          background-image: linear-gradient(to right, #d8356c 0%, #ff0000 51%, #ff6a6a 100%);
        }

        footer button:hover {
          transform: scale(1.05);
        }

        a {
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        a:hover {
          color: #f0f0f0;
        }

        .learn-link {
          color: #00c9ff;
          text-decoration: underline;
        }

        .learn-link:hover {
          color: #36d1dc;
        }

        /* =================================================================
           PRODUCT DROPDOWN FONT FORCE-BLACK
           -----------------------------------------------------------------
        ===================================================================*/
        .product-dropdown,
        .product-dropdown *,
        .dropdown,
        .dropdown * ,
        .dropdown-menu,
        .dropdown-menu * ,
        .product-menu,
        .product-menu * ,
        nav [class*="dropdown"],
        nav [class*="dropdown"] * ,
        nav [class*="product"],
        nav [class*="product"] * ,
        nav [class*="menu"],
        nav [class*="menu"] * ,
        nav a[href^="/products/"] {
          color: #000 !important;
        }

        
        .product-dropdown .item-sub,
        .dropdown-menu .item-sub,
        nav [class*="dropdown"] .item-sub,
        nav [class*="product"] .item-sub,
        nav small,
        nav p {
          color: #555 !important;
        }
        
        nav [class*="dropdown"] .item-title:hover,
        nav [class*="product"] .item-title:hover {
          color: #1f3dbd !important;
        }
        /* =================================================================*/

        @keyframes subtleGlow {
          from { text-shadow: 0 0 2px #00c9ff33; }
          to   { text-shadow: 0 0 6px #a0f7c7aa; }
        }

        @keyframes titleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        #footerFeedback {
          color: #333333; 
        }
        #footerFeedback p {
          margin-bottom: 16px;
          font-size: 1rem;
          font-weight: 500;
          color: #333333;
        }
        #footerFeedback .footer-actions {
          display: inline-flex;
          gap: 16px;
          margin-bottom: 12px;
        }
        #footerFeedback .footer-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 28px;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          color: #ffffff;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        #footerFeedback .footer-btn.yes {
          background: linear-gradient(90deg, #00e676 0%, #1de9b6 100%);
        }
        #footerFeedback .footer-btn.no {
          background: linear-gradient(90deg, #ff5252 0%, #ff1744 100%);
        }
        #footerFeedback .footer-btn:hover {
          transform: scale(1.05) translateY(-1px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }
        #footerFeedback .footer-email {
          display: inline-block;
          margin-top: 8px;
          font-size: 0.95rem;
        }
        #footerFeedback .footer-email a {
          color: #00b0ff;
          text-decoration: underline;
        }
        #footerFeedback .footer-email a:hover {
          color: #0081cb;
        }
      `}</style>

    
      <div className="faq-wrapper">
        <div className="container">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
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
              >
                <div className="question">
                  {faq.question}
                  <span className={`expand-icon ${openFAQ === index ? "open" : ""}`}>
                    +
                  </span>
                </div>
                <div className={`answer ${openFAQ === index ? "open" : ""}`}>
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
              <div className="footer-actions">
                <button
                  type="button"
                  className="footer-btn yes"
                  onClick={() => setFooterFeedback(true)}
                >
                  <span role="img" aria-label="Yes">👍</span> Yes
                </button>
                <button
                  type="button"
                  className="footer-btn no"
                  onClick={() => setFooterFeedback(true)}
                >
                  <span role="img" aria-label="No">👎</span> No
                </button>
              </div>
            )}
            <br />
            <small className="footer-email">
              Need more help? Email us at <br />
              <a href="mailto:gayatridengale515@gmail.com">
                gayatridengale515@gmail.com
              </a>
            </small>
          </footer>
        </div>
      </div>
    </>
  );
} 






















