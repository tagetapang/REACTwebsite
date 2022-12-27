import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
function App() {
  const [mode, setmode] = useState("light");
  const [cswitch, setcswitch] = useState("enable dark mode");
  const [alert, setalert] = useState(null);
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
      showalert("this is the message", "danger");
    } else {
      showalert("this is the second message", "success");
      setstyleabout({
        color: "black",
        backgroundColor: "white",
      });

      setmode("light");
      setcswitch("enable dark mode");
      document.body.style.backgroundColor = "white";
    }
  };
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };
  return (
    <>
    <Router>
      <Navbar
        title="TagZiro"
        list="otherlist"
        mode={mode}
        togglemode={toogle}
        scolor={cswitch}
      />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/About" element={ <About mode={styleabout} />}/>
         
       
        <Route exact path="/" element = { <Textform
            titletext="enter the text here"
            showalert={showalert}
            mode={mode}
          />}/> 
         
      </Routes>
    </Router>
    </>
  );
}

export default App;
