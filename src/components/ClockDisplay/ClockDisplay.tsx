import { useState,useEffect } from "react";
import { AnalogClock } from "../AnalogClock/AnalogClock"

//import "./ClockDisplay.css"

function getCurrentTime() :string {

  return (new Intl.DateTimeFormat([], {
    timeZone: 'Australia/Sydney',   
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }).format(new Date()))
  
}

// props: { clocks: Clock[]}
export function ClockDisplay() {

    const [ time, setTime ] = useState(getCurrentTime().split(":"));
    
    // const secondsStyle = {
    //   transform: `rotate(${+time[2] * 6}deg)`
    // };
    // const minutesStyle = {
    //   transform: `rotate(${+time[1] * 6}deg)`
    // };
    // const hoursStyle = {
    //   transform: `rotate(${+time[0] * 30}deg)`
    // };

    useEffect(()=> {

      let timer = setInterval(() => setTime(getCurrentTime().split(":")), 1000);
    
      return function cleanup() {
        clearInterval(timer);
      }
    
    });    

    return (
        <div>
          <AnalogClock time={time}></AnalogClock>

          {/*<div className={"analog-clock"}>
            <div className={"dial seconds"} style={secondsStyle} />
            <div className={"dial minutes"} style={minutesStyle} />
            <div className={"dial hours"} style={hoursStyle} />
          </div> 
    */}  
          
      {
          <div className={"digital-clock"}>
            {time[0]}:{time[1]}:{time[2]}
          </div>
      }
      </div>
    )
}