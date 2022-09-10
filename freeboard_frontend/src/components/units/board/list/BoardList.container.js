import BoardListUI from "./BoardList.presenter";
import FETCH_BOARDS, {
  FETCH_BEST_BOARDS,
  FETCH_BOARDS_COUNT,
} from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const BoardList = () => {
  const router = useRouter();
  // const {
  //   loading,
  //   data = {
  //     // data는 useQuery로 비동기적으로 서버에 요청해서 받아오기 떄문에 완전히 받아오기 전까지는 undefined를 반환한다.
  //     // 이렇게 초기값을 지정해주면 data가 undefined 대신 빈 값을 받아온다.
  //     fetchBoards: {
  //       writer: "",
  //       createdAt: "",
  //       title: "",
  //       images: "",
  //       contents: "",
  //       youtubeUrl: "",
  //       likeCount: "",
  //       dislikeCount: "",
  //       boardAddress: { address: "", addressDetail: "" },
  //     },
  //   },
  // } = useQuery(FETCH_BOARDS, {
  //   variables: {
  //     boardId: router.query.id,
  //   },
  // });

  // const [addressBox, setAddressBox] = useState(false);

  const onClickCreate = async () => {
    router.push(`/boards/new`);
  };
  const onClickListItem = async (event) => {
    router.push(`/boards/${event.target.parentElement.id}`);
  };
  const onClickBestItem = async (event) => {
    console.log(event.target.closest("#BestParent > div"));
    // router.push(`/boards/${event.target.closest("#BestParent > div").id}`);
  };
  const totalBoards = useQuery(FETCH_BOARDS);
  const bestBoards = useQuery(FETCH_BEST_BOARDS);
  const boardsCount = useQuery(FETCH_BOARDS_COUNT);

  // const [year, month, day] = createdAt.slice(0, 10).split("-");
  return (
    <BoardListUI
      onClickCreate={onClickCreate}
      totalBoards={totalBoards}
      bestBoards={bestBoards}
      onClickListItem={onClickListItem}
      onClickBestItem={onClickBestItem}
    />
  );
};

export default BoardList;
