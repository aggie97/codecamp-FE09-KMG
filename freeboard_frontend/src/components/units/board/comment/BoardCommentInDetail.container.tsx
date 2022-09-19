import BoardCommentUI from "./BoardCommentInDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  FETCH_BOARD_COMMENTS,
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentInDetail.queries";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationDeleteBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
  IUpdateBoardCommentInput,
} from "../../../../commons/types/generated/types";

import { Modal } from "antd";

interface IRouter {
  routerId: string;
}

interface IMyVariables {
  boardCommentId: string;
  password: string;
  updateBoardCommentInput: IUpdateBoardCommentInput;
}

const BoardComments = ({ routerId }: IRouter) => {
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const { loading, data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: routerId,
    },
  });
  console.log("data", data);
  const [comment, setComment] = useState({
    writer: "",
    password: "",
    contents: "",
    rating: 1,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [idForEdit, setIdForEdit] = useState("");
  const [editComment, setEditComment] = useState({
    password: "",
    contents: "",
    rating: 1,
  });

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
    }
  };

  const onChangeEditComment = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (event.target.placeholder === "비밀번호를 입력해주세요.") {
      setEditComment({ ...editComment, password: event.target.value });
    }
    if (event.target.nodeName === "TEXTAREA") {
      setEditComment({ ...editComment, contents: event.target.value });
    }
  };

  const onUpdateComment = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      const myVariables: IMyVariables = {
        password: editComment.password,
        boardCommentId: event.currentTarget.id,
        updateBoardCommentInput: {
          rating: 1,
        },
      };

      if (editComment.contents) {
        myVariables.updateBoardCommentInput.contents = editComment.contents;
      }

      await updateBoardComment({
        variables: myVariables,
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: routerId,
              page: 1,
            },
          },
        ],
      });

      setIsOpen((prev) => !prev);
      setEditComment({ password: "", contents: "", rating: 1 });
      Modal.success({
        content: "댓글이 수정되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: `${error.message}`,
        });
    }
  };
  const onSubmitComment = async () => {
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
      Modal.success({
        content: "댓글이 등록되었습니다.",
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
      if (error instanceof Error)
        Modal.error({
          content: `${error.message}`,
        });
    }
  };

  const onUnfoldEditModal = (
    event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLImageElement>
  ) => {
    setIdForEdit(event.currentTarget.id);
    setIsOpen((prev) => !prev);
  };

  const onDeleteComment = async (event: MouseEvent<HTMLImageElement>) => {
    const targetId = event.currentTarget.id;
    // 수정 전 const targetId = event.target.id;
    const password = prompt("비밀번호를 입력해주세요.");
    if (password === "") return;
    try {
      await deleteBoardComment({
        variables: { boardCommentId: targetId, password },
        refetchQueries: [
          { query: FETCH_BOARD_COMMENTS, variables: { boardId: routerId } },
        ],
      });
      Modal.success({
        content: "댓글이 삭제되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: `${error.message}`,
        });
    }
  };
  const onClickComment = (event: any) => {};

  return (
    <>
      {loading ? (
        <div>댓글을 불러오는 중입니다. 잠시만 기다려주세요.</div>
      ) : (
        <BoardCommentUI
          data={data}
          comment={comment}
          idForEdit={idForEdit}
          isOpen={isOpen}
          onUnfoldEditModal={onUnfoldEditModal}
          onSubmitComment={onSubmitComment}
          onDeleteComment={onDeleteComment}
          onUpdateComment={onUpdateComment}
          onChangeComment={onChangeComment}
          onChangeEditComment={onChangeEditComment}
          onClickComment={onClickComment}
        />
      )}
    </>
  );
};

export default BoardComments;
