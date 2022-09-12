import BoardListUI from "./BoardList.presenter";
import FETCH_BOARDS, {
  FETCH_BEST_BOARDS,
  FETCH_BOARDS_COUNT,
} from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BoardList = () => {
  const router = useRouter();
  const [pages, setPages] = useState(1);

  const [titleSearch, setTitleSearch] = useState("");
  const [boardsArray, setBoardsArray] = useState({});

  const onClickCreate = async () => {
    router.push(`/boards/new`);
  };
  const onClickListItem = async (event) => {
    router.push(`/boards/${event.target.parentElement.id}`);
  };
  const onClickBestItem = async (event) => {
    console.log(event.target.closest("#BestParent > div"));
    router.push(`/boards/${event.target.closest("#BestParent > div").id}`);
  };
  const totalBoards = useQuery(FETCH_BOARDS);
  const bestBoards = useQuery(FETCH_BEST_BOARDS);
  const boardsCount = useQuery(FETCH_BOARDS_COUNT);

  const onChangeSearch = (event) => {
    setTitleSearch(event.target.value);
    const titles = totalBoards.data.fetchBoards.filter((board) =>
      board.title.includes(event.target.value)
    );
    setBoardsArray(titles);
  };

  // const [year, month, day] = createdAt.slice(0, 10).split("-");
  return (
    <BoardListUI
      boardsArray={boardsArray}
      pages={pages}
      onClickCreate={onClickCreate}
      totalBoards={totalBoards}
      bestBoards={bestBoards}
      onClickListItem={onClickListItem}
      onClickBestItem={onClickBestItem}
      onChangeSearch={onChangeSearch}
    />
  );
};

export default BoardList;
