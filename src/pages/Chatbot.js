import React, { useState } from "react";
import FAQ from "../components/faq";
import './Home.css';

const Chatbot = () => {
  const navigateToChatbot = () => {
   // window.open('https://oai.azure.com/portal/1d5e860adbe647ce9268372a78c73016/chat?tenantid=ef4cd7d9-cd50-4892-b62e-077d05f7ba11');
   window.open('https://hackathon-chat.azurewebsites.net/');
  }

  // FAQs data
  const [faqs, setFaqs] = useState([
    { 
      question: "How does the chatbot work?", 
      answer: "The chatbot works by using machine learning to understand and respond to user input.", 
      open: false 
    },
    { 
      question: "What can the chatbot do?", 
      answer: "The chatbot can answer your questions, guide you through our services, and much more.", 
      open: false 
    },
    {
      question: "Is the chatbot available 24/7?",
      answer: "Yes, the chatbot is available 24/7 to assist you with your queries and provide support.",
      open: false
    },
    {
      question: "Can the chatbot handle multiple languages?",
      answer: "No, currently the chatbot is designed to provide assistance only in English. We are working on adding support for additional languages in the future.",
      open: false
    }
    
  ]);

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }
      return faq;
    }))
  }

  // Chatbot features data
  const features = [
    "24/7 Availability",
    "Quick Response Time",
    "User-friendly Interface",
    "Supports Multiple Languages",
    // add more features as needed
  ]

  return (
    <div className="chatbot-container">
      <div className="intro-section">
        <h1>Our Chatbot Service</h1>
        <p>Experience our cutting-edge chatbot technology designed to answer your questions and guide you through our services. Click the button below to start chatting!</p>
        <button className="chatbot-button" onClick={navigateToChatbot}>Talk to our Chatbot</button>
      </div>
      <div className="info-section">
        <div className="features-section">
          <h2>Features of our Chatbot</h2>
          <ul>
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <FAQ faq={faq} index={i} key={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
