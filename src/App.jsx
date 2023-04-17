// Importing states
import React, { useState } from "react";
// Importing Css
import "./App.css";
// Importing Defaults
import {
  defaultBattery,
  defaultLoadTable,
  defaultResults,
  defaultSolar,
} from "./utils/defaults";
// Importing Components
import LoadTable from "./components/LoadTable";
import BatteryDetails from "./components/BatteryDetails";
import SolarDetails from "./components/SolarDetails";
import Results from "./components/Results";
// Importing Helpers
import { Calculator } from "./utils/helpers";

function App() {
  const [loadTableArr, setLoadTableArr] = useState(defaultLoadTable);
  const [batteryDet, setBatteryDet] = useState(defaultBattery);
  const [solarDet, setSolarDet] = useState(defaultSolar);
  const [results, setResults] = useState(defaultResults);

  const handleLoadTableChange = (name, val, i) => {
    setLoadTableArr((prev) => {
      return prev.map((obj) => {
        if (obj.rowId == i) {
          return {
            ...obj,
            [name]: val,
          };
        }
        return obj;
      });
    });
  };

  const handleBatteryChange = (name, value) => {
    setBatteryDet((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSolarChange = (name, value) => {
    setSolarDet((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const calcObj = new Calculator(loadTableArr, batteryDet, solarDet);

    setResults(calcObj.getUnits);
  };

  return (
    <div className="App">
      <form className="calculator-app" onSubmit={handleSubmit}>
        <LoadTable onChange={handleLoadTableChange} tableState={loadTableArr} />
        <div>
          <BatteryDetails
            batteryState={batteryDet}
            onChange={handleBatteryChange}
          />
          <SolarDetails solarState={solarDet} onChange={handleSolarChange} />
        </div>
        <Results results={results} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
