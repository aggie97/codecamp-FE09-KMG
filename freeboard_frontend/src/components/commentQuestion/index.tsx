import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../commons/types/generated/types";
import CommentAnswerItem from "../commentAnswerItem";
import { UPDATE_USED_ITEM_QUESTION } from "../common/newComment/queries";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "../units/product/comment/commentList/ProductCommentList.queries";

const CommentQuestion = ({
  data,
  // onClickEditQuestion,
  // onClickShowAnswers,
  onClickDeleteQuestion,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const [isEditAnswerOpen, setIsEditAnswerOpen] = useState(false);
  const [isSubmitAnswerOpen, setIsSubmitAnswerOpen] = useState(false);

  const { data: dataA } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: String(data._id),
    },
  });
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);

  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER);

  const onClickSubmitAnswer = () => {
    setIsSubmitAnswerOpen((prev) => !prev);
  };

  const onSubmitAnswer = async (formData) => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { ...formData },
          useditemQuestionId: data._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: data._id },
          },
        ],
      });
      setIsSubmitAnswerOpen((prev) => !prev);
      reset();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onEditAnswer = async (formData) => {
    try {
      const result = await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: { ...formData },
          useditemQuestionId: data._id,
        },
      });
      setIsEditAnswerOpen((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickEditQuestion = () => {
    setIsEditAnswerOpen((prev) => !prev);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>글쓴이: {data.user.name}</div>
        <div>질문: {data.contents}</div>
        <div>
          <button onClick={onClickSubmitAnswer}>A달기</button>
          <button onClick={onClickEditQuestion}>Q수정</button>
          <button onClick={onClickDeleteQuestion(data._id)}>Q삭제</button>
        </div>
      </div>
      <div>
        {isSubmitAnswerOpen ? (
          <form onSubmit={handleSubmit(onSubmitAnswer)}>
            <input type="text" {...register("contents")} />
            <button>A등록</button>
          </form>
        ) : null}
      </div>
      <div>
        {isEditAnswerOpen ? (
          <form onSubmit={handleSubmit(onEditAnswer)}>
            <input type="text" {...register("contents")} />
            <button>Q수정</button>
          </form>
        ) : null}
      </div>
      <div>
        {dataA?.fetchUseditemQuestionAnswers.map((el) => (
          <CommentAnswerItem
            key={el._id}
            answer={el}
            questionId={data._id}
            // onClickEditAnswer={onClickEditAnswer}
            // onClickDeleteAnswer={onClickDeleteAnswer}
          />
        ))}
      </div>
    </>
  );
};

export default CommentQuestion;
