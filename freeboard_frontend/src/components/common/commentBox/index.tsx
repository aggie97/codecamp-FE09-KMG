import { MouseEvent } from "react";
import { useForm } from "react-hook-form";
import { IUseditemQuestion } from "../../../commons/types/generated/types";
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
}

const Comment = (props: ICommentProps) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (formData) => {
    console.log(formData);
    if (!formData.contents) {
      Modal.warning({ content: "내용을 입력해주세요!" });
    }
    // try {
    //   const result = await createUseditemQuestion({
    //     variables: {
    //       createUseditemQuestionInput: { ...data },
    //       useditemId,
    //     },
    //     refetchQueries: [
    //       {
    //         query: FETCH_USED_ITEM_QUESTIONS,
    //         variables: { useditemId },
    //       },
    //     ],
    //   });

    //   reset();
    // } catch (error) {
    //   error instanceof Error && Modal.error({ content: error.message });
    // }
  };

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    console.log("수정하기 버튼 클릭!");
    props.setIdForEdit(props.comment?._id);
  };

  return (
    <CommentBox>
      <CommentUser>
        <UserPicture imgUrl={props.comment?.user.picture ?? ""} />
        <UserName>{props.comment?.user.name}</UserName>
      </CommentUser>
      <CommentForm>
        <CommentInput disabled={!props.isEdit} {...register("contents")}>
          {props.comment?.contents}
        </CommentInput>
        <ButtonBox>
          <CommentCreatedAt>
            {props.comment?.createdAt.slice(0, 10)}
          </CommentCreatedAt>
          <button
            type="submit"
            onClick={props.isEdit ? handleSubmit(onSubmit) : onClickEdit}
          >
            수정하기
          </button>
        </ButtonBox>
      </CommentForm>
    </CommentBox>
  );
};

export default Comment;
