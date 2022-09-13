import BoardCommentUI from "./BoardCommentInDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  FETCH_BOARD_COMMENTS,
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentInDetail.queries";

const BoardComments = ({ routerId }) => {
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
  const [editComment, setEditComment] = useState({
    password: "",
    contents: "",
  });

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

  const onChangeEditComment = (event) => {
    if (event.target.placeholder === "비밀번호를 입력해주세요.") {
      setEditComment({ ...editComment, password: event.target.value });
    }
    if (event.target.nodeName === "TEXTAREA") {
      setEditComment({ ...editComment, contents: event.target.value });
    }
  };
  console.log(editComment);
  const onUpdateComment = async (event) => {
    console.log(event.target.id);
    try {
      const myVariables = {
        password: editComment.password,
        boardCommentId: event.target.id,
        updateBoardCommentInput: {
          rating: 1,
        },
      };
      if (editComment.contents)
        myVariables.updateBoardCommentInput.contents = editComment.contents;

      console.log("myVar", myVariables);
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
      console.log(result);
      setIsOpen((prev) => !prev);
      setEditComment("");
      console.log("Hi");
      alert("댓글이 수정되었습니다.");
    } catch (error) {
      console.log(error);
      alert("비밀번호가 일치하지 않습니다.");
    }
  };
  const onSubmitComment = async (event) => {
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
      // const [, inputbox, textareabox] = event.target.closest(
      //   "#CreateCommentWrapper"
      // ).childNodes;
      setComment({ writer: "", password: "", contents: "", rating: 1 });
      console.log("hi!", inputbox, textareabox);
    } catch (error) {
      console.log(error);
    }
  };

  const onUnfoldEditModal = (event) => {
    setIdForEdit(event.target.id);
    setIsOpen((prev) => !prev);
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

  return (
    <>
      {loading ? (
        <div>댓글을 불러오는 중입니다. 잠시만 기다려주세요.</div>
      ) : (
        <BoardCommentUI
          comment={comment}
          data={data}
          idForEdit={idForEdit}
          isOpen={isOpen}
          onUnfoldEditModal={onUnfoldEditModal}
          onSubmitComment={onSubmitComment}
          onDeleteComment={onDeleteComment}
          onChangeComment={onChangeComment}
          onChangeEditComment={onChangeEditComment}
          onUpdateComment={onUpdateComment}
        />
      )}
    </>
  );
};

export default BoardComments;
