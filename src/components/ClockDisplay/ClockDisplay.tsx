import { useState,useEffect } from "react";
import { AnalogClock } from "../AnalogClock/AnalogClock"

function getCurrentTime() :string {

  return (new Intl.DateTimeFormat([], {
    timeZone: 'Australia/Sydney',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }).format(new Date()))
  
}

export function ClockDisplay() {

    const [ time, setTime ] = useState(getCurrentTime().split(":"));
    
    useEffect(()=> {

      let timer = setInterval(() => setTime(getCurrentTime().split(":")), 1000);
    
      return function cleanup() {
        clearInterval(timer);
      }
    
    });    

    return (
        <div>
          <AnalogClock time={time}></AnalogClock>      
          <div>
            {time[0]}:{time[1]}:{time[2]}
          </div>
      
      </div>
    )
}