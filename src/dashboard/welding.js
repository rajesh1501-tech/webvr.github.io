import React from "react";
import Block from "../components/block";
import "./welding.css"
import backtodashboard from "../components/backtodashboard"
import Title from "../components/title";
import BackToDashBoard from "../components/backtodashboard";
import spanner from '../learningimages/spanner.jpeg'
import hammer from '../learningimages/hammer.jpeg'
import screwdriver from '../learningimages/screwdriver.jpeg'
import hammermodel from '../models/hammer.glb'
import screwdrivermodel from '../models/screwdriver.glb'
import spannermodel from '../models/spanner.glb'

import { useNavigate } from 'react-router-dom';
const Welding = () =>{
    const navigate = useNavigate();

    const titleinfo1 ={
        text : "Welding"
      }
      const blockInfo1 = {
        text: 'Spanner',
        image: spanner,
        onClick: () =>  {
          navigate("/viewmodel", { state: { modelPath: spannermodel } }); // Pass modelPath via state
        },
        info: "\"Click me \" to get a 3D view of  a shovel",
        buttontext: "View 3D Model",
      };
      const blockInfo2 = {
        text: 'Screw Driver',
        image: screwdriver,
        onClick: () =>  {
          navigate("/viewmodel", { state: { modelPath: screwdrivermodel } }); // Pass modelPath via state
        },
        info: "\"Click me \" to get a 3D view of  a gardening shears",
        buttontext: "View 3D Model",
      };
      const blockInfo3 ={
        text: 'Hammer',
        image: hammer,
        onClick: () =>  {
          navigate("/viewmodel", { state: { modelPath: hammermodel } }); // Pass modelPath via state
        },
        info: "\"Click me \" to get a 3D view of  a sickle",
        buttontext: "View 3D Model",
      }
    return(
        <div>
            <Title titleInfo={titleinfo1}/>
            
        </div>
        
    );
}
export default  Welding;