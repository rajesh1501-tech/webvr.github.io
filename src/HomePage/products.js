import React from 'react';
import NavigationBar from './navigationbar';
import Footer from './footer';
import quest from './assets/quest.png';
import mobilevr from './assets/mobilevr.png'
import web from './assets/web.png'
import webvr from './assets/webvr.png'
import aiimage from './assets/aiimage.png'
import feedback from './assets/feedback.png'

const Products = () => {
  return (
    <div className="products-page">
      <NavigationBar />
      <br></br>
      <h1>Our Products</h1>
      <div className="products-content">
        
        <div className="product-section">
          <h2>AR/VR for Vocational Training</h2>
          <img src={quest} alt="AR/VR for Vocational Training" />
          <p>Revolutionize your training programs with our immersive AR/VR solutions.</p>
        </div>
        <div className="product-section">
          <h2>Web-Based VR Solutions</h2>
          <img src={webvr}alt="Web-Based VR Solutions" />
          <p>Access our VR experiences from any device with our web-based solutions.</p>
        </div>
        <div className="product-section">
          <h2>Mobile Virtual Reality</h2>
          <img src={mobilevr} alt="Mobile Virtual Reality" />
          <p>Immerse yourself in virtual worlds with our mobile VR experiences.</p>
        </div>
        <br></br>
        <div className="product-section">
          <h2>Web Learning Portal with Certification</h2>
          <img src={web} alt="Mobile Virtual Reality" />
          <p>Immerse yourself in virtual worlds with our mobile VR experiences.</p>
        </div>
        <div className="product-section">
          <h2>AI Powered Guide</h2>
          <img src={aiimage} alt="Mobile Virtual Reality" />
          <p>Immerse yourself in virtual worlds with our mobile VR experiences.</p>
        </div>
        <div className="product-section">
          <h2>Olfactory Feedback </h2>
          <img src={feedback} alt="Mobile Virtual Reality" />
          <p>Immerse yourself in virtual worlds with our mobile VR experiences.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;