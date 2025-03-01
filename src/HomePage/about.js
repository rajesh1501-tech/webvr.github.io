import React from 'react';
import NavigationBar from './navigationbar';
import Footer from './footer';


const About = () => {
  return (
    <div className="about-page">
      <NavigationBar />
      <div className="about-content">
        <h1>Electro Visions Lab</h1>
        <br></br>
        <p>
          We are a cutting-edge technology company specializing in Augmented Reality (AR) and Virtual Reality (VR) solutions. Our focus is on providing innovative and immersive experiences for vocational training and education.
        </p>
       
          <h1>Our Services</h1>
          <div className="services">
          <div className="service-box">
            <h3>AR/VR for Vocational Training</h3>
            <p>
              Revolutionize your training programs with our immersive AR/VR solutions.
            </p>
          </div>
          <div className="service-box">
            <h3>Web-Based VR Solutions</h3>
            <p>
              Access our VR experiences from any device with our web-based solutions.
            </p>
          </div>
          <div className="service-box">
            <h3>Learning Platform</h3>
            <p>
              Engage learners with our interactive and engaging learning platform.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;