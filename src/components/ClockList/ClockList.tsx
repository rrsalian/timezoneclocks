import { Clock } from "../../models/Clock";
import { Clk } from "../Clk/Clk";

// export function ClockList(props: { clocks: Clock[], onUpdate: (clock:Clock) => void, onDelete: (clock:Clock) => void }) 

export function ClockList(props: { clocks: Clock[] }) {
    let title;
    if (props.clocks.length > 0)
        {title = <h3>Clocks</h3>;}
   

    return (
        <div>            
            {title}            
            { 
               props.clocks.map(clock => <Clk clock={clock}></Clk>)
            }
        </div>
    )
}