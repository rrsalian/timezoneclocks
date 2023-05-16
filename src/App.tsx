//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from 'react-modal';
import { Clock } from './models/Clock';
import { ClockForm  } from './components/ClockForm/ClockForm';
import { ClockList } from './components/ClockList/ClockList';

const customStyles = {
  content: {    
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#A1EEF9',
    border: '3px solid grey',
    borderRadius: '5px',
    width: '200px',
    height: '200px',
    fontSize: '18px',
    fontFamily: 'Arial, sans-serif',
  },
};

Modal.setAppElement('#root');

function App() {
  
  const [modalIsOpen, setIsOpen] = useState(false);
  const [clocks, setClocks ] = useState<Clock[]>([]);  
  
  function closeModal() {
    setIsOpen(false);
  }

  function addClock(newClock: Clock):void {
    let i = clocks.length;    
    newClock = { ...newClock, id : i + 1};    
    setClocks([...clocks, newClock]);        
  }

  function deleteClock(clock:Clock): void {
    //console.log(clock);
    //setClocks((prev) => [ ...prev.slice(0, 1), ...prev.slice(i + 1)]);
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

        <ClockForm onClose={() => setIsOpen(false)} onSubmitForm={(newClock: Clock) =>{addClock(newClock)}}></ClockForm>
      </Modal>
      <div>
        {
         <ClockList clocks={clocks} onDelete={deleteClock}></ClockList>
        }
      </div>

    </div>
  );
}

export default App;

