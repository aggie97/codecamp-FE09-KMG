import { useEffect, useState } from "react";
import Router from "next/router";

export default function ClassCounterPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("처음 렌더링 되면 실행");
    return () => {
      console.log("컴포넌트가 화면에서 사라지기 전 실행");
    };
  }, []);

  useEffect(() => {
    console.log("변경되고 나서 실행!");
  });

  /* 
  useEffect의 잘못된 사용 예시

  useEffect(() => {
    setState(prev => prev + 1);
  })

  왜 잘못된 사용인가?
  
  실행순서
  1. 맨 처음 렌더링 될 때 setState로 인해 값이 변경된다.
  2. 값이 변경됨에 따라 리렌링 된다.
  3. useEffect()에 deps가 없으므로 리렌더링이 일어나면 다시 실행된다.
  4. setState가 또 바뀐다.
  5. 무한 반복 -> 무한 리렌더링
  */
  const onClickCountUp = () => {
    console.log(count);
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    console.log("채팅방을 나갑니다.");
    void Router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
