import BoardWrite from "../../../src/components/units/board/10-write/BoardWrite.container";

const GraphqlMutationPage = () => {
  return <>{BoardWrite({ isEdit: false })}</>;
  // 윗 줄과 아랫 줄의 의미는 같다.
  // return <BoardWrite isEdit={false} />;
};

export default GraphqlMutationPage;
