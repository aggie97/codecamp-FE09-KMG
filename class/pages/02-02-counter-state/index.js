import { useState } from "react";

const CounterStatePage = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1); // count = count + 1
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div id="count">{count}</div>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default CounterStatePage;
