import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import useAuth from "../../../common/useAuth";
import ProductDetailUI from "./ProductDetail.presenter";
import { DELETE_USED_ITEM, FETCH_USED_ITEM } from "./ProductDetail.queries";

const ProductDetail = () => {
  const router = useRouter();
  useAuth();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.id) },
  });

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const onClickMoveToBack = () => router.back();
  console.log(data);

  const onClickDelete = (useditemId: string) => async () => {
    try {
      await deleteUseditem({
        variables: { useditemId },
      });
      alert("상품이 삭제되었습니다.");
      await router.push("/");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "다른 사람의 게시글은 삭제할 수 없습니다." });
    }
  };
  return (
    <ProductDetailUI
      onClickMoveToBack={onClickMoveToBack}
      onClickDelete={onClickDelete}
      data={data}
      routerId={router.query.id}
    />
  );
};

export default ProductDetail;
