import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
const FETCH_BOARD = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

const Wrapper = styled.div`
  margin-top: 300px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: auto 100px 200px 200px 400px auto;
`;
const Column = styled.div`
  border: 1px solid #555;
  padding: 5px;
`;

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARD);

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const onClickButton = async (event) => {
    let id = event.target.parentNode.parentNode.id;
    await deleteBoard({
      variables: {
        number: Number(id),
      }, // 삭제 후에,
      refetchQueries: [{ query: FETCH_BOARD }], // 다시 쿼리 요청
    });
  };

  return (
    <Wrapper>
      {data?.fetchBoards.map(
        ({ writer = "글쓴이", title = "제목", contents = "내용", number }) => {
          return (
            <Row id={number} key={number}>
              <Column>
                <input type="checkbox" />
              </Column>
              <Column>번호: {number}</Column>
              <Column>저자: {writer}</Column>
              <Column>제목: {title}</Column>
              <Column>내용: {contents}</Column>
              <Column>
                <button onClick={onClickButton}>삭제</button>
              </Column>
            </Row>
          );
        }
      )}
    </Wrapper>
  );
}
