import { useRouter } from "next/router";

const StaticRoutingPage = () => {
  const router = useRouter();
  const buttonArr = [{ num: 1 }, { num: 2 }, { num: 3 }];
  const onClickMove = async (event) => {
    router.push(
      `/05-06-static-routed-board-query/${Number(event.target.id) + 1}`
    );
  };
  return (
    <>
      {buttonArr.map((button, index) => (
        <>
          <button id={index} onClick={onClickMove}>
            {button.num}번 게시글로 이동하기
          </button>
        </>
      ))}
    </>
  );
};

export default StaticRoutingPage;
