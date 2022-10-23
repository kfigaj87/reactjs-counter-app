import React from "react";

import "./Step.css";

const Step = (props) => {
  let inputStep = null;
  return (
    <form>
      <label>Krok</label>
      <input
        ref={(data) => {
          inputStep = data;
        }}
        onChange={() => props.updateStep(inputStep.value)}
        type="number"
        value={props.stepValue}
      ></input>
    </form>
  );
};
export default Step;
