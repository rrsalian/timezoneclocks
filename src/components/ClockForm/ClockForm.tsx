import { useState } from "react";
import { Clock } from "../../models/Clock";

export function ClockForm( props: { onSubmitForm: (clock: Clock) => void , onClose: () => void } ) {

    const [timeZone, setTimeZone] = useState('');
    const [isDigital, setIsDigital] = useState(false);

    function handleFormSubmit(e: any) {
        e.preventDefault();

        const clock = {                
            timeZone: timeZone, 
            isDigital: isDigital
        };
        console.log(clock);
        props.onSubmitForm(clock);        
    }

    return (
    <div>
        <button onClick={() => props.onClose()}>X</button>
        <form onSubmit={handleFormSubmit}>        
            <div>
                <label>TimeZone</label>
            </div>
            <div>
            <input type='text' value={timeZone} onChange={e => setTimeZone(e.target.value)}></input>
            </div>
            <div>
                <input type='checkbox' checked={isDigital} onChange={e => setIsDigital(e.target.checked)}></input>
                <label>Digital?</label>
            </div>
            <button>Add Clock</button>
        </form>        
    </div>
    )
}