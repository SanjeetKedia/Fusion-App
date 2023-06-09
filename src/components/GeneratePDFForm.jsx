import React from "react";

// Get the calculator object
import { Calculator } from "../utils/helpers";
import { prepareForGeneration } from "../utils/helpers";

const GeneratePDFForm = (props) => {
  const handleClick = (e) => {
    e.preventDefault();

    const calcObj = new Calculator(
      props.loadTableArr,
      props.batteryDet,
      props.solarDet
    );

    const extraInfo = {
      name: "Thuya Tun",
      phoneNo: "09785144066",
      address: "Mandalay",
    };

    // console.log(calcObj);
    prepareForGeneration(calcObj, extraInfo);
  };

  return (
    <form>
      <button onClick={handleClick}>Generate PDF</button>
    </form>
  );
};

export default GeneratePDFForm;
