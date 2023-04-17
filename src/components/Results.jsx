import React from "react";

const Results = (props) => {
  const { results } = props;

  return (
    <div>
      <p>Total Batteries: {results.batteryToUse}</p>
      <p>Minimum Solar Panels: {results.minimumModules}</p>
      <p>Optimum Solar Panels: {results.optimumModules}</p>
    </div>
  );
};

export default Results;
