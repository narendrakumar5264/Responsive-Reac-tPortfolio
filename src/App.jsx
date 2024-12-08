import React, { useState } from 'react'; // Import useState
import './App.css'; // Import the styles
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Project from './components/Project';
import Foot from './components/Footer';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';

function App() {
  const [darkMode, setDarkMode] = useState(false); // State for Day/Night Mode

  return (
    <>
      {/* Apply dark or light mode classes dynamically */}
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
        }`}
      >
        {/* Pass darkMode and setDarkMode as props to Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Portfolio darkMode={darkMode} />
        <Project darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Foot darkMode={darkMode} />
      </div>
      <Toaster />
    </>
  );
}

export default App;
