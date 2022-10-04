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

  const onClickPage =
    (pageId: number) => (event: MouseEvent<HTMLSpanElement>) => {
      void refetch({ page: pageId });
    };

  console.log(data?.fetchBoards);

  return (
    <>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
        </div>
      ))}

      {new Array(10).fill(1).map((_, i) => (
        <span
          key={i + 1}
          style={{ margin: "10px" }}
          onClick={onClickPage(i + 1)}
        >
          {i + 1}
        </span>
      ))}
    </>
  );
}
