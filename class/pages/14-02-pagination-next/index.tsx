import { useQuery, gql } from "@apollo/client";

import { MouseEvent, useState } from "react";

import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function StaticRoutedPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.target.id) });
  };

  const onClickPrev = (event) => {
    setStartPage((prev) => {
      if (prev <= 10) return prev;
      return prev - 10;
    });
    void refetch({ page: Number(startPage - 10) });
  };
  const onClickNext = (event) => {
    setStartPage((prev) => prev + 10);
    void refetch({ page: Number(startPage + 10) });
  };

  console.log(data?.fetchBoards);

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
        </div>
      ))}
      <span onClick={onClickPrev}>이전</span>
      {new Array(10).fill(1).map((_, i) => (
        <span
          key={i + startPage}
          style={{ margin: "10px" }}
          id={String(i + startPage)}
          onClick={onClickPage}
        >
          {i + startPage}
        </span>
      ))}
      <span onClick={onClickNext}>다음</span>
    </>
  );
}
