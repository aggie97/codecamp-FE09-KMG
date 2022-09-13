import BoardRegisterUI from "./BoardRegister.presenter";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import CREATE_BOARD, { UPDATE_BOARD } from "./BoardRegister.queries";

const BoardRegister = ({ isEdit, data }) => {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [isEmpty, setIsEmpty] = useState(false);
  const [input, setInput] = useState({
    author: "",
    pw: "",
    title: "",
    contents: "",
    zipCode: "",
    address: "",
    addressDetail: "",
    youtubeLink: "",
    images: "",
  });

  console.log("isEdit state:", isEdit);
  const submitForm = async (event) => {
    event.preventDefault();
    const elements = [...event.target].slice(0, 8);

    const emptyInputExist = elements.some((input) => input.value === "");
    if (emptyInputExist) {
      console.log("empty space exists");
      elements.forEach((ele) => {
        const inputId = ele.id;
        if (input[inputId] === "") {
          ele.style.border = "1px solid red";
          setIsEmpty(true);
        } else {
          ele.style.border = "1px solid #ddd";
        }
      });
    } else {
      console.log("empty space doesn't exist");

      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: input.author,
              password: input.pw,
              title: input.title,
              contents: input.contents,
              youtubeUrl: input.youtubeLink,
              boardAddress: {
                zipcode: input.zipCode,
                address: input.address,
                addressDetail: input.addressDetail,
              },
              images: input.images,
            },
          },
        });
        alert("게시물이 등록되었습니다.");
        router.push("/boards/" + result.data.createBoard._id);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const editForm = async (event) => {
    event.preventDefault();
    try {
      const myVariables = {
        boardId: router.query.id,
        updateBoardInput: {},
        password: input.pw,
      };
      if (input.title)
        myVariables.updateBoardInput = {
          ...myVariables.updateBoardInput,
          title: input.title,
        };
      if (input.contents)
        myVariables.updateBoardInput = {
          ...myVariables.updateBoardInput,
          contents: input.contents,
        };
      if (input.youtubeLink)
        myVariables.updateBoardInput = {
          ...myVariables.updateBoardInput,
          youtubeUrl: input.youtubeLink,
        };
      if (input.zipCode)
        myVariables.updateBoardInput = {
          ...myVariables.updateBoardInput,
          boardAddress: { zipcode: input.zipCode },
        };
      console.log("!", myVariables);
      if (input.address)
        myVariables.updateBoardInput = {
          ...myVariables.updateBoardInput,
          boardAddress: { address: input.address },
        };
      if (input.addressDetail)
        myVariables.updateBoardInput = {
          ...myVariables.updateBoardInput,
          boardAddress: { addressDetail: input.addressDetail },
        };
      if (input.images)
        myVariables.updateBoardInput = {
          ...myVariables.updateBoardInput,
          images: input.images,
        };
      console.log(myVariables);
      const result = await updateBoard({
        variables: myVariables,
      });
      console.log("try end", result);
      alert("게시물이 수정되었습니다.");
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      alert("fail! Error Message\n" + error);
    }
  };

  const onChangeInput = (event) => {
    const targetEle = event.target.id;
    const changedContent = event.target.value;
    setInput({ ...input, [targetEle]: changedContent });
    event.target.style.border = "1px solid #dddddd";
  };

  console.log(input);
  return (
    <BoardRegisterUI
      onChangeInput={onChangeInput}
      submitForm={submitForm}
      editForm={editForm}
      isEmpty={isEmpty}
      isEdit={isEdit}
      data={data}
    />
  );
};

export default BoardRegister;
