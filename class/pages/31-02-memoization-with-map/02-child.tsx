import { memo } from "react";

const Word = ({ el }: string) => {
  console.log("자식이 렌더링 됩니다.", el);

  return <>{el}</>;
};

export default memo(Word);

// memo로 hoc를 적용한 컴포넌트가 map으로 인해 돌려졌을 때,
// 같은 key와 el을 가진 부분은 리렌더링이 일어나지 않고,
// key 또는 el이 바뀐 부분만 리렌더링이 일어난다.

// -> props 가 dependency의 역할을 하고 있음을 잘 보여주는 예

// key값을 uuidv4()로 바꿔주면 key가 항상 랜덤값으로 지정되어 props로 넘어오기 때문에
// 항상 모두 리렌더링 된다!!

// -> 중고마켓이나 프리보드에 적용시킬 수 있을 듯...!!
