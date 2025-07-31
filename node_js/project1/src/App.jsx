import React from "react";
import Contact from "./contact";
import Home from './home';
import About from "./about";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App(){
  return(
    <div>
    <h1>Hello React !</h1>
    <Router>
        <Link to="/Home">Home|</Link>
        {/* <br/> */}
        <Link to="/About">About|</Link>
        {/* <br/> */}
        <Link to="/Contact">Contact</Link>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>

    {/* <Home /> <About /> */}
    </div>
  );
}
export default App;

