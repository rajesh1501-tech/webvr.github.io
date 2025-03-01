import React, { useEffect, useState } from "react";
import { auth } from "./components/firebase";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './HomePage/home'; 
import About from "./HomePage/about";
import Products from "./HomePage/products";
import Login from "./components/login";
import Register from "./components/register";
import VideoGame360 from "./components/videogame360"; 
import Dashboard from "./components/dashboard";
import GreenFarming from "./dashboard/greenfarming";
import Welding from "./dashboard/welding"
import Carpentry from "./dashboard/carpentry";
import AssessmentCarpentry from "./dashboard/assesmentcarpentry";
import ViewModel from "./components/viewmodel";
import HealthCare from "./dashboard/healthcare";
import VoiceInput from "./components/voiceinput";
import './App.css';

function App() {
  const [user, setUser] = useState();


  const questions = [
    {
      pauseAt: 3, 
      question: 'What type of joint should be used here?',
      choice1: 'Lap joint',
      choice2: 'butt joint',
      choice3: 'T-joint',
      choice4: 'rubert joint',
      correctChoice: 'choice1',
    },
    {
      pauseAt: 10, 
      question: 'What type of welding are we doing?',
      choice1: 'arc welding',
      choice2: 'TIG',
      choice3: 'MIG',
      choice4: 'soldering',
      correctChoice: 'choice3',
    },
    {
      pauseAt: 15, 
      question: 'Which planet is closest to the Sun?',
      choice1: 'Earth',
      choice2: 'Mars',
      choice3: 'Venus',
      choice4: 'Mercury',
      correctChoice: 'choice4',
    },
    {
      pauseAt: 20, 
      question: 'Last ?',
      choice1: 'C',
      choice2: 'W',
      choice3: 'W',
      choice4: 'W',
      correctChoice: 'choice1',
    }
    
  ];

  const questionscarp = [
    {
      pauseAt: 25, 
      question: 'Which type of lap joint is used to connect two pieces of wood at an angle, such as in a frame?',
      choice1: 'T-lap joint',
      choice2: 'Half-lap joint',
      choice3: 'Corner lap joint',
      choice4: 'Cross-lap joint',
      correctChoice: 'choice2',
    },
    {
      pauseAt: 40, 
      question: 'Which joint is commonly used for joining the ends of two pieces of wood at a 90-degree angle?',
      choice1: 'Mortise and tenon',
      choice2: 'Dovetail joint',
      choice3: 'Butt joint',
      choice4: 'Finger joint',
      correctChoice: 'choice3',
    },
    {
      pauseAt: 57.5, 
      question: 'Which of the following joints is most suitable for aligning two pieces of wood along their faces to prevent them from shifting?',
      choice1: 'Dado joint',
      choice2: 'Biscuit joint',
      choice3: 'Tongue joint',
      choice4: 'Half-lap joint',
      correctChoice: 'choice3',
    },
    {
      pauseAt: 74, 
      question: 'Which joint is often used to create long-lasting, strong connections in furniture?',
      choice1: 'Dovetail joint',
      choice2: 'Mortise and tenon joint',
      choice3: 'Box joint',
      choice4: 'Biscuit joint',
      correctChoice: 'choice1',
    },
    {
      pauseAt: 90, 
      question: 'What type of joint is used to join two pieces of wood at a 45-degree angle for framing or trim?',
      choice1: 'Butt joint',
      choice2: 'Miter joint',
      choice3: 'Box joint',
      choice4: 'Dovetail joint',
      correctChoice: 'choice2',
    },
    {
      pauseAt: 106, 
      question: 'What is the shape of the cut made in a rabbet joint?',
      choice1: 'A square notch',
      choice2: 'A triangular groove',
      choice3: 'A half-circle groove',
      choice4: 'A rectangular notch along the edge',
      correctChoice: 'choice4',
    }
];


// time 

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/products" element={<Products />} />
          <Route path="/login" element ={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/laboratory" element={<VideoGame360 questions={questions} vidsrc='weld' />} />
          <Route path="/laboratory2" element={<VideoGame360 questions={questionscarp} vidsrc='carp' />} />
          <Route path="/greenfarming" element={<GreenFarming />} />
          <Route path="/welding"  element={<Welding />} />
          <Route path="/carpentry" element={<Carpentry />} />
          <Route path="/healthcare" element={<HealthCare />} />
          <Route path="/viewmodel" element={<ViewModel />} />
          <Route path="assesment_carpentry" element={<AssessmentCarpentry />} />
          <Route path="/voiceinput" element={<VoiceInput />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
