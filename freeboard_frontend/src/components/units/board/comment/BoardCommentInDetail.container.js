import BoardCommentUI from "./BoardCommentInDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import {
  FETCH_BOARD_COMMENTS,
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentInDetail.queries";

const BoardComments = ({ routerId }) => {
  console.log(routerId);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const { loading, error, data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: routerId,
    },
  });

  const [comment, setComment] = useState({
    writer: "",
    password: "",
    contents: "",
    rating: 1,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [idForEdit, setIdForEdit] = useState("");

  const onChangeComment = (event) => {
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

  const onSubmitComment = async (target) => {
    if (isOpen) {
      const myVariables = {
        password: comment.password,
      };

      if (comment.contents)
        myVariables.createBoardCommentInput = {
          rating: 1,
          contents: comment.contents,
        };
      const result = await updateBoardComment({
        variables: myVariables,
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: routerId,
            },
          },
        ],
      });
    } else {
      try {
        const result = await createBoardComment({
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
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onUnfoldEditModal = (event) => {
    setIdForEdit(event.target.id);
    setIsOpen((prev) => !prev);
  };

  const onUpdateComment = async (event) => {
    setId(event.target.id);
  };

  const onDeleteComment = async (event) => {
    const targetId = event.target.id;
    const password = prompt("비밀번호를 입력해주세요.");

    const result = await deleteBoardComment({
      variables: { boardCommentId: targetId, password },
      refetchQueries: [
        { query: FETCH_BOARD_COMMENTS, variables: { boardId: routerId } },
      ],
    });
    alert("댓글이 삭제되었습니다.");
  };
  if (error) alert(error);
  return (
    <>
      {loading ? (
        <div>댓글을 불러오는 중입니다. 잠시만 기다려주세요.</div>
      ) : (
        <BoardCommentUI
          data={data}
          idForEdit={idForEdit}
          isOpen={isOpen}
          onUnfoldEditModal={onUnfoldEditModal}
          onSubmitComment={onSubmitComment}
          onUpdateComment={onUpdateComment}
          onDeleteComment={onDeleteComment}
          onChangeComment={onChangeComment}
        />
      )}
    </>
  );
};

export default BoardComments;
