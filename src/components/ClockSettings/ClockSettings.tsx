import { useState } from "react";
import { Clock } from "../../models/Clock";


type TimezoneOption = {
  label: string;
  value: string;
};

const timezones: TimezoneOption[] = [
    { label: 'New York (EST)', value: "America/New_York" },
    { label: 'Chicago (CST)', value: 'America/Chicago' },
    { label: 'Denver (MST)', value: 'America/Denver' },
    { label: 'Los Angeles (PST)', value: "America/Los_Angeles" },
    { label: 'London (GMT)', value: 'Europe/London' },
    { label: 'Paris (CET)', value: 'Europe/Paris' },
    { label: 'Tokyo (JST)', value: 'Asia/Tokyo' },
  ];

export function ClockSettings (props: {clock : Clock, onDelete : (clock : Clock) => void}) {
  
  const [selectedTimezone, setSelectedTimezone] = useState(props.clock.timeZone);
  const [showDigital, setShowDigital] = useState(props.clock.isDigital);
  
  function onDelete() {           
    props.onDelete({ id : props.clock.id, "timeZone" : selectedTimezone , "isDigital": showDigital });
  }

  const handleTimezoneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {      
    setSelectedTimezone(event.target.value);
    //props.onUpdate({id : props.clock.id, "timeZone" : event.target.value , "isDigital": showDigital });
    console.log(event.target.value);
  };
  
  const handleDigitalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowDigital(event.target.checked);
    //props.onUpdate({id : props.clock.id, "timeZone" : selectedTimezone , "isDigital": event.target.checked });
    console.log(event.target.checked);
  };
  
  return (
    <div>
      <div>
        <label>Timezone:</label>        
      </div>
        <select id="timezone-select" disabled value={selectedTimezone} onChange={handleTimezoneChange}>
          {timezones.map((timezone) => (
            <option key={timezone.value} value={timezone.value}>
              {timezone.label}
            </option>
          ))}
        </select>
      
      <div>          
        <input id="digital-checkbox" disabled type="checkbox" checked={showDigital} onChange={handleDigitalChange} />
        <label>Digital</label>
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};