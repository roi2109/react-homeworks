import { useState } from "react";

const Counter = ({
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  initial = 0,
  steps = 1,
}) => {
  const [counter, setCounter] = useState(initial);
  const isNotMax = counter + steps <= max;
  const isNotMin = counter - steps >= min;
  const add = () => {
    if (isNotMax) setCounter((counter) => counter + steps);
  };
  const subtract = () => {
    if (isNotMin) setCounter((counter) => counter - steps);
  };
  const setColor = (counter) => {
    if (counter < 0) return "red";

    if (counter > 0 && counter < 16) return "orange";

    if (counter > 15) return "green";
  };
  return (
    <>
      <button disabled={!isNotMax} onClick={add}>
        +
      </button>
      <button disabled={!isNotMin} onClick={subtract}>
        -
      </button>
      <div style={{ color: setColor(counter) }}>{counter}</div>
    </>
  );
};
export default Counter;
