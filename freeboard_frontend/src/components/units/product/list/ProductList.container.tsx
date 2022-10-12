import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  cartItemsState,
  todayILookedProducts,
} from "../../../../commons/store";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import ProductListUI from "./ProductList.presenter";

// type IItems = Array<
//   Pick<IUseditem, "_id" | "contents" | "images" | "name" | "remarks" | "price">
// >;

const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int) {
    fetchUseditems(page: $page) {
      _id
      name
      contents
      price
      images
      pickedCount
    }
  }
`;

const ProductList = () => {
  const router = useRouter();
  const [, setTodayItem] = useRecoilState(todayILookedProducts);
  const { data: itemsData, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const [, setItems] = useRecoilState(cartItemsState);

  const onClickCart = (item: IUseditem) => (event: MouseEvent) => {
    event.stopPropagation();
    const items = JSON.parse(localStorage.getItem("useditems") ?? "[]");
    const temp = items.filter((el: IUseditem) => el._id === item._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다!!!");
      return;
    }
    items.push(item);
    setItems(items);
    localStorage.setItem("useditems", JSON.stringify(items));
  };

  const onClickProductItem = (item: IUseditem) => async () => {
    const items = JSON.parse(localStorage.getItem("TILP") ?? "[]");
    const temp = items.filter((el) => el._id === item._id);

    if (temp.length === 1) {
      console.log("로컬스토리지 아이템 중복");
    } else items.unshift(item);

    if (items.length > 5) {
      items.pop();
    }

    setTodayItem((prev) => {
      if (prev.length) {
        const newState = [item, ...prev];
        return [...new Set(newState)];
      } else return [item];
    });
    localStorage.setItem("TILP", JSON.stringify(items));
    await router.push(`/market/${item._id}`);
  };

  // 무한 스크롤 ...
  // const loadFunc = async () => {
  //   if (itemsData === undefined) return;
  //   await fetchMore({
  //     variables: {
  //       page: Math.ceil(itemsData.fetchUseditems.length / 10) + 1,
  //     },
  //     updateQuery: (prev, options) => {
  //       console.log(prev, options);
  //       if (options.fetchMoreResult?.fetchUseditems === undefined) {
  //         return { fetchUseditems: [...prev.fetchUseditems] };
  //       }
  //       return {
  //         fetchUseditems: [
  //           ...prev.fetchUseditems,
  //           ...options.fetchMoreResult.fetchUseditems,
  //         ],
  //       };
  //     },
  //   });
  // };

  return (
    <ProductListUI
      // loadFunc={loadFunc}
      onClickCart={onClickCart}
      itemsData={itemsData}
      onClickProductItem={onClickProductItem}
    />
  );
};

export default ProductList;
