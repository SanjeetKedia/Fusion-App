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
    <div>
      <label htmlFor="solar-size">
        Solar Size:{" "}
        <input
          type="number"
          name="solarSize"
          id="solar-size"
          onChange={handleChange}
          value={state.solarSize}
        />
      </label>
      <label htmlFor="sun-hour">
        Sun Hour:{" "}
        <input
          type="number"
          name="sunHour"
          id="sun-hour"
          onChange={handleChange}
          value={state.sunHour}
        />
      </label>
      <label htmlFor="panel-eff">
        Panel Efficiency:{" "}
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
