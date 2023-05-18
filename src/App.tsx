//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from 'react-modal';
import { Clock } from './models/Clock';
import { ClockForm  } from './components/ClockForm/ClockForm';
import { ClockList } from './components/ClockList/ClockList';
import { TimeZone } from './models/TimeZone';

const customStyles = {
  content: {    
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#F9F9A1',
    border: '3px solid grey', 
    borderRadius: '5px',
    width: '300px',
    height: '250px',
    fontSize: '18px',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
};

Modal.setAppElement('#root');

function App() {
  
  const [modalIsOpen, setIsOpen] = useState(false);
  const [clocks, setClocks ] = useState<Clock[]>([]);
  
  const timeZones:TimeZone[] = [
    { label: 'New York (EST)', value: "America/New_York" },
    { label: 'Chicago (CST)', value: 'America/Chicago' },
    { label: 'Denver (MST)', value: 'America/Denver' },
    { label: 'Los Angeles (PST)', value: "America/Los_Angeles" },
    { label: 'London (GMT)', value: 'Europe/London' },
    { label: 'Paris (CET)', value: 'Europe/Paris' },
    { label: 'Tokyo (JST)', value: 'Asia/Tokyo' }
  ];

  const [tZS, setTZS] = useState(timeZones);

  function closeModal() {
    setIsOpen(false);
  }

 function addClock(newClock: Clock):void {
    const i = clocks.length;
    let lastId = 0;
    
    if (i > 0)
      lastId = clocks[i - 1].id;

    
    if (lastId !== undefined) {
      newClock = { ...newClock, id: lastId + 1};
      setClocks([...clocks, newClock]);
      setTZS(tZS.filter(t => t.value !== newClock.timeZone));
    }      
  }

  function deleteClock(clock:Clock): void {
    
    const newValue = timeZones.find(c => c.value === clock.timeZone);
    if (newValue !== undefined) 
      setTZS([...tZS, newValue]);
    setClocks(clocks.filter(c => c.id !== clock.id));
  }
  
  function updateClock(updClock: Clock): void {
     //setClocks(updClock);
  }

  
  return (
    <div className="App">
      <h1>Clock App</h1>
      <button onClick={() => setIsOpen(true)}>Add Clock</button>      
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">  

        <ClockForm onClose={() => setIsOpen(false)} timeZones={tZS} onSubmitForm={(newClock: Clock) =>{addClock(newClock)}}></ClockForm>
      </Modal>
      <div>
        {
         <ClockList clocks={clocks} onDelete={deleteClock} timeZones={tZS}></ClockList>
        }
      </div>

    </div>
  );
}

export default App;

