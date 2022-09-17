import BoardListUI from "./BoardList.presenter";
import FETCH_BOARDS, {
  FETCH_BEST_BOARDS,
  FETCH_BOARDS_COUNT,
} from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { IBoardArray } from "./BoardList.types";
const BoardList = () => {
  const router = useRouter();
  const [pages, setPages] = useState(1);
  const [titleSearch, setTitleSearch] = useState("");

  const [boardsArray, setBoardsArray] = useState<IBoardArray[] | undefined>([]);

  const onClickCreate = () => {
    void router.push(`/boards/new`);
  };
  const onClickListItem = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };
  const onClickBestItem = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };
  const { data: totalBoards } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS);

  const { data: bestBoards } =
    useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BEST_BOARDS);
  // const boardsCount = useQuery(FETCH_BOARDS_COUNT);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setTitleSearch(event.target.value);
    const titles: IBoardArray[] | undefined = totalBoards?.fetchBoards.filter(
      (board) => board.title.includes(event.target.value)
    );
    console.log(titles);
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
