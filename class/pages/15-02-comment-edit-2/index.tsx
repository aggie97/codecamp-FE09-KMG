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
  const [myIndex, setMyIndex] = useState(new Array(10).fill(false));
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    const qqq = [...myIndex];
    // 프로젝트 규모가 커질 수록 프로젝트의 안정성을 생각한다면, 위와 같이 복사를 해서 사용하는 게 좋다.
    qqq[Number(event.currentTarget.id)] = true;
    setMyIndex(qqq);
  };

  return (
    <div style={{ padding: "1rem", background: "beige" }}>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {myIndex[index] === false && (
            <div key={el._id}>
              <span style={{ margin: "10px" }}>{el.writer}</span>
              <span style={{ margin: "10px" }}>{el.title}</span>
              <button id={String(index)} onClick={onClickEdit}>
                수정하기
              </button>
            </div>
          )}
          {myIndex[index] === true && (
            <div>
              수정할 내용 : <input type="text" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
