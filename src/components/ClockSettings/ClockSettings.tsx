import { useState } from "react";
import { Clock } from "../../models/Clock";
import { TimeZone } from "../../models/TimeZone";
import './ClockSettings.css'


export function ClockSettings(props: {
  clock: Clock;
  onDelete: (clock: Clock) => void;
  onUpdate: (clock: Clock) => void;
  timeZones: TimeZone[];
}) {
  const [selectedTimezone, setSelectedTimezone] = useState(
    props.clock.timeZone || "" 
  );
  const [showDigital, setShowDigital] = useState(props.clock.isDigital);

  function onDelete() {
    props.onDelete({
      id: props.clock.id,
      timeZone: selectedTimezone || "", 
      isDigital: showDigital,
    });
  }
  function onUpdate() {
    props.onUpdate({
      id: props.clock.id,
      timeZone: selectedTimezone || "",
      isDigital: showDigital,
    });
  }

  const handleTimezoneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTimezone(event.target.value);
    props.onUpdate({
      id: props.clock.id,
      timeZone: event.target.value || "", 
      isDigital: showDigital,
    });
  };

  const handleDigitalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowDigital(event.target.checked);
    props.onUpdate({
      id: props.clock.id,
      timeZone: selectedTimezone || "", 
      isDigital: event.target.checked,
    });
  };

  return (
    <div>
      <div>
        <label>Timezone:</label>
      </div>
      <select className="select-box" value={selectedTimezone} onChange={handleTimezoneChange}>
        <option value="">Please select timezone</option> {}
        {props.timeZones.map((timezone) => (
          <option key={timezone.value} value={timezone.value}>
            {timezone.label}
          </option>
        ))}
      </select>
      <div className="digital-div">
        <input
          className="digital-checkbox"
          disabled={!selectedTimezone} 
          type="checkbox"
          checked={showDigital}
          onChange={handleDigitalChange}
        />
        <label>{selectedTimezone ? "Digital" : "Digital"}</label> {}
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
