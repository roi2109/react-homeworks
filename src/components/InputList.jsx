const Inputs = ({
  setMinValue,
  setMaxValue,
  setInitialValue,
  setStepsValue,
}) => {
  return (
    <>
      <label htmlFor="min">min</label>
      <input
        onInput={(e) => {
          setMinValue(e.target.value);
        }}
        type="number"
        name=""
        id="min"
      />
      <label htmlFor="max">max</label>
      <input
        onInput={(e) => {
          setMaxValue(e.target.value);
        }}
        type="number"
        name=""
        id="max"
      />
      <label htmlFor="initial">initial</label>
      <input
        onInput={(e) => {
          setInitialValue(e.target.value);
        }}
        type="number"
        name=""
        id="initial"
      />
      <label htmlFor="steps">steps</label>
      <input
        onInput={(e) => {
          setStepsValue(e.target.value);
        }}
        type="number"
        name=""
        id="steps"
      />
    </>
  );
};
export default Inputs;
