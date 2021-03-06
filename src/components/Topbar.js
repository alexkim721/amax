import React from "react";
//import { NavLink } from "react-router-dom";
import "../css/main.css";
import "../css/mobile.css";

class Topbar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <a
          className="twitter"
          href="https://twitter.com/AmaxLeather"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div />
        </a>
        <a
          className="fb"
          href="https://www.facebook.com/amaxleather"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div />
        </a>
        <a
          className="pinterest"
          href="https://www.pinterest.com/amaxleather/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div />
        </a>
        <a
          className="insta"
          href="https://www.instagram.com/amaxleather/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div />
        </a>
      </div>
    );
  }
}

export default Topbar;
