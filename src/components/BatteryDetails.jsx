import React from "react";

// Helpers
import { getNameVal } from "../utils/helpers";

const BatteryDetails = (props) => {
  const handleChange = (e) => {
    const [name, value] = getNameVal(e);

    props.onChange(name, value);
  };

  const state = props.batteryState;

  return (
    <div className="battery-details">
      <label htmlFor="ah">
        <p>Battery Ah: </p>
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
        <p>Battery V: </p>
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
        <p>Battery DOD: </p>
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
