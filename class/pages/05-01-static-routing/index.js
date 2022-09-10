import { useRouter } from "next/router";

const StaticRoutingPage = () => {
  const router = useRouter();
  const onClickMove = async () => {
    router.push("/05-02-static-router");
  };
  return <button onClick={onClickMove}>페이지 이동하기</button>;
};

export default StaticRoutingPage;
