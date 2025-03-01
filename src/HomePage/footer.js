import React from "react";
import '../HomePage/homepage.css';
import { FaPhone, FaEnvelope, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <h2 className="footer-heading">Contact Us</h2>
                <p className="footer-text">We hope you found what you're looking for. Stay connected!</p>
                <div className="social-icons">
                    {/* Link to YouTube channel */}
                    <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>

                    {/* Link to call a phone number */}
                    <a href="tel:+91 6369723172">
                        <FaPhone />
                    </a>

                    {/* Link to send an email */}
                    <a href="mailto:lakshmanarun2004@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>
                <p className="footer-note">Copyrights 2024 © All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
