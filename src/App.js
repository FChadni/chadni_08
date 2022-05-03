import React from "react";
import './App.css';
import Home from "./pages/home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Display from "./pages/display";

function App() {
  return (
    <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/display" element={<Display/>}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
