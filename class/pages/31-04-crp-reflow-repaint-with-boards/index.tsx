import { useQuery, gql } from "@apollo/client";

import { MouseEvent } from "react";
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
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.target.id) });
  };

  console.log(data?.fetchBoards);

  return (
    <>
      {/* 임시 배열 10개를 생서하여, 데이터가 없을 때도 높이 30px을 유지하여 reflow 방지 */}
      {(data?.fetchBoards ?? new Array(10).fill(1)).map((el) => (
        <div key={el._id} style={{ height: "30px" }}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
        </div>
      ))}

      {new Array(10).fill(1).map((_, i) => (
        <span
          key={i + 1}
          style={{ margin: "10px" }}
          id={String(i + 1)}
          onClick={onClickPage}
        >
          {i + 1}
        </span>
      ))}
    </>
  );
}
