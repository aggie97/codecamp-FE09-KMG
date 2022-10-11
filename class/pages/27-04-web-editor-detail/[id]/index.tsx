import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const router = useRouter();
  console.log(router);
  console.log(router.query.id);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.id) },
  });

  console.log("=========");
  console.log(data);
  console.log("=========");

  const onClickMoveToEdit = () => {
    router.push(`/09-01-boards/${router.query.id}/edit`);
  };

  return (
    <>
      <div>{router.query.id}번 게시글로 이동이 완료되었습니다.</div>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div
        dangerouslySetInnerHTML={{
          __html: Dompurify.sanitize(data?.fetchBoard.contents),
        }}
      ></div>
      <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
    </>
  );
}

// mutation{
//   createBoard(createBoardInput:{
//     writer: "철수",
//     password:"1234",
//     title:"중고시계팝니다~",
//     contents: "<img src='#' onerror='console.log(localStorage.getItem(\"accessToken\"))' />"
//   }){
//     _id
//   }
// }

// playground XSS 공격
// <img src='#' onerror='console.log(localStorage.getItem(\"accessToken\"))' />
