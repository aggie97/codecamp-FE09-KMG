import { useState } from "react";
import { IUseditemQuestion } from "../../../../../commons/types/generated/types";
import Comment from "../../../../common/commentBox";
import { ProductCommentListWrapper } from "./ProductCommentList.styles";

interface IProductCommentProps {
  data: { fetchUseditemQuestions?: IUseditemQuestion[] };
}

const ProductCommentListUI = (props: IProductCommentProps) => {
  const [idForEdit, setIdForEdit] = useState("");
  return (
    <ProductCommentListWrapper>
      상품 문의 댓글 목록
      <div>
        {props.data?.fetchUseditemQuestions?.map((comment) => (
          <Comment
            isEdit={idForEdit === comment._id}
            setIdForEdit={setIdForEdit}
            key={comment._id}
            comment={comment}
          />
        ))}
      </div>
    </ProductCommentListWrapper>
  );
};

export default ProductCommentListUI;
