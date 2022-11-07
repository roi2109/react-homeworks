import Button from "./Button";
import { useState } from "react";
import Counter from "./counter";

const CreateNewCounter = ({ configuration }) => {
  const [counterList, setCounterList] = useState([]);

  const addCounter = () => {
    console.log(configuration.minValue, configuration.maxValue);
    setCounterList(
      counterList.concat(
        <Counter
          min={Number(configuration.minValue)}
          max={Number(configuration.maxValue)}
          initial={Number(configuration.initialValue)}
          steps={Number(configuration.stepsValue)}
          key={counterList.length}
        />
      )
    );
  };

  return (
    <>
      <Button fn={addCounter} />
      <div>{counterList}</div>
    </>
  );
};
export default CreateNewCounter;
