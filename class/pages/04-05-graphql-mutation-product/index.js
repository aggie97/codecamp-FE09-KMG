import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

const GraphqlMutationPage = () => {
  const [mutationFn] = useMutation(CREATE_PRODUCT);
  // const [input, setInput] = useState({
  //   writer: "",
  //   title: "",
  //   contents: "",
  // });
  const onClickSync = async () => {
    const result = await mutationFn({
      variables: {
        seller: "민겸",
        createProductInput: {
          name: "정신",
          detail: "하루 종일 어디다가",
          price: 123,
        },
      },
    });

    console.log(result);

    alert(result.data.createProduct.message);
  };
  // const onChangeInput = (event) => {
  //   setInput({ ...input, [event.target.id]: event.target.value });
  // };

  return (
    <>
      {/* <input
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
      <br /> */}
      <button onClick={onClickSync}>GRAPHQL-API(동기) 요청하기</button>
      <hr />
    </>
  );
};

export default GraphqlMutationPage;
