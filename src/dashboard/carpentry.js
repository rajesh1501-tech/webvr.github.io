import React from "react";
import Block from "../components/block";
import "./welding.css";
import Title from "../components/title";
import BackToDashBoard from "../components/backtodashboard";
import spanner from '../learningimages/spanner.jpeg';
import hammer from '../learningimages/hammer.jpeg';
import screwdriver from '../learningimages/screwdriver.jpeg';
import hammermodel from '../models/hammer.glb';
import screwdrivermodel from '../models/screwdriver.glb';
import spannermodel from '../models/spanner.glb';

import { useNavigate } from 'react-router-dom';

const Carpentry = () => {
  const navigate = useNavigate();
  const [isSpeaking, setIsSpeaking] = React.useState(false);

  const titleinfo1 = {
    text: "Carpentry",
  };

  const blockInfo1 = {
    text: 'Spanner',
    image: spanner,
    onClick: () => navigate("/viewmodel", { state: { modelPath: spannermodel } }),
    info: "\"Click me \" to get a 3D view of a spanner",
    buttontext: "View 3D Model",
  };

  const blockInfo2 = {
    text: 'Screw Driver',
    image: screwdriver,
    onClick: () => navigate("/viewmodel", { state: { modelPath: screwdrivermodel } }),
    info: "\"Click me \" to get a 3D view of a screwdriver",
    buttontext: "View 3D Model",
  };

  const blockInfo3 = {
    text: 'Hammer',
    image: hammer,
    onClick: () => navigate("/viewmodel", { state: { modelPath: hammermodel } }),
    info: "\"Click me \" to get a 3D view of a hammer",
    buttontext: "View 3D Model",
  };

  const handleLab = () => {
    window.location.href = "/laboratory2"; // Redirect to laboratory page
  };

  const handleChat = () => {
    window.location.href = "https://2097-122-15-28-66.ngrok-free.app/";
  };

  const handleCertificate = () => {
    window.location.href = "/assesment_carpentry";
  };

  const handleReadAloud = () => {
    const paragraph = document.getElementById('overview').textContent;
    const utterance = new SpeechSynthesisUtterance(paragraph);

    if (isSpeaking) {
      window.speechSynthesis.cancel(); // Stop the ongoing speech
      setIsSpeaking(false);
    } else {
      utterance.onend = () => setIsSpeaking(false); // Update state when speech ends
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div>
      <Title titleInfo={titleinfo1} />
      <br />
      <BackToDashBoard />
      <div className="content">
        <div className="overview">
          <h1>Over View</h1>
          <p id="overview">
            Carpentry is a highly versatile and essential trade that involves the cutting,
            shaping, and installation of building materials for the construction of
            structures and objects. Traditionally focused on natural wood, carpentry
            has evolved to encompass a wide range of materials, including plywood,
            composites, and metal. Carpenters play a crucial role in the construction
            of buildings, ships, bridges, and timber formworks, as well as in the
            creation of custom furniture and cabinetry.
            <br /> The field is divided into
            various specialized areas, such as rough carpentry, which deals with framing
            and structural elements, and finish carpentry, which focuses on finer
            details like molding, trim, and cabinetry.
            <br />
            The skills involved in carpentry allow professionals to work on both large-scale construction projects and small, intricate designs. Carpentry is not just a practical trade but also a creative outlet, offering opportunities for artistic expression through custom designs, restorations, and unique woodwork. Whether involved in structural framing or creating beautiful handcrafted furniture, carpenters contribute significantly to shaping the spaces we live and work in.
          </p>
          <button onClick={handleReadAloud}>
            {isSpeaking ? "Stop Read" : "Read Me"}
          </button>
        </div>
        <div className="tools">
          <h1>Tools</h1>
          <div className='dashboard'>
            <Block boxInfo={blockInfo1} />
            <Block boxInfo={blockInfo2} />
            <Block boxInfo={blockInfo3} />
          </div>
        </div>
        <div className="tools">
          <h1>Try Our Virtual Mobile Lab Now</h1>
          <button onClick={handleLab}>Lab Here</button>
        </div>
        {/* <div className="tools">
          <h1>Chat with our Bot to learn with AI</h1>
          <button onClick={handleChat}>Chat Here</button>
        </div> */}
        <div className="tools">
          <h1>Try our assessment and get certified with us</h1>
          <button onClick={handleCertificate}>Test Now</button>
        </div>
      </div>
    </div>
  );
};

export default Carpentry;
