import "./App.css";
import Counter from "./components/counter";
import Inputs from "./components/InputList";
import { useState } from "react";

import CreateNewCounter from "./components/CreateNewCounter";

function App() {
  const [minValue, setMinValue] = useState(Number.MIN_SAFE_INTEGER);
  const [maxValue, setMaxValue] = useState(Number.MAX_SAFE_INTEGER);
  const [initialValue, setInitialValue] = useState(0);
  const [stepsValue, setStepsValue] = useState(1);

  let configuration = {
    minValue,
    maxValue,
    initialValue,
    stepsValue,
  };

  return (
    <div className="App">
      <Counter min={0} max={5} />
      <Counter min={-5} max={10} />
      <Inputs
        setInitialValue={setInitialValue}
        setMaxValue={setMaxValue}
        setMinValue={setMinValue}
        setStepsValue={setStepsValue}
      />
      <CreateNewCounter configuration={configuration} />
    </div>
  );
}

export default App;
