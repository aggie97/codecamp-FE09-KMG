import { useCallback, useMemo, useState } from "react";
import MemoizationChildPage from "./02-child";

const MemoizationParentPage = () => {
  console.log("부모가 렌더링 됩니다.");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 1. useMemo 로 변수 기억!!
  const aaa = useMemo(() => Math.random(), []);
  // 랜덤값을 저장해놓고, 컴포넌트 리렌더링이 일어나도 처음 저장해놓은 값을 유지한다.
  // 만약, 조건부로 값을 바꾸고 싶다면, [deps] 에 state값으로 재실행시키면 된다.
  // useEffect 와 비슷한 작동 방식을 가지고 있다.

  console.log(aaa);

  // 2. useCallback 으로 함수 기억!!
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // 3. useCallback 사용 시 주의사항 => state 사용 주의!!
  const onClickCountState = useCallback(() => {
    setCountState((prev) => prev + 1);
  }, []);
  // 내부의 state를 기억해버려서 state 값이 고정된다!!
  // -> state값이 고정되면 리렌더링이 일어나지 않게 된다!!
  // 그럼 어떻게 해야하나? prev 값을 가져와서 state를 바꿔주자!

  // 현재가 가장 최적화 되어 있는 상태라고 볼 수 있는 이유가,
  // 함수 자체는 기억을 해놓은 상태이므로, 리렌더링이 될 때 마다 함수를 다시 선언하지 않고 있고,
  // 기억해놓은 함수를 사용해서 state 값을 의도대로 바꾸고 있기 떄문이다.
  console.log(countState);

  // 4. useMemo 로 나만의 useCallback 만들어보기
  // const onClickCountState = useMemo(
  //   () => () => {
  //     setCountState((prev) => prev + 1);
  //   },
  //   []
  // );
  // 위처럼 사용은 잘 안함. 그저 할 수 있다는 걸 보여주는 예시일 뿐...

  return (
    <>
      <div>===================</div>
      <h1>Parent Component</h1>
      <div>===================</div>
      <div>카운트(let) : {countLet}</div>
      <div>카운트(state) : {countState}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>
      <button onClick={onClickCountState}>카운트(state) +1 올리기</button>
      <MemoizationChildPage />
    </>
  );
};

export default MemoizationParentPage;
