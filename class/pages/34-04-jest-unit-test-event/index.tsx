import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0);

  const qqq = Math.random();

  console.log(qqq);

  function onClickCountUp() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div role="count">{count}</div>
      <button role="count-button" onClick={onClickCountUp}>
        {/* role을 정해서 test파일에서 추적할 수 있게!! */}
        카운트 올리기!!!
      </button>
    </>
  );
}
