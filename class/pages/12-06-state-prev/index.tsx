import { useState } from "react";

const CounterStatePage = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount((prev) => prev + 1); // count = count + 1
    setCount((prev) => prev + 1); // count = count + 1
    setCount((prev) => prev + 1); // count = count + 1
    setCount((prev) => prev + 1); // count = count + 1
  };
  const minus = () => {
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <div id="count">{count}</div>
      <button onClick={plus}>카운트 4 올리기</button>
      <button onClick={minus}>카운트 4 내리기</button>
    </div>
  );
};

export default CounterStatePage;
