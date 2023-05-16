import { useState } from "react";
import { Clock } from "../../models/Clock";
import { TimeZone } from "../../models/TimeZone";

export function ClockForm( props: { onSubmitForm: (clock: Clock) => void , timeZones:TimeZone[], onClose: () => void } ) {

    const tZS:TimeZone[] = props.timeZones;
    const [timeZone, setTimeZone] = useState(tZS[0].value);
    const [isDigital, setIsDigital] = useState(false);

    function handleFormSubmit(e: any) {
        e.preventDefault();
        
        const clock = {
            id : 0,
            timeZone: timeZone,
            isDigital: isDigital
        };
        props.onSubmitForm(clock);
        props.onClose();
    }

    return (
        <div className="modal">
            <button onClick={() => props.onClose()}>X</button>
            <form onSubmit={handleFormSubmit}>        
                <div>
                    <label>TimeZone</label>
                </div>
                <select id="timezone-select" value={timeZone} onChange={e => setTimeZone(e.target.value)}>
                    {tZS.map((timezone) => (
                        <option key={timezone.value} value={timezone.value}>{timezone.label}</option>
                        ))}
                </select>
                <div>
                    <input type='checkbox' checked={isDigital} onChange={e => setIsDigital(e.target.checked)}></input>
                    <label>Digital?</label>
                </div>
                <button>Add</button>
            </form>        
        </div>
    )
}