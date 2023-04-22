import { useState } from "react";
// Importing Styles
import "../styles/Details.scss";
import "../styles/LoadCalculator.scss";
// Importing Defaults
import {
  defaultBattery,
  defaultLoadTable,
  defaultResults,
  defaultSolar,
} from "../utils/defaults";
// Import Components
import LoadTable from "../components/LoadTable";
import BatteryDetails from "../components/BatteryDetails";
import SolarDetails from "../components/SolarDetails";
import Results from "../components/Results";
// Importing Helpers
import { Calculator } from "../utils/helpers";

const LoadCalculator = () => {
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
    <form className="calculator-app" onSubmit={handleSubmit}>
      <LoadTable onChange={handleLoadTableChange} tableState={loadTableArr} />
      <div className="battery-solar-details">
        <BatteryDetails
          batteryState={batteryDet}
          onChange={handleBatteryChange}
        />
        <hr className="line-break" />
        <SolarDetails solarState={solarDet} onChange={handleSolarChange} />
      </div>
      <hr className="hr"></hr>
      <button className="submit-button" type="submit">
        Submit
      </button>
      <Results results={results} />
    </form>
  );
};

export default LoadCalculator;
