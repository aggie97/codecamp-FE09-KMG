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

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });
  console.log(data);
  return (
    <>
      <div>{router.query.number}번 게시글</div>
      {data ? (
        <>
          <div>작성자: {data.fetchBoard?.writer}</div>
          <div>제목: {data.fetchBoard?.title}</div>
          <div>내용: {data.fetchBoard?.contents}</div>
          <br />
          <button
            onClick={() =>
              router.push(`/08-05-boards/${router.query.number}/edit`)
            }
          >
            수정하기
          </button>
        </>
      ) : (
        <div>데이터 불러오는 중...</div>
      )}
    </>
  );
};

export default DynamicRoutedPage;
