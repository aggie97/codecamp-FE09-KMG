import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemsIPickedArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEMS_I_PICKED } from "../list/ProductList.queries";
// import useAuth from "../../../common/useAuth";

import ProductDetailUI from "./ProductDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./ProductDetail.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

const ProductDetail = () => {
  const router = useRouter();
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

  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USED_ITEM_PICK);

  const { data: pickedItemsData } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USED_ITEMS_I_PICKED, {
    variables: { search: "" },
  });

  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  const onClickMoveToBack = async () => {
    await router.push("/");
  };
  console.log("디테일", data);

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

  const onClickPick = (useditemId: string) => async () => {
    const temp = pickedItemsData?.fetchUseditemsIPicked.filter(
      (el) => el._id === useditemId
    );

    try {
      const result = await toggleUseditemPick({
        variables: { useditemId },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS_I_PICKED,
            variables: { search: "" },
          },
          { query: FETCH_USED_ITEM, variables: { useditemId } },
        ],
      });
      console.log("찜 횟수", result.data?.toggleUseditemPick);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickBuy = (item: IUseditem) => () => {
    const IMP = window.IMP;
    IMP.init("imp58383030");
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: item.name,
        amount: 100, // item.price
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: `http://localhost:3000/market${item._id}`,
      },
      async (rsp: { success: any; imp_uid: any }) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          try {
            const result = await createPointTransactionOfLoading({
              variables: { impUid: rsp.imp_uid },
              // refetchQueries: [
              //   {
              //     query: FETCH_USED_ITEM,
              //     variables: { useditemId: item._id },
              //   },
              // ],
            });
            console.log("뮤테이션 결과", result);
            alert("뮤테이션 요청 완료");
          } catch (error) {
            if (error instanceof Error) console.log(error);
          }
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  return (
    <ProductDetailUI
      onClickMoveToBack={onClickMoveToBack}
      onClickDelete={onClickDelete}
      data={data}
      routerId={router.query.id}
      onClickPick={onClickPick}
      onClickBuy={onClickBuy}
      pickedItemsData={pickedItemsData}
    />
  );
};

export default ProductDetail;
