import React, { Fragment } from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Fragment>
    <header>
      <div className="navs"> 
      <Link to = "/">
        <img src = "https://www.internationalpaper.com/themes/custom/themekit/logo.svg" alt = "" />
      </Link> 
      <nav>
        <ul className="navbars">
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/chatbot" activeClassName="active">Chatbot</Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
    </Fragment>
    
  );
};

export default Header;
