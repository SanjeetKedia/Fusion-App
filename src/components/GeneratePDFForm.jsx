import { useState } from "react";
// Import Styles
import "../styles/GeneratePDFForm.scss";
// Helpers
import {
  Calculator,
  changeState,
  prepareForGeneration,
} from "../utils/helpers";
// Defaults
import { defaultClientInfo } from "../utils/defaults";

const GeneratePDFForm = (props) => {
  const [clientInfo, setClientInfo] = useState(defaultClientInfo);

  const handleInputChange = (e) => {
    const target = e.target;
    changeState(setClientInfo, target.name, target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    const calcObj = new Calculator(
      props.loadTableArr,
      props.batteryDet,
      props.solarDet
    );

    // console.log(calcObj);
    prepareForGeneration(calcObj, clientInfo);
  };

  return (
    <form className="generateForm">
      <h3 className="header">Generate PDF</h3>
      <input
        type="text"
        name="name"
        id="name"
        value={clientInfo.name}
        onChange={(e) => handleInputChange(e)}
        placeholder="Name"
      />
      <input
        type="text"
        name="phoneNo"
        id="phoneNo"
        value={clientInfo.phoneNo}
        onChange={(e) => handleInputChange(e)}
        placeholder="Phone Number"
      />
      <input
        type="text"
        name="address"
        id="address"
        value={clientInfo.address}
        onChange={(e) => handleInputChange(e)}
        placeholder="Address"
      />
      <button onClick={handleClick}>Generate PDF</button>
    </form>
  );
};

export default GeneratePDFForm;
