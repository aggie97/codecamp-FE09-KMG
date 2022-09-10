import { useRouter } from "next/router";

const DynamicRoutingPage = () => {
  const router = useRouter();

  const buttonArr = [
    { num: 1 },
    { num: 2 },
    { num: 3 },
    { num: 4 },
    { num: 100 },
  ];
  const onClickMove = async (event) => {
    router.push(`/05-08-dynamic-routed-board-query/${Number(event.target.id)}`);
  };
  return (
    <>
      {buttonArr.map((button) => (
        <>
          <button id={button.num} onClick={onClickMove}>
            {button.num}번 게시글로 이동하기
          </button>
          <hr />
        </>
      ))}
    </>
  );
};

export default DynamicRoutingPage;
