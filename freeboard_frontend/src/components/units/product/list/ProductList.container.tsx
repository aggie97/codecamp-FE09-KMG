import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { cartItemsState } from "../../../../commons/store";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import ProductListUI from "./ProductList.presenter";

type IItems = Array<
  Pick<IUseditem, "_id" | "contents" | "images" | "name" | "price">
>;

const FETCH_USED_ITEMS = gql`
  query {
    fetchUseditems {
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
  const { data: itemsData } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const [, setItems] = useRecoilState(cartItemsState);

  const onClickCart = (item: IUseditem) => () => {
    const items: IItems = JSON.parse(localStorage.getItem("useditems") ?? "[]");
    const temp = items.filter((el) => el._id === item._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다!!!");
      return;
    }
    items.push(item);
    setItems(items);
    localStorage.setItem("useditems", JSON.stringify(items));
  };
  return <ProductListUI onClickCart={onClickCart} itemsData={itemsData} />;
};

export default ProductList;
