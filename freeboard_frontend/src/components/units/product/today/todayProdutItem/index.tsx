import { IUseditem } from "../../../../../commons/types/generated/types";
import Button from "../../../../common/button";
import {
  ProductCard,
  ProductImg,
  ProductInfo,
} from "../../list/ProductList.styles";

interface ITodayProps {
  product: IUseditem;
}

const TodayILookedProduct = ({ product }: ITodayProps) => {
  return (
    <div>
      <ProductCard key={product._id}>
        <div>
          <ProductImg
            src={`https://storage.googleapis.com/${product.images?.[0] ?? ""}`}
          />
          <ProductInfo>{product.name}</ProductInfo>
          <Button>카트에 담지 않기</Button>
        </div>
      </ProductCard>
    </div>
  );
};

export default TodayILookedProduct;
