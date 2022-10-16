import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { Dispatch, MouseEvent, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
  IUseditemQuestion,
} from "../../../commons/types/generated/types";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USED_ITEM_QUESTION,
} from "./queries";
import {
  ButtonBox,
  CommentBox,
  CommentCreatedAt,
  CommentForm,
  CommentInput,
  CommentUser,
  UserName,
  UserPicture,
} from "./styles";

interface ICommentProps {
  comment?: IUseditemQuestion;
  isEdit: boolean;
  setIdForEdit: Dispatch<SetStateAction<string>>;
}

const Comment = (props: ICommentProps) => {
  const router = useRouter();
  const { register, handleSubmit, setValue } = useForm();
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  useEffect(() => {
    setValue("contents", props.comment?.contents);
  }, []);

  const onEdit = async (formData) => {
    console.log(formData);
    if (!formData.contents) {
      Modal.warning({ content: "내용을 입력해주세요!" });
      return;
    }
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: { ...formData },
          useditemQuestionId: String(props.comment?._id),
        },
      });
      props.setIdForEdit("");
    } catch (error) {
      error instanceof Error && Modal.error({ content: error.message });
    }
  };

  const onDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: { useditemQuestionId: String(props.comment?._id) },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { page: 1, useditemId: String(router.query.id) },
          },
        ],
      });
      Modal.success({ content: "댓글이 삭제되었습니다." });
    } catch (error) {
      error instanceof Error && Modal.error({ content: error.message });
    }
  };

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.setIdForEdit(String(props.comment?._id));
  };

  return (
    <CommentBox>
      <CommentUser>
        <UserPicture imgUrl={props.comment?.user.picture ?? ""} />
        <UserName>{props.comment?.user.name}</UserName>
      </CommentUser>
      <CommentForm>
        <CommentInput
          disabled={!props.isEdit}
          {...register("contents")}
        ></CommentInput>
        <ButtonBox>
          <CommentCreatedAt>
            {props.comment?.createdAt.slice(0, 10)}
          </CommentCreatedAt>
          <div>
            <button type="submit" onClick={handleSubmit(onDelete)}>
              삭제하기
            </button>
            <button
              type="submit"
              onClick={props.isEdit ? handleSubmit(onEdit) : onClickEdit}
            >
              수정하기
            </button>
          </div>
        </ButtonBox>
      </CommentForm>
    </CommentBox>
  );
};

export default Comment;
