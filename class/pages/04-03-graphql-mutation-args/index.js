import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

const GraphqlMutationPage = () => {
  const [mutationFn] = useMutation(CREATE_BOARD);

  const onClickSync = async () => {
    const result = await mutationFn({
      variables: {
        writer: "뮤테이션 써보는 사람",
        title: "뮤테이션 써보기",
        contents: "useMutation",
      },
    });
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
