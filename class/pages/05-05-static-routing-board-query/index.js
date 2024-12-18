import { useRouter } from "next/router";

const StaticRoutingPage = () => {
  const router = useRouter();

  const onClickMove1 = async (event) => {
    router.push(`/05-06-static-routed-board-query/1`);
  };
  const onClickMove2 = async (event) => {
    router.push(`/05-06-static-routed-board-query/2`);
  };
  const onClickMove3 = async (event) => {
    router.push(`/05-06-static-routed-board-query/3`);
  };
  return (
    <>
      <button onClick={onClickMove1}>1번 게시글로 이동하기</button>
      <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
      <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
    </>
  );
};

export default StaticRoutingPage;
