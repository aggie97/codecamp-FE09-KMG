import BoardRegisterUI from "./BoardRegister.presenter";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import CREATE_BOARD from "./BoardRegister.queries";

const BoardRegister = () => {
  const router = useRouter();
  const [setMutation] = useMutation(CREATE_BOARD);
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
        const result = await setMutation({
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
        console.log("result: ", result);
        router.push("boards/" + result.data.createBoard._id);
        alert("게시물이 등록되었습니다.");
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const onChangeInput = (event) => {
    const targetEle = event.target.id;
    const changedContent = event.target.value;
    setInput({ ...input, [targetEle]: changedContent });
    event.target.style.border = "1px solid #dddddd";
  };

  return (
    <BoardRegisterUI
      onChangeInput={onChangeInput}
      submitForm={submitForm}
      isEmpty={isEmpty}
    />
  );
};

export default BoardRegister;
