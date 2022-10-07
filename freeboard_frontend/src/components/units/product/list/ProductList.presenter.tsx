import { IQuery, IUseditem } from "../../../../commons/types/generated/types";
import Button from "../../../common/button";

import {
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductWrapper,
} from "./ProductList.styles";

interface IProductListProps {
  onClickCart: (item: IUseditem) => () => void;
  itemsData?: Pick<IQuery, "fetchUseditems">;
}

const ProductListUI = ({ onClickCart, itemsData }: IProductListProps) => {
  return (
    <>
      <ProductWrapper style={{ margin: "0 auto", width: "1240px" }}>
        {itemsData?.fetchUseditems.map((item, i) => (
          <ProductCard key={i}>
            <div style={{ overflow: "hidden" }}>
              <ProductImg src={item.images?.[0]} />
              <ProductInfo>{item.name}</ProductInfo>
              <Button onClick={onClickCart(item)}>카트에 담기</Button>
            </div>
          </ProductCard>
        ))}
      </ProductWrapper>
    </>
  );
};

export default ProductListUI;
