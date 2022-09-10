import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(
      writer: "뮤테이션 쓰는 개"
      title: "뮤테이션 써본 썰 푼다"
      contents: "!useMutation()"
    ) {
      message
    }
  }
`;

const GraphqlMutationPage = () => {
  const [mutationFn] = useMutation(CREATE_BOARD);

  const onClickSync = async () => {
    const result = await mutationFn();
    alert(result.data.createBoard.message);
  };

  return (
    <>
      <span>sync</span>
      <button onClick={onClickSync}>GRAPHQL-API(동기) 요청하기</button>
      <hr />
    </>
  );
};

export default GraphqlMutationPage;
