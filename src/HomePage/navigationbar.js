import React, { useState } from "react";
import { useHistory } from "react-router-dom"; 
import { FaBars, FaTimes } from "react-icons/fa"; 
import "../HomePage/homepage.css"
const NavigationBar = () =>{
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

    const handleLogin = () => {
        console.log("Logged out");
        window.location.href = "/login"; 
      };
      const handleSignup = () => {
        console.log("Logged out");
        window.location.href = "/register"; 
      };
      const handleAbout = () => {
        console.log("Logged out");
        window.location.href = "/about"; 
      };
      const handleProducts =() =>{
        window.location.href ="/products"
      }
      const handleSales = () => {
        console.log("Logged out");
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfzuqb1IePJyvgVFLN0kG9yNezuEUk6f-GiKF1IMYhb73wDIQ/viewform?usp=header";
      };
    return (
        <div className="navbar">
          <div className="navbar-left">
            <a href="/home" className="company-name">Electro Vision Lab</a>
          </div>
          <div className="navbar-right">
              <button className="menu-icon" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            
            <button className="nav-button"  onClick={handleAbout}>About</button>
            <button className="nav-button" onClick={handleProducts} >Products</button>
            <button className="nav-button" onClick={handleSales}>Contact us</button>
            <button className="signup-button"  onClick={handleLogin}>Login</button>
            <button className="sigin-button"   onClick={handleSignup}>SignUp</button>
          </div>
        </div>
      );
};
export default NavigationBar;