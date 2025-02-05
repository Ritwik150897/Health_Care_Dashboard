import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/logo.png" alt="TechCare Logo" className="logo-img" />
            </div>

            <nav className="nav-links">
                <a href="#">Overview</a>
                <a href="#" className="active">Patients</a>
                <a href="#">Schedule</a>
                <a href="#">Message</a>
                <a href="#">Transactions</a>
            </nav>

            <div className="profile">
                <img src="/doctor-profile.png" alt="Dr. Jose Simmons" className="profile-pic" />
                <span className="profile-name">Dr. Jose Simmons</span>
            </div>
        </header>
    );
};

export default Header;