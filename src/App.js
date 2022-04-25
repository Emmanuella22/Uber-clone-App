import React  from 'react';
import Navbar from './components/Navbar/Navbar';
import Herosection from './components/Herosection/Hero-sect';
import Thirdsection from './components/Thirdsection/Third-sect';
import Twocontainers from './components/Twocontainers/Twocontainer';
import Fourthsection from './components/Fourthsection/Fourthsection';
import Ssection from './components/Ssection/Ssection';
import Signup from './components/Signup/Signup';
import Ubersection from './components/Ubersection/Ubersection';


import './App.css';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <Thirdsection />
      <Twocontainers />
      <Fourthsection />
      <Ssection />
      <Signup />
      <Ubersection />
    </div>
  );
}

export default App;

