import { ConsoleSqlOutlined } from "@ant-design/icons";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { Dispatch, MouseEvent, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationDeleteUseditemQuestionAnswerArgs,
  IMutationDeleteUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
  IUseditemQuestion,
} from "../../../commons/types/generated/types";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  DELETE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "../../units/product/comment/commentList/ProductCommentList.queries";
import {
  Form,
  NewCommentWrapper,
  TextArea,
  Title,
} from "../../units/product/comment/newComment/ProductComment.styles";
import Button from "../button";
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
  isAnswer?: boolean;
}

const Comment = (props: ICommentProps) => {
  const router = useRouter();

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("contents", props.comment?.contents);
    if (props.isSubmit) setValue("contents", "");
  }, []);

  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER);

  const [updatedUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USED_ITEM_QUESTION_ANSWER);

  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USED_ITEM_QUESTION_ANSWER);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: String(props.comment?._id),
      page: 1,
    },
  });

  const onEdit = async (formData) => {
    if (!formData.contents) {
      Modal.warning({ content: "내용을 입력해주세요!" });
      return;
    }
    try {
      if (props.isAnswer) {
        await updatedUseditemQuestionAnswer({
          variables: {
            updateUseditemQuestionAnswerInput: { ...formData },
            useditemQuestionAnswerId: String(props.comment?._id),
          },
        });
        props.setIdForEdit("");
      } else {
        await updateUseditemQuestion({
          variables: {
            updateUseditemQuestionInput: { ...formData },
            useditemQuestionId: String(props.comment?._id),
          },
        });
        props.setIdForEdit("");
      }
    } catch (error) {
      error instanceof Error && Modal.error({ content: error.message });
      props.setIdForEdit("");
    }
  };

  const onSubmit = async (formData) => {
    console.log("!", props.comment?._id);
    if (!formData.contents) {
      Modal.warning({ content: "내용을 입력해주세요!" });
      return;
    }
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { ...formData },
          useditemQuestionId: String(props.comment?._id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: String(props.comment?._id),
              page: 1,
            },
          },
        ],
      });
      props.setIdForOpenAnswer([props.comment?._id, data]);
      Modal.success({ content: "답글이 등록되었습니다." });
      props.setIdForSubmit("");
    } catch (error) {
      error instanceof Error && Modal.error({ content: error.message });
    }
  };

  const onDelete = async () => {
    try {
      if (props.isAnswer) {
        console.log("!", props.commentQId);
        await deleteUseditemQuestionAnswer({
          variables: { useditemQuestionAnswerId: String(props.comment?._id) },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTION_ANSWERS,
              variables: {
                useditemQuestionId: props.commentQId,
              },
            },
          ],
        });
        props.setIdForOpenAnswer([props.comment?._id, data]);
        Modal.success({ content: "문의 답글이 삭제되었습니다." });
      } else {
        await deleteUseditemQuestion({
          variables: { useditemQuestionId: String(props.comment?._id) },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTIONS,
              variables: { page: 1, useditemId: String(router.query.id) },
            },
          ],
        });
        Modal.success({ content: "문의 댓글이 삭제되었습니다." });
      }
    } catch (error) {
      error instanceof Error && Modal.error({ content: error.message });
    }
  };

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.setIdForEdit(String(props.comment?._id));
  };

  const onClickSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.setIdForOpenAnswer((prev) => {
      if (prev[0]) return ["", {}];
      else return [props.comment?._id, data];
    });
    props.setIdForSubmit((prev) => {
      if (prev) {
        return "";
      }
      return String(props.comment?._id);
    });
  };

  const onClickShowAnswers = async () => {
    props.setIdForOpenAnswer((prev) => {
      if (prev[0]) return ["", {}];
      else return [props.comment?._id, data];
    });
  };

  return (
    <>
      {props.isSubmit && (
        <NewCommentWrapper>
          <Title>답글 달기</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TextArea
              placeholder="답글 내용을 적어주세요."
              {...register("contents")}
            />
            <Button>답글달기</Button>
          </Form>
        </NewCommentWrapper>
      )}
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
              {props.isAnswer || (
                <>
                  <button type="button" onClick={onClickShowAnswers}>
                    답글 보기
                  </button>
                  <button type="submit" onClick={onClickSubmit}>
                    답글 달기
                  </button>
                </>
              )}
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
    </>
  );
};

export default Comment;
