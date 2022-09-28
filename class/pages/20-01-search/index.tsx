import { useQuery, gql } from "@apollo/client";

import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
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

  const [id, setId] = useState(0);
  const [input, setInput] = useState("");

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ search: input, page: Number(event.target.id) });
    setId(Number(event.target.id));
  };

  const onChangeInput = async (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    await refetch({ search: event.target.value, page: id });
  };

  const onClickSearch = () => {
    void refetch({ search: input, page: 1 });
    // 키워드를 기반으로 검색을 하고 -> 검색한 페이지를 1로 설정한다. -> 리패치
  };

  return (
    <>
      검색어입력: <input onChange={onChangeInput} type="text" />
      <button onClick={onClickSearch}>검색</button>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          {input.length > 0 ? (
            <span style={{ margin: "10px" }}>{el.title}</span>
          ) : (
            <span style={{ margin: "10px" }}>{el.title}</span>
          )}
        </div>
      ))}
      {new Array(10).fill(1).map((_, i) => (
        <span
          key={i + 1}
          style={{ margin: "10px", cursor: "pointer" }}
          id={String(i + 1)}
          onClick={onClickPage}
        >
          {i + 1}
        </span>
      ))}
    </>
  );
}
