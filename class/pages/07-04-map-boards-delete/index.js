import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
const FETCH_BOARD = gql`
  query fetchBoards {
    fetchBoards {
      writer
      title
      contents
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid white;
`;

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARD);

  console.log(data?.fetchBoards);

  return (
    <>
      {data?.fetchBoards.map(
        ({ writer = "글쓴이", title = "제목", contents = "내용" }) => {
          return (
            <Row key={writer}>
              <Column>
                <input type="checkbox" />
              </Column>
              <Column>제목: {writer}</Column>
              <Column>내용: {title}</Column>
              <Column>내용: {contents}</Column>
              <Column>
                <button>삭제</button>
              </Column>
            </Row>
          );
        }
      )}
    </>
  );
}
