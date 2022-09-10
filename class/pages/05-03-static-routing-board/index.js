import { useRouter } from "next/router";

const StaticRoutingPage = () => {
  const buttonArray = [{ number: 1 }, { number: 2 }, { number: 3 }];
  const router = useRouter();
  // const onClickMove = async (event) => {
  //   console.log(event.target);
  //   router.push(`/05-04-static-router/${num}`);
  // };
  const onClickMove1 = async (event) => {
    router.push(`/05-06-static-routed-board/1}`);
  };
  const onClickMove2 = async (event) => {
    router.push(`/05-04-static-routed-board/2}`);
  };
  const onClickMove3 = async (event) => {
    router.push(`/05-04-static-routed-board/3}`);
  };
  return (
    <>
      {/* {buttonArray.map((button, id) => (
        <>
          <button onClick={onClickMove} id={id}>
            {button.number}번 게시글로 이동하기
          </button>
          <hr />
        </>
      ))} */}
      <button onClick={onClickMove1}>1번 게시글로 이동하기</button>
      <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
      <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
    </>
  );
};

export default StaticRoutingPage;
