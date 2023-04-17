import { useState } from "react";

import "../styles/LoadTable.scss";
import LoadTableRow from "./LoadTableRow";

const LoadTable = (props) => {
  const handleChange = (e, i) => {
    const name = e.target.name;
    const value = e.target.value;

    props.onChange(name, value, i);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Watt</th>
          <th>Qty</th>
          <th>Day Time</th>
          <th>BackUp Hour</th>
        </tr>
      </thead>
      <tbody>
        {props.tableState.map((row, ind) => {
          const i = ind + 1;
          return (
            <LoadTableRow key={i} i={i} handleChange={handleChange} row={row} />
          );
        })}
      </tbody>
    </table>
  );
};

export default LoadTable;
