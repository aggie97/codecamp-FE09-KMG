import { useQuery, gql } from "@apollo/client";
import { _ } from "lodash";
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
    void refetch({ page: Number(event.target.id) });
    // setId(Number(event.target.id));
  };

  const onChangeInput = async (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const getDebounce = _.debouce((value: string) => {
    void refetch({ search: value, page: 1 });
    // page가 1로 고정되어 있는데 어떻게 가능한걸까...?
  }, 1000);

  return (
    <>
      검색어입력: <input onChange={onChangeInput} type="text" />
      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
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
