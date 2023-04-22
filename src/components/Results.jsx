import React from "react";

import "../styles/Results.scss";

const Results = (props) => {
  const { results } = props;

  return (
    <div className="results-container">
      <p>Total Batteries: {results.batteryToUse}</p>
      <p>Minimum Solar Panels: {results.minimumModules}</p>
      <p>Optimum Solar Panels: {results.optimumModules}</p>
    </div>
  );
};

export default Results;
