import React  from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Herosection from './components/Herosection/Hero-sect.js';
import './App.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
    </div>
  );
}

export default App;
