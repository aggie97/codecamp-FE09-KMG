import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

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
  const [input, setInput] = useState({
    writer: "",
    title: "",
    contents: "",
  });
  const onClickSync = async () => {
    const result = await mutationFn({
      variables: { ...input },
    });

    console.log(result);

    alert(result.data.createBoard.message);
  };
  const onChangeInput = (event) => {
    setInput({ ...input, [event.target.id]: event.target.value });
  };

  return (
    <>
      <input
        type="text"
        id="writer"
        onChange={onChangeInput}
        placeholder="write"
      />
      <br />
      <input
        type="text"
        id="title"
        onChange={onChangeInput}
        placeholder="title"
      />
      <br />
      <input
        type="text"
        id="contents"
        onChange={onChangeInput}
        placeholder="content"
      />
      <br />
      <button onClick={onClickSync}>GRAPHQL-API(동기) 요청하기</button>
      <hr />
    </>
  );
};

export default GraphqlMutationPage;
