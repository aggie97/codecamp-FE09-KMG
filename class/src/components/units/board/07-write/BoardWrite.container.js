import BoardWriteUI from "./BoardWrite.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import CREATE_BOARD from "./BoardWrite.queries";

export default function BoardWrite() {
  const [mutationFn] = useMutation(CREATE_BOARD);
  const [input, setInput] = useState({
    writer: "",
    title: "",
    contents: "",
  });
  const [myColor, setMyColor] = useState(false);
  const onClickSync = async () => {
    const result = await mutationFn({
      variables: {
        writer: input.writer,
        title: input.title,
        contents: input.contents,
      },
    });

    alert(result.data.createBoard.message);
  };
  const onChangeInput = (event) => {
    setInput({ ...input, [event.target.id]: event.target.value });
    Object.values(input).every((value) => value !== "") && setMyColor(true);
  };
  return (
    <BoardWriteUI
      myColor={myColor}
      onChangeInput={onChangeInput}
      onClickSync={onClickSync}
    />
  );
}
