import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";
import ProductCommentListUI from "./ProductCommentList.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./ProductCommentList.queries";

const ProductCommentList = ({ useditemId }: string) => {
  const { data: dataQ } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId, page: 1 },
  });

  console.log(dataQ);
  return <ProductCommentListUI dataQ={dataQ} />;
};

export default ProductCommentList;
