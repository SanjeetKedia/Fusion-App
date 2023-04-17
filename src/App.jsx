import React, { useState } from "react";
import "./App.css";
import LoadTable from "./components/LoadTable";

import { defaultLoadTable } from "./utils/defaults";

function App() {
  const [loadArr, setLoadArr] = useState([]);

  const handleLoadArrChange = (newState) => {
    setLoadArr(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(loadArr);
  };

  return (
    <form className="App" onSubmit={handleSubmit}>
      <LoadTable
        onStateChange={handleLoadArrChange}
        defaultTable={defaultLoadTable}
        onSubmit={handleLoadArrChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
