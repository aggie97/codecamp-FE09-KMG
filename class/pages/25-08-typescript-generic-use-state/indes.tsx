export function useMyState<S>(initialValue: S): [S, (a: S) => void] {
  const myState = initialValue; // state 초기값 설정

  const mySetState = (inputValue: S) => {
    console.log(`${myState}에서 ${inputValue}로 state를 변경하겠습니다!"`); // 1. inputValue를 사용해서 myState 변경
    console.log(
      `변경된 ${inputValue}를 사용해서 컴포넌트를 리렌더링 하겠습니다!"`
    ); // 2. 컴포넌트를 리렌더링해줘 (class component의 render()함수 실행?)
  };

  return [myState, mySetState];
}

const [] = useMyState<number>(3);
