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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function StaticRoutedPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: boardsCntData } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IqueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage =
    boardsCntData != null ? Math.ceil(boardsCntData?.fetchBoardsCount / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.target.id) });
  };

  const onClickPrev = () => {
    // 음수 page 방지용
    if (startPage === 1) return;

    setStartPage((prev) => {
      if (prev <= 10) return prev;
      return prev - 10;
    });

    void refetch({ page: Number(startPage - 10) });
  };
  const onClickNext = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      void refetch({ page: Number(startPage + 10) });
    }
  };

  return (
    <div style={{ padding: "1rem", background: "beige" }}>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
        </div>
      ))}
      {/* -------- 선을 기준으로 위는 자식1, 아래는 자식2 로 나누기 -------- */}
      <div style={{ padding: "1rem", background: "white" }}>
        <span onClick={onClickPrev}>이전</span>
        {new Array(10).fill(1).map(
          (_, i) =>
            i + startPage <= lastPage && (
              <span
                key={i + startPage}
                style={{ margin: "10px" }}
                id={String(i + startPage)}
                onClick={onClickPage}
              >
                {i + startPage}
              </span>
            )
        )}
        <span onClick={onClickNext}>다음</span>
        {/* 
          if (i + startPage <= lastPage) {
          //     return (
          //       <span
          //         key={i + startPage}
          //         style={{ margin: "10px" }}
          //         id={String(i + startPage)}
          //         onClick={onClickPage}
          //       >
          //         {i + startPage}
          //       </span>
          //     );
          //   } else {
          //     return <span key={i + startPage}></span>;
          //   }
          // })}
          // <span onClick={onClickNext}>다음</span>  
          */}
      </div>
    </div>
  );
}
