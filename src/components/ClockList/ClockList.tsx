import { Clock } from "../../models/Clock";
import { Clk } from "../Clk/Clk";
import { TimeZone } from "../../models/TimeZone";

export function ClockList(props: {
  clocks: Clock[];
  onDelete: (clock: Clock) => void;
  onUpdate: (updClock: Clock) => void;
  timeZones: TimeZone[];
}) {
  let title;

  if (props.clocks.length > 0) {
    title = (
      <h3>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr className="colHeader">
              <th className="colHeader">Settings</th>
              <th className="colHeader">Clocks</th>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </h3>
    );
  }
  return (
    <div>
      {title}
      {props.clocks.map((clock, key) => (
        <Clk
          key={clock.id}
          clock={clock}
          onDelete={props.onDelete}
          onUpdate={props.onUpdate}
          timeZones={props.timeZones}
        ></Clk>
      ))}
    </div>
  );
}

//onUpdate={props.onUpdate}
