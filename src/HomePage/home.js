import React from "react";
import NavigationBar from './navigationbar';

import About from "./about";
import Footer from "./footer";
const home = () =>{
    return(
        <div>
            <NavigationBar />
            <div
                style={{
                    // backgroundImage: `url(${back})`,
                    // background :"#161537",
                    background :"#FFFEFA",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff", // Optional: Add text color for content over the background
                    textAlign: "center", // Center-align text content
                    overflowX: "hidden",
                }}
            >
                    <header className="header1">

                    <h1 className="header-title">Electro Visions Lab</h1>
                    <p className="header-subtitle">The Next-Next Generation AR/VR Solutions</p>
                    </header>

            </div>
            <Footer />
            
        </div>    
    );
};
export default  home;