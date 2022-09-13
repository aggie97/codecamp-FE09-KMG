import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query ($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

const StaticRoutedPage = () => {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        number: 1,
      },
    }
  );
  console.log(data);
  return (
    <>
      <div>1번 게시글</div>
      {data ? (
        <>
          <div>작성자: {data.fetchBoard?.writer}</div>
          <div>제목: {data.fetchBoard?.title}</div>
          <div>내용: {data.fetchBoard?.contents}</div>
        </>
      ) : (
        <div>데이터 불러오는 중...</div>
      )}
    </>
  );
};

export default StaticRoutedPage;
