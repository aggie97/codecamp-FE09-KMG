import BoardWriteUI from "./BoardWrite.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import CREATE_BOARD, { UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite({ isEdit, data }) {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [input, setInput] = useState({
    writer: "",
    title: "",
    contents: "",
  });
  const [myColor, setMyColor] = useState(false);
  const onClickSync = async () => {
    if (!isEdit) {
      const result = await createBoard({
        variables: {
          writer: input.writer,
          title: input.title,
          contents: input.contents,
        },
      });
      alert(result.data.createBoard.message);
      router.push(`/09-01-boards/${result.data.createBoard.number}`);
    } else {
      console.log(router.query);
      const myVariables = {
        number: Number(router.query.number),
      };
      alert(Object.values(input).join(""));
      if (input.writer) myVariables.writer = input.writer;
      if (input.title) myVariables.title = input.title;
      if (input.contents) myVariables.contents = input.contents;
      const result = await updateBoard({
        variables: myVariables,
      });
      alert(Object.values(input).join(""));
      // const result = await updateBoard({
      // variables: {
      //     writer: input.writer,
      //     title: input.title,
      //     contents: input.contents,
      //     number: Number(router.query.number),
      //   },
      // });
      alert(result.data.updateBoard.message);
      router.push(`/09-01-boards/${result.data.updateBoard.number}`);
    }
  };
  console.log(input);
  const onChangeInput = (event) => {
    setInput({ ...input, [event.target.id]: event.target.value });
    if (!isEdit) {
      Object.values(input).every((value) => value !== "") && setMyColor(true);
    } else {
      setMyColor(true);
    }
  };
  return (
    <BoardWriteUI
      myColor={myColor}
      onChangeInput={onChangeInput}
      onClickSync={onClickSync}
      isEdit={isEdit}
      data={data}
    />
  );
}
