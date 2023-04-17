import React from "react";

const LoadTableRow = (props) => {
  const row = props.row;
  return (
    <tr>
      <td>{props.i}</td>
      <td>
        <input
          type="number"
          name="watt"
          id="watt"
          value={row.watt}
          onChange={(e) => props.handleChange(e, props.i)}
        />
      </td>
      <td>
        <input
          type="number"
          name="qty"
          id="qty"
          value={row.qty}
          onChange={(e) => props.handleChange(e, props.i)}
        />
      </td>
      <td>
        <input
          type="number"
          name="daytimeHour"
          id="dayTime"
          value={row.daytimeHour}
          onChange={(e) => props.handleChange(e, props.i)}
        />
      </td>
      <td>
        <input
          type="number"
          name="backupHour"
          id="backUp"
          value={row.backupHour}
          onChange={(e) => props.handleChange(e, props.i)}
        />
      </td>
    </tr>
  );
};

export default LoadTableRow;
