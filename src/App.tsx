//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from 'react-modal';
import { Clock } from './models/Clock';
import { ClockSettings } from './components/ClockSettings/ClockSettings_old';
import { ClockForm  } from './components/ClockForm/ClockForm';
import { ClockList } from './components/ClockList/ClockList';
import { updateCall } from 'typescript';


const customStyles = {
  content: {    
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function App() {
  
  const [modalIsOpen, setIsOpen] = useState(false);
  const [clocks, setClocks ] = useState<Clock[]>([]);  
  
  function closeModal() {
    setIsOpen(false);
  }

  function updateClock():void {
    
  }

  function deleteClock():void {

  }

  return (
    <div className="App">
      <h1>Clock App</h1>
      <button onClick={() => setIsOpen(true)}>Add Clock</button>
      <div>
        {/*                  
          <ClockList onUpdate={(clock) => {updateClock}} onDelete={(clock) => {deleteClock}} clocks={clocks}></ClockList>
          */
          <ClockList clocks={clocks}></ClockList>
        }
      </div>

      <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">  
        
                <ClockForm onClose={() => setIsOpen(false)} onSubmitForm={(newClock: Clock) => setClocks([...clocks, newClock])}></ClockForm>
      </Modal>

    
    </div>
  );
}


export default App;

//<ContactList onUpdate={() => {}} onDelete={() => {}} contacts={contacts}></ContactList>