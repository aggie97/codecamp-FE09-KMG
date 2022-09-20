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
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { IBoardArray } from "./BoardList.types";
const BoardList = () => {
  const router = useRouter();
  const { data: totalBoards, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: totalBoardsCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);

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

  const { data: bestBoards } =
    useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BEST_BOARDS);
  // const boardsCount = useQuery(FETCH_BOARDS_COUNT);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setTitleSearch(event.target.value);
    const titles: IBoardArray[] | undefined = totalBoards?.fetchBoards.filter(
      (board) => board.title.includes(event.target.value)
    );

    setBoardsArray(titles);
  };

  // const [year, month, day] = createdAt.slice(0, 10).split("-");
  return (
    <BoardListUI
      boardsArray={boardsArray}
      onClickCreate={onClickCreate}
      totalBoards={totalBoards}
      bestBoards={bestBoards}
      onClickListItem={onClickListItem}
      onClickBestItem={onClickBestItem}
      onChangeSearch={onChangeSearch}
      refetch={refetch}
      count={totalBoardsCount?.fetchBoardsCount}
    />
  );
};

export default BoardList;
