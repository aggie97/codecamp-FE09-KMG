import { useState } from "react";
import { IUseditemQuestion } from "../../../../../commons/types/generated/types";
import Comment from "../../../../common/commentBox";
import { ProductCommentListWrapper } from "./ProductCommentList.styles";

interface IProductCommentProps {
  dataQ: { fetchUseditemQuestions?: IUseditemQuestion[] };
}

const ProductCommentListUI = (props: IProductCommentProps) => {
  const [idForEditQ, setIdForEditQ] = useState("");
  const [idForEditA, setIdForEditA] = useState("");
  const [idForSubmit, setIdForSubmit] = useState("");

  const [idForOpenAnswer, setIdForOpenAnswer] = useState(["", {}]);
  console.log(idForSubmit);
  return (
    <ProductCommentListWrapper>
      상품 문의 목록
      <div>
        {props.dataQ?.fetchUseditemQuestions?.map((commentQ) => (
          <>
            <Comment
              isEdit={idForEditQ === commentQ._id}
              setIdForEdit={setIdForEditQ}
              key={commentQ._id}
              comment={commentQ}
              setIdForOpenAnswer={setIdForOpenAnswer}
              setIdForSubmit={setIdForSubmit}
            />
            {idForSubmit === commentQ._id ? (
              <>
                <Comment
                  setIdForSubmit={setIdForSubmit}
                  comment={commentQ}
                  isEdit={true}
                  isSubmit={true}
                  setIdForOpenAnswer={setIdForOpenAnswer}
                />
              </>
            ) : null}
            {idForOpenAnswer[0] === commentQ._id
              ? idForOpenAnswer[1].fetchUseditemQuestionAnswers.map(
                  (commentA) => (
                    <>
                      <div
                        key={commentA._id}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <div style={{ width: "50px", textAlign: "center" }}>
                          A
                        </div>
                        <Comment
                          isEdit={idForEditA === commentA._id}
                          isAnswer={true}
                          comment={commentA}
                          commentQId={commentQ._id}
                          setIdForOpenAnswer={setIdForOpenAnswer}
                          setIdForEdit={setIdForEditA}
                        />
                      </div>
                    </>
                  )
                )
              : null}
          </>
        ))}
      </div>
    </ProductCommentListWrapper>
  );
};

export default ProductCommentListUI;
