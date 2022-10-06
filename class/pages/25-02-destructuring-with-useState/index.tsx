import { useState } from "react";

const CounterStatePage = () => {
  const result = useState(0);

  const plus = () => {
    result[1](result[0] + 1); // count = count + 1
  };
  const minus = () => {
    result[1](result[0] - 1);
  };
  return (
    <div>
      <div id="count">{result[0]}</div>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default CounterStatePage;
