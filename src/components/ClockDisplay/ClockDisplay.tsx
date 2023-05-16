import { useState,useEffect } from "react";
import { Clock } from "../../models/Clock";
import { AnalogClock } from "../AnalogClock/AnalogClock"

function getCurrentTime(tZ: string) :string {
  return (new Intl.DateTimeFormat([], {
    timeZone: tZ,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }).format(new Date()))  
}

export function ClockDisplay(props: {clock : Clock}) {
    
    const [ time, setTime ] = useState(getCurrentTime(props.clock.timeZone).split(":"));
    
    useEffect(()=> {
      let timer = setInterval(() => setTime(getCurrentTime(props.clock.timeZone).split(":")), 1000);
      return function cleanup() {
        clearInterval(timer);
      }    
    });    

    return (
        <div>
          {!props.clock.isDigital ?            
            (<AnalogClock time={time} tZn={props.clock.timeZone}/>)
            :
            (<div>
              <div>
                <b>
                  {time[0]}:{time[1]}:{time[2]}
                </b>
              </div>
              <div>
                <b>
                  {props.clock.timeZone}
                </b>
              </div>
             </div>)
          }
        </div>
    )
}