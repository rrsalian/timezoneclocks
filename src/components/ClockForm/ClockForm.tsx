import { useState } from "react";
import { Clock } from "../../models/Clock";
import { TimeZone } from "../../models/TimeZone";
import "./ClockForm.css";

export function ClockForm(props: {
  onSubmitForm: (clock: Clock) => void;
  timeZones: TimeZone[];
  onClose: () => void;
}) {
  const tZS: TimeZone[] = props.timeZones;
  const [timeZone, setTimeZone] = useState(tZS.length > 0 ? tZS[0].value : "");
  const [isDigital, setIsDigital] = useState(false);

  function handleFormSubmit(e: any) {
    e.preventDefault();

    const clock = {
      id: 0,
      timeZone: timeZone,
      isDigital: isDigital,
    };
    props.onSubmitForm(clock);
    props.onClose();
  }

  if (tZS.length === 0) {
    return (
      <div className="modal">
        <div className="button-wrap">
          <button className="x-button" onClick={() => props.onClose()}>
            X
          </button>
        </div>
        <p>
          <b>No More Timezones Available</b>
        </p>
      </div>
    );
  }

  return (
    <div className="modal">
      <div className="button-wrap">
        <button className="x-button" onClick={() => props.onClose()}>
          X
        </button>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>TimeZone</label>
        </div>
        <select
          id="timezone-select"
          value={timeZone}
          onChange={(e) => setTimeZone(e.target.value)}
        >
          {tZS.map((timezone) => (
            <option placeholder="Please Select" key={timezone.value} value={timezone.value}>
              {timezone.label}
            </option>
          ))}
        </select>
        <div className="digital-button">
          <input
            className="digital-check"
            type="checkbox"
            checked={isDigital}
            onChange={(e) => setIsDigital(e.target.checked)}
          />
          <label>Digital?</label>
        </div>
        <button className="add-button">Add</button>
      </form>
    </div>
  );
}
