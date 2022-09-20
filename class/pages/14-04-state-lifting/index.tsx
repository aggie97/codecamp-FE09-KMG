import Child1 from "../../src/components/units/14-state-lifting/child1";
import Child2 from "../../src/components/units/14-state-lifting/child2";
import { useState } from "react";
const StateLiftingPage = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Child1 count={count} setCount={setCount} />
      <hr />
      <Child2 count={count} setCount={setCount} />
    </>
  );
};

export default StateLiftingPage;
