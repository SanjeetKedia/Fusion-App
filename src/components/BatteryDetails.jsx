import React from "react";
import "../styles/BatteryDetails.scss";

// Helpers
import { getNameVal } from "../utils/helpers";

const BatteryDetails = (props) => {
  const handleChange = (e) => {
    const [name, value] = getNameVal(e);

    props.onChange(name, value);
  };

  const state = props.batteryState;

  return (
    <div>
      <label htmlFor="ah">
        Battery Ah:{" "}
        <input
          type="number"
          name="ah"
          id="ah"
          value={state.ah}
          onChange={handleChange}
          min={0}
        />
      </label>
      <label htmlFor="v">
        Battery V:{" "}
        <input
          type="number"
          name="v"
          id="v"
          value={state.v}
          onChange={handleChange}
          min={0}
        />
      </label>
      <label htmlFor="dod">
        Battery DOD:{" "}
        <input
          type="number"
          name="dod"
          id="dod"
          value={state.dod}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default BatteryDetails;
