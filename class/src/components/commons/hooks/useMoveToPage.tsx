import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";

const useMoveToPage = () => {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);
  const onClickMoveToPage = (path) => () => {
    setVisitedPage(path);
    void router.push(path);
  };

  return {
    visitedPage,
    onClickMoveToPage,
  };
};

export default useMoveToPage;
