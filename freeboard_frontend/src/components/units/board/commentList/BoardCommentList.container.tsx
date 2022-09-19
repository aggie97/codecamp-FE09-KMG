import BoardCommentListUI from "./BoardCommentList.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import {
  IMutation,
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

const CommentList = ({ routerId }: IRouter) => {
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

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [idForEdit, setIdForEdit] = useState("");
  const [editComment, setEditComment] = useState({
    password: "",
    contents: "",
    rating: 1,
  });

  const [textCount, setTextCount] = useState(0);

  // const [deletePw, setDeletePw] = useState("");

  const onChangeEditComment = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (event.target.placeholder === "비밀번호를 입력해주세요.") {
      setEditComment({ ...editComment, password: event.target.value });
    }
    if (event.target.nodeName === "TEXTAREA") {
      setEditComment({ ...editComment, contents: event.target.value });
      setTextCount(event.target.value.length);
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
      if (error instanceof Error) {
        Modal.error({
          content: `${error.message}`,
        });
      }
    }
  };

  const onUnfoldEditModal = (
    event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLImageElement>
  ) => {
    setIdForEdit(event.currentTarget.id);
    setIsOpen((prev) => !prev);
    if (textCount === 0) {
      setTextCount(parseInt(event.currentTarget.className));
    } else {
      setTextCount(0);
    }
  };

  const onDeleteComment = async (event: MouseEvent<HTMLImageElement>) => {
    const targetId = event.currentTarget.id;
    // 수정 전 const targetId = event.target.id;
    const password = prompt("비밀번호를 입력해주세요.");

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
      if (error instanceof Error) {
        Modal.error({
          content: `${error.message}`,
        });
      }
    }
  };
  const onClickComment = (event: any) => {};

  return (
    <>
      {loading ? (
        <div>댓글을 불러오는 중입니다. 잠시만 기다려주세요.</div>
      ) : (
        <BoardCommentListUI
          data={data}
          textCount={textCount}
          idForEdit={idForEdit}
          isOpen={isOpen}
          isOpenDeleteModal={isOpenDeleteModal}
          onUnfoldEditModal={onUnfoldEditModal}
          onDeleteComment={onDeleteComment}
          onUpdateComment={onUpdateComment}
          onChangeEditComment={onChangeEditComment}
          onClickComment={onClickComment}
        />
      )}
    </>
  );
};

export default CommentList;
