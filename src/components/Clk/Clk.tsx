import { Clock } from "../../models/Clock";
import { ClockDisplay } from "../ClockDisplay/ClockDisplay";
import { ClockSettings } from "../ClockSettings/ClockSettings";
import "./Clk.css"

//onUpdate : (updClock: Clock) => void

export function Clk(props: {clock: Clock, onDelete : (clock: Clock) => void}) {
    return (        
        <table className="table">
            <thead></thead>
            <tbody>
            <tr className="colHeader">
                <th className="colHeader"><b>Settings</b></th>
                <th className="colHeader"><b>Clocks</b></th>
            </tr>
            <tr className="row">
                <td className="settings">
                    <ClockSettings clock={props.clock} onDelete={props.onDelete}></ClockSettings>
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