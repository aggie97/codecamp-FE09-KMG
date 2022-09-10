import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query ($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
      number
    }
  }
`;

const DynamicRoutedPage = () => {
  const router = useRouter();
  console.log("router:", router);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });
  console.log("data:", data);
  return (
    <>
      <div>{router.query.number}번 게시글</div>
      {data ? (
        <>
          <div>작성자: {data.fetchBoard.writer}</div>
          <div>제목: {data.fetchBoard.title}</div>
          <div>내용: {data.fetchBoard.contents}</div>
        </>
      ) : (
        <div>데이터 불러오는 중...</div>
      )}
    </>
  );
};

export default DynamicRoutedPage;
