import { useState } from "react";

import "../styles/LoadTable.scss";
import LoadTableRow from "./LoadTableRow";

const LoadTable = (props) => {
  const [rowVals, setRowVals] = useState(props.defaultTable);

  const handleChange = (e, i) => {
    const name = e.target.name;
    const value = e.target.value;

    setRowVals((prev) => {
      return prev.map((obj) => {
        if (obj.rowId == i) {
          return {
            ...obj,
            [name]: value,
          };
        }
        return obj;
      });
    });
    props.onStateChange(obj);
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
        {rowVals.map((row, ind) => {
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
