import React from 'react';
import Block from './block';
import Logout from './logout.js'
import Title from './title.js'

import garden from '../images/garden.jpg'
import healthcare from '../images/healthcare.jpg'
import welding from '../images/welding.jpg'
import carpentry from '../images/carpentry.jpg'
import "../styling/dashboard.css"
const Dashboard = () => {
  const titleinfo1 ={
    text : "Welcome Learner"
  }
  const blockInfo1 = {
    text: 'Green Farming',
    image: garden,
    onClick: () => {
    console.log("Logged out");
    window.location.href = "/greenfarming"
    },
    info: "Kick start your learning with basics and transform the knowled to skills",
    buttontext: "Learn Now",
  };
  const blockInfo2 = {
    text: 'Welding',
    image: welding,
    onClick: () => {
      console.log("Logged out");
      window.location.href = "/welding"
      },
    info: "Kick start your learning with basics and transform the knowled to skills",
    buttontext: "Learn Now",
  };
  const blockInfo3 ={
    text: 'Carpentry',
    image: carpentry,
    onClick: () => {
      console.log("Logged out");
      window.location.href = "/carpentry"
      },
      info: "Kick start your learning with basics and transforms the knowled to skills",
      buttontext: "Learn Now",

  }
  const blockInfo4 ={
    text: 'Health Care',
    image: healthcare,
    onClick: () => {
      console.log("Logged out");
      window.location.href = "/healthcare"
      },
      info: "Kick start your learning with basics and transforms the knowled to skills",
      buttontext: "Learn Now",

  }
  

  return (
   <div>

    <Title titleInfo={titleinfo1}/>
    <div className='dashboard'>
      <Block boxInfo={blockInfo1} />
      <Block boxInfo={blockInfo2} />
      <Block boxInfo={blockInfo3} />
      <Block boxInfo={blockInfo4} />

    </div>
    <Logout/>
    </div>
    
  );
};

export default Dashboard;
