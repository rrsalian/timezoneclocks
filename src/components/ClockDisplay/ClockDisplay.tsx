import { useState,useEffect } from "react";


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
    const [time, setTime] = useState(getCurrentTime());

    useEffect(()=> {

      let timer = setInterval(() => setTime(getCurrentTime()), 1000);
    
      return function cleanup() {
        clearInterval(timer);
      }
    
    });    

    return (
        <div>        
            <p>{time}</p>
        </div>
    )
}
