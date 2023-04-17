import React from "react";

const LoadTableRow = (props) => {
  return (
    <tr>
      <td>{props.i}</td>
      <td>
        <input
          type="number"
          name="watt"
          id="watt"
          value={props.row.watt}
          onChange={(e) => props.handleChange(e, props.i)}
        />
      </td>
      <td>
        <input
          type="number"
          name="qty"
          id="qty"
          value={props.row.qty}
          onChange={(e) => props.handleChange(e, props.i)}
        />
      </td>
      <td>
        <input
          type="number"
          name="dayTime"
          id="dayTime"
          value={props.row.dayTime}
          onChange={(e) => props.handleChange(e, props.i)}
        />
      </td>
      <td>
        <input
          type="number"
          name="backUp"
          id="backUp"
          value={props.row.backUp}
          onChange={(e) => props.handleChange(e, props.i)}
        />
      </td>
    </tr>
  );
};

export default LoadTableRow;
