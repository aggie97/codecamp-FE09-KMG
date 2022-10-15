import {
  ProductCard,
  ProductImg,
  ProductInfo,
} from "../../units/product/list/ProductList.styles";

// import Button from "../button";

interface IProductItemProps {}

const ProductItem = ({ item, onClickProductItem }: IProductItemProps) => {
  return (
    <ProductCard key={item._id} onClick={onClickProductItem(item)}>
      <ProductImg
        src={`https://storage.googleapis.com/${item.images?.[0] ?? ""}`}
      />
      <ProductInfo>{item.name}</ProductInfo>
      {/* <Button onClick={onClickCart(item)}>카트에 담기</Button> */}
    </ProductCard>
  );
};

export default ProductItem;
