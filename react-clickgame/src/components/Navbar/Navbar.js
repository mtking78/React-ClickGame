import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <nav className="navbar navbar-light bg-light d-flex">
        <div className="navbar-brand flex-fill">
            React Memory Clicker
        </div>
        <div className="nav-item p-2 flex-fill bd-highlight">
            <span className="message navbar-text">Message</span>
        </div>
        <div className="nav-item p-2 flex-fill bd-highlight">
            <span className="current-score navbar-text">CScore</span>
        </div>
        <div className="nav-item p-2 flex-fill bd-highlight">
            <span className="high-score navbar-text">HScore</span>
        </div>
    </nav>
);

export default Navbar;