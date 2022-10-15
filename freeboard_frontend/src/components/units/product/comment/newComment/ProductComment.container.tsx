import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";
import ProductNewCommentUI from "./ProductComment.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./ProductComment.queries";

const ProductNewComment = ({ useditemId }: string) => {
  const { register, handleSubmit, reset } = useForm();
  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const onSubmit = async (data) => {
    if (!data.contents) {
      Modal.warning({ content: "질문 내용을 입력해주세요!" });
    }
    try {
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: { ...data },
          useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId },
          },
        ],
      });

      reset();
    } catch (error) {
      error instanceof Error && Modal.error({ content: error.message });
    }
  };
  return (
    <ProductNewCommentUI
      onSubmit={onSubmit}
      register={register}
      handleSubmit={handleSubmit}
    />
  );
};

export default ProductNewComment;
