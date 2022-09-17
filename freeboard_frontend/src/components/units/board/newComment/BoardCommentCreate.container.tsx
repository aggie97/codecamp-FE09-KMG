import BoardCommentCreateUI from "./BoardCommentCreate.presenter";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  FETCH_BOARD_COMMENTS,
  CREATE_BOARD_COMMENT,
} from "./BoardCommentCreate.queries";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";

interface IRouter {
  routerId: string;
}

const BoardCreateComment = ({ routerId }: IRouter) => {
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [comment, setComment] = useState({
    writer: "",
    password: "",
    contents: "",
    rating: 1,
  });

  const [textCount, setTextCount] = useState(0);

  const onChangeComment = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (event.target.placeholder === "작성자") {
      setComment({ ...comment, writer: event.target.value });
    }
    if (event.target.placeholder === "비밀번호") {
      setComment({ ...comment, password: event.target.value });
    }
    if (event.target.nodeName === "TEXTAREA") {
      setComment({ ...comment, contents: event.target.value });
      setTextCount(event.target.value.length);
    }
  };

  const onSubmitComment = async () => {
    console.log("등록전Comment:", comment);
    try {
      await createBoardComment({
        variables: {
          boardId: routerId,
          createBoardCommentInput: {
            writer: comment.writer,
            password: comment.password,
            contents: comment.contents,
            rating: comment.rating,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: routerId,
            },
          },
        ],
      });
      // const [, inputbox, textareabox] = event.target.closest(
      //   "#CreateCommentWrapper"
      // ).childNodes;
      setComment({
        ...comment,
        writer: "",
        password: "",
        contents: "",
        rating: 1,
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  console.log("등록후Comment:", comment);

  return (
    <BoardCommentCreateUI
      comment={comment}
      textCount={textCount}
      onSubmitComment={onSubmitComment}
      onChangeComment={onChangeComment}
    />
  );
};

export default BoardCreateComment;
