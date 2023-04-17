import React, { useState } from "react";
import "./App.css";
import LoadTable from "./components/LoadTable";

import { defaultLoadTable } from "./utils/defaults";

function App() {
  const [loadTableArr, setLoadTableArr] = useState(defaultLoadTable);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(loadTableArr);
  };

  return (
    <form className="App" onSubmit={handleSubmit}>
      <LoadTable onChange={handleLoadTableChange} tableState={loadTableArr} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
