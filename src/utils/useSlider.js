import { useState } from "react";

const useSlider = (min, max, step, defaultValue, label, id) => {
  const [state, setState] = useState(defaultValue);

  const handleChange = (e) => {
    setState(e.target.value);
    console.log(state);
  };

  const props = {
    id,
    min,
    max,
    step,
    defaultValue,
    value: state,
    valueLabelDisplay: "auto",
    onChange: handleChange,
  };
  return props;
};

export default useSlider;
