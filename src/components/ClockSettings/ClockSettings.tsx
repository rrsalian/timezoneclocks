import { useState } from "react";
import { Clock } from "../../models/Clock";
import { TimeZone } from "../../models/TimeZone";

export function ClockSettings (props: {clock : Clock, onDelete : (clock : Clock) => void, timeZones:TimeZone[]}) {
  
  const [selectedTimezone, setSelectedTimezone] = useState(props.clock.timeZone);
  const [showDigital, setShowDigital] = useState(props.clock.isDigital);
  
  function onDelete() {             
    props.onDelete({ id : props.clock.id, "timeZone" : selectedTimezone , "isDigital": showDigital });
  }

  // const handleTimezoneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {      
  //   setSelectedTimezone(event.target.value);
  //   //props.onUpdate({id : props.clock.id, "timeZone" : event.target.value , "isDigital": showDigital });
  //   console.log(event.target.value);
  // };
  
  // const handleDigitalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setShowDigital(event.target.checked);
  //   //props.onUpdate({id : props.clock.id, "timeZone" : selectedTimezone , "isDigital": event.target.checked });
  //   console.log(event.target.checked);
  // };
  
  return (
    <div>
      <div>
        <label>Timezone:</label>        
      </div>
      <input type="text" disabled value={selectedTimezone}></input>
      <div>          
        <input id="digital-checkbox" disabled type="checkbox" checked={showDigital}/>
        <label>Digital</label>
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};