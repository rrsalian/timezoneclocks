import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Clock } from './models/Clock'
import { Clocks } from './components/Clocks/Clocks';
import { Settings } from './components/Settings/Settings';

function App() {
  const [ clocks, setClocks ] = useState<Clock[]>([]);
    

  return (
    <div className="App">
      <Clocks></Clocks>
      <Settings></Settings>
    </div>
  );
}

export default App;
