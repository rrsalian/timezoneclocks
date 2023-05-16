import { Clock } from "../../models/Clock";
import { ClockDisplay } from "../ClockDisplay/ClockDisplay";
import { ClockSettings } from "../ClockSettings/ClockSettings";
import "./Clk.css"
import { TimeZone } from "../../models/TimeZone";
//onUpdate : (updClock: Clock) => void

export function Clk(props: {clock: Clock, onDelete : (clock: Clock) => void, timeZones:TimeZone[]}) {
    return (        
        <table className="table">
            <thead></thead>
            <tbody>            
                <tr className="row">
                    <td className="settings">
                        <ClockSettings clock={props.clock} onDelete={props.onDelete} timeZones={props.timeZones}></ClockSettings>
                    </td>
                    <td className="display">
                        <ClockDisplay clock={props.clock}></ClockDisplay>
                    </td>
                </tr>
            </tbody>
            <tfoot></tfoot>
        </table>
    )
}

//<ClockSettings clock={props.clock} onDelete={props.onDelete} onUpdate={props.onUpdate}></ClockSettings>