import { useState } from "react";
import { Clock } from "../../models/Clock";
import { ClockForm } from "../ClockForm/ClockForm";

type TimezoneOption = {
  label: string;
  value: string;
};

const timezones: TimezoneOption[] = [
    { label: 'New York (EST)', value: 'America/New_York' },
    { label: 'Chicago (CST)', value: 'America/Chicago' },
    { label: 'Denver (MST)', value: 'America/Denver' },
    { label: 'Los Angeles (PST)', value: 'America/Los_Angeles' },
    { label: 'London (GMT)', value: 'Europe/London' },
    { label: 'Paris (CET)', value: 'Europe/Paris' },
    { label: 'Tokyo (JST)', value: 'Asia/Tokyo' },
  ];
  
  
  export function ClockSettings () {
    const [selectedTimezone, setSelectedTimezone] = useState(timezones[0].value);
    const [showDigital, setShowDigital] = useState(false);
  
    const handleTimezoneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedTimezone(event.target.value);
    };
  
    const handleDigitalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setShowDigital(event.target.checked);
    };
  
    return (
      <div>
        <label>Timezone</label>
        <select id="timezone-select" value={selectedTimezone} onChange={handleTimezoneChange}>
          {timezones.map((timezone) => (
            <option key={timezone.value} value={timezone.value}>
              {timezone.label}
            </option>
          ))}
        </select>
        <div>
          <label>Digital</label>
          <input id="digital-checkbox" type="checkbox" checked={showDigital} onChange={handleDigitalChange} />
        </div>
        <button>Delete</button>
      </div>
    );
  };