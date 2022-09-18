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

import { Modal } from "antd";

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
    const { writer, password, contents, rating } = comment;
    if (writer && password && contents && rating) {
      try {
        await createBoardComment({
          variables: {
            boardId: routerId,
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating,
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
        Modal.success({
          content: "댓글이 등록되었습니다.",
        });
      } catch (error) {
        if (error instanceof Error) {
          Modal.error({
            content: `${error.message}`,
          });
        }
      }
    } else {
      Modal.warning({
        content: "양식이 비어있습니다.",
      });
    }
  };

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
