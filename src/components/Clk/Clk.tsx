import { Clock } from "../../models/Clock";
import { ClockDisplay } from "../ClockDisplay/ClockDisplay";

// export function Clk(props: {clock: Clock , onUpdate: (clock:Clock) => void, onDelete: (clock: Clock) => void})
export function Clk(props: {clock: Clock}) {
    return (
        <span>
           <ClockDisplay></ClockDisplay>
        </span>
        
    )
}