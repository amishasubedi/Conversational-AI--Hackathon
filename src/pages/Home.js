import React, { Fragment } from "react";
import "./Home.css";
import image1 from '../assets/image1.jpg'


const Home = () => {
    return (
        <Fragment>
            <header>
                <div>
                    <div className="welcome-container">
                    <h2>Welcome to IT Knowledge Base Chatbot!</h2>
                    <p>
                    Our IT Knowledge Base Chatbot is here to assist you with all your IT-related queries.
                    Powered by the latest AI technology, it can help you find solutions, 
                    provide tips, and guide you through various processes. 
                    Let our Chatbot help streamline your IT tasks!
                    </p>
                </div>
            </div>
            </header>
            <div className="image"> 
                <img src= {image1} alt="" />
            </div>
        </Fragment>
       
    )
}

export default Home;