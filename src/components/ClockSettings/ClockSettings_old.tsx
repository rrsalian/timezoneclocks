import { Clock } from "../../models/Clock"
import { ClockForm } from "../ClockForm/ClockForm"


//props: {clock: (newClock: Clock) => void}
export function ClockSettings( props:Clock ) {

    return (
        <div></div>
        // <ul>
        //     <div>
        //         <label>TimeZone</label>
        //     </div>
        //     <div>
        //         <input type="text" >{props.clock.timeZone}</input>
        //     </div>
        //     <input type="checkbox" checked={props.clock.isDigital}></input>                  
        //     <label>Digital?</label>
        //     <div> 
        //     <button>Delete</button>
        //     </div>
        // </ul>
        // <div>
        //     <ClockForm onSubmitForm={(newClock: Clock) => props.clock={newClock}}></ClockForm> 
        // </div>
    )
}