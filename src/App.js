import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";

import Cards from "./components/Cards";

function App() {
  const [mode, setmode] = useState("light");
  const [cswitch, setcswitch] = useState("enable dark mode");

  const [styleabout, setstyleabout] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const toogle = () => {
    if (mode === "light") {
      setmode("dark");
      setcswitch("enable light mode");
      document.body.style.backgroundColor = "#212529";
      setstyleabout({
        color: "white",
        backgroundColor: "#212529",
      });
     
    } else {
     
      setstyleabout({
        color: "black",
        backgroundColor: "white",
      });

      setmode("light");
      setcswitch("enable dark mode");
      document.body.style.backgroundColor = "white";
    }
  };
 
  return (
    <>
    <Router>
      <Navbar
        title="TagZiro"
        list="more"
        mode={mode}
        togglemode={toogle}
        scolor={cswitch}
      />
    
      <Routes>
        <Route exact path="/About-Villages" element={ <About mode={styleabout} />}/>
         
       
        <Route exact path="/" element = { <Cards/> } /> 
         
      </Routes>
    </Router>
    </>
  );
}

export default App;
