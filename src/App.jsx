import React, { useState } from "react";
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


const App = () => {
  const [mode, setmode] = useState(`light`);
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1400);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#042743";
      showalert(" Dark mode has been enabled!", "success");
    } else {
      setmode('light');
      document.body.style.backgroundColor = "cyan";
      showalert(" Light mode has been enabled!", "success");
    }
  }

  return (
    <Router>
      <Navbar title="🗺️ Word Explorer" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />

      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Textform showalert={showalert} mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
