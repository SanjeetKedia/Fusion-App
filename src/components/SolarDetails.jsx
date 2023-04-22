import React from "react";

// Helpers
import { getNameVal } from "../utils/helpers";

const SolarDetails = (props) => {
  const handleChange = (e) => {
    const [name, value] = getNameVal(e);

    props.onChange(name, value);
  };

  const state = props.solarState;

  return (
    <div className="solar-details">
      <label htmlFor="solar-size">
        <p>Solar Size: </p>
        <input
          type="number"
          name="solarSize"
          id="solar-size"
          onChange={handleChange}
          value={state.solarSize}
        />
      </label>
      <label htmlFor="sun-hour">
        <p>Sun Hour: </p>
        <input
          type="number"
          name="sunHour"
          id="sun-hour"
          onChange={handleChange}
          value={state.sunHour}
        />
      </label>
      <label htmlFor="panel-eff">
        <p>Panel Efficiency: </p>
        <input
          type="number"
          name="panelEff"
          id="panel-eff"
          onChange={handleChange}
          value={state.panelEff}
        />
      </label>
    </div>
  );
};

export default SolarDetails;
