import { memo } from "react";

const MemoizationChildPage = () => {
  console.log("자식이 렌더링 됩니다.");

  return (
    <>
      <div>===================</div>
      <h1>Child Component</h1>
      <div>===================</div>
    </>
  );
};

export default MemoizationChildPage;

// HOC로 작동하는 React.memo() !!
// 부모의 state가 바뀔 때 마다 자식도 같이 리렌더링 되는 것은 너무나도 당연하다.
// 하지만 자식은 부모의 상태가 어떤지에 영향을 받지 않고 항상 같은 값을 유지하기 때문에
// 계속 리렌더링이 되는 것은 성능면에서 절대 좋다고 볼 수는 없다.
// 이럴 때 사용할 수 있는 것이 React.memo()이다.
// 인자로 불필요하게 렌더링되는 컴포넌트를 넣어주면 해당 컴포넌트를 기억해놓았다가
// 리렌더링 되는 것을 막아준다.

// 크롬 익스텐션인 React Dev Tools를 설치하면 리액트 베이스인 홈페이지에서 개발자 도구를
// 켰을 때, Profiler라는 기능을 사용할 수 있다.
// 이 기능을 통해 memo()의 효율성을 측정할 수 있다.

// React.memo 는 어떻게 referesh가 되나? useMemo 또는 userMutation은 [deps]로
// refresh를 시키지만, React.memoㅡ 상위 컴포넌트에서 prop[]
