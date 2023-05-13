import { Clock } from "../../models/Clock";
import { Clk } from "../Clk/Clk";

// export function ClockList(props: { clocks: Clock[], onUpdate: (clock:Clock) => void, onDelete: (clock:Clock) => void }) 

export function ClockList(props: { clocks: Clock[] }) {
    return (
        <div>
            <h3>Contacts</h3>
            { 
               props.clocks.map(clock => <Clk clock={clock}></Clk>)
            }
        </div>
    )
}