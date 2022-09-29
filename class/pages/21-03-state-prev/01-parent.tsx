import { useState } from "react";

const StatePrevPage = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount((prev) => prev + 1);

    setCount(function (prev) {
      return prev + 1;
    });

    setCount((prev) => {
      // 로직 추가 가능

      return prev + 1;
    });

    // 매개변수 바꿔보기
    setCount((asdfadsf) => asdfadsf + 1);
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

export default StatePrevPage;
