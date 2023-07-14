import React, { useState } from 'react';
import './Home.css';

const AboutUs = () => {
  const [isChatbotTabOpen, setChatbotTabOpen] = useState(false);

  const toggleChatbotTab = () => {
    setChatbotTabOpen(!isChatbotTabOpen);
  };

  const chatbotBenefits = [
    "24/7 Support - Our chatbot is available around the clock",
    "Instant Replies - Get your answers immediately",
    "Always Learning - Our chatbot improves over time",
    "Saves Time - Quick solutions to common IT issues",
  ];

  return (
    <div className="about-us-page">
      <div className="content-container">
        <div className="content-box">
          <h2>About Our Chatbot</h2>
          <p>Our AI-powered chatbot is designed to assist in resolving common IT issues, providing instant responses, and directing you to a human support team if needed. Experience our cutting-edge technology for efficient IT support.</p>
        </div>

        <div className="content-box">
          <h2>Why Use Our Chatbot?</h2>
          <ul>
            {chatbotBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="how-to-section">
        <div className="learn-how-to-use-container">
          <button className={`learn-how-to-use-btn ${isChatbotTabOpen ? 'open' : ''}`} onClick={toggleChatbotTab}>
            Learn How to Use Chatbot
          </button>
          {isChatbotTabOpen && (
            <div className="chatbot-app-container">
              {/* Content related to the chatbot app */}
              <h2>Chatbot App</h2>
              <p>Discover the advanced features and capabilities of our chatbot app. Stay connected and get real-time assistance on-the-go.</p>
              <ul>
                <li>Go to the chatbot page on our website.</li>
                <li>Look for the "Chatbot" button and click on it. This will open an external link.</li>
                <li>Once you're in the chatbot, locate the settings and change the option to team 2</li>
                <li>Once you're inside team2, the chatbot will be ready to use. You can start interacting with it by typing a simple greeting or directly stating your problem.</li>
                <li>The chatbot will guide you through the rest of the conversation. It is designed to assist you based on the uploaded data and provide relevant information or solutions to your queries.</li>
                <li>For the best results, try to be as specific and clear as possible when interacting with the chatbot. This will help the chatbot understand your needs better and provide more accurate assistance.</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className={`chatbot-tab ${isChatbotTabOpen ? 'open' : ''}`} onClick={toggleChatbotTab}>
        <div className="chatbot-tab-icon">
          <span className="material-icons"></span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
