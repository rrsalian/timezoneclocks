import { Clock } from "../../models/Clock";
import { ClockDisplay } from "../ClockDisplay/ClockDisplay";
import { ClockSettings } from "../ClockSettings/ClockSettings";

// export function Clk(props: {clock: Clock , onUpdate: (clock:Clock) => void, onDelete: (clock: Clock) => void})
export function Clk(props: {clock: Clock}) {
        
    return (
        <table>
            <tr>
            <td>                  
                <ClockSettings></ClockSettings>
            </td>
            <td>
                <ClockDisplay clock={props.clock}></ClockDisplay>
            </td>
           </tr>
        </table>
    )
}