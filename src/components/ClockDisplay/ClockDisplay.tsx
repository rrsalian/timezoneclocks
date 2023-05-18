import { useState, useEffect } from "react";
import { Clock } from "../../models/Clock";
import { AnalogClock } from "../AnalogClock/AnalogClock";

function getCurrentTime(tZ: string | null): string[] {
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString([], {
    timeZone: tZ || undefined,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return currentTime.split(":");
}

export function ClockDisplay(props: { clock: Clock }) {
  const [time, setTime] = useState(getCurrentTime(props.clock.timeZone));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime(props.clock.timeZone));
    }, 0);

    return function cleanup() {
      clearInterval(timer);
    };
  }, [props.clock.timeZone]);

  const displayAnalogClock = !props.clock.isDigital && props.clock.timeZone;

  return (
    <div>
      {displayAnalogClock ? (
        <AnalogClock time={time} tZn={props.clock.timeZone} />
      ) : (
        <div>
          <div>
            <b>
              {props.clock.timeZone ? `${time[0]}:${time[1]}:${time[2]}` : "Please select timezone"}
            </b>
          </div>
          <div  className="tz-digital">
            <b>{props.clock.timeZone}</b>
          </div>
        </div>
      )}
    </div>
  );
}
