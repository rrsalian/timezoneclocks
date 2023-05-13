import { useState } from "react";
import { Clock } from "../../models/Clock";

export function ClockForm( props: { onSubmitForm: (clock: Clock) => void , onClose: () => void } ) {

    const timezones = [
        { label: 'New York (EST)', value: 'America/New_York' },
        { label: 'Chicago (CST)', value: 'America/Chicago' },
        { label: 'Denver (MST)', value: 'America/Denver' },
        { label: 'Los Angeles (PST)', value: 'America/Los_Angeles' },
        { label: 'London (GMT)', value: 'Europe/London' },
        { label: 'Paris (CET)', value: 'Europe/Paris' },
        { label: 'Tokyo (JST)', value: 'Asia/Tokyo' }
    ];

    const [timeZone, setTimeZone] = useState(timezones[0].value);
    const [isDigital, setIsDigital] = useState(false);

    function handleFormSubmit(e: any) {
        e.preventDefault();

        const clock = {                
            timeZone: timeZone,
            isDigital: isDigital
        };        
        props.onSubmitForm(clock);
        props.onClose();      
    }

    return (
    <div>
        <button onClick={() => props.onClose()}>X</button>
        <form onSubmit={handleFormSubmit}>        
            <div>
                <label>TimeZone</label>
            </div>
            <select id="timezone-select" value={timeZone} onChange={e => setTimeZone(e.target.value)}>
                {timezones.map((timezone) => (
                    <option key={timezone.value} value={timezone.value}>{timezone.label}</option>
                    ))}
            </select>
            <div>
                <input type='checkbox' checked={isDigital} onChange={e => setIsDigital(e.target.checked)}></input>
                <label>Digital?</label>
            </div>
            <button>Add Clock</button>
        </form>        
    </div>
    )
}