import React  from 'react';
import Navbar from './components/Navbar/Navbar';
import Herosection from './components/Herosection/Hero-sect';
import Thirdsection from './components/Thirdsection/Third-sect';
import Twocontainers from './components/Twocontainers/Twocontainer';

import './App.css';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <Thirdsection />
      <Twocontainers />
    </div>
  );
}

export default App;

