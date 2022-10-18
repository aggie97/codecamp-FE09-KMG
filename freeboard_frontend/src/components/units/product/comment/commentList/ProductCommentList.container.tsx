import ProductCommentListUI from "./ProductCommentList.presenter";

const ProductCommentList = ({ useditemId }: string) => {
  return <ProductCommentListUI useditemId={useditemId} />;
};

export default ProductCommentList;
