import Button from "../../../common/button";
import CommonError from "../../../common/error";
import Input from "../../../common/input";
import { ProductFormWrapper } from "./ProductRegister.styles";
import { IProductProps } from "./ProductRegister.types";

const ProductRegisterUI = (props: IProductProps) => {
  return (
    <ProductFormWrapper>
      <form onClick={props.handleSubmit(props.onSubmit)}>
        <Input
          type="text"
          placeholder="상품명을 작성해주세요."
          {...props.register}
        />
        <CommonError>{props.errors.name?.message}</CommonError>
        <Input
          type="text"
          placeholder="상품에 대해 간단하게 소개해주세요."
          {...props.register}
        />
        <CommonError>{props.errors.remarks?.message}</CommonError>
        <textarea
          placeholder="추가적인 설명이 있다면 작성해주세요."
          {...props.register}
        />
        <CommonError>{props.errors.contents?.message}</CommonError>
        <Input
          type="text"
          placeholder="판매 가격을 입력해주세요."
          {...props.register}
        />
        <CommonError>{props.errors.price?.message}</CommonError>
        <Input
          type="text"
          placeholder="#태그 를 작성해주세요."
          {...props.register}
        />
        <CommonError></CommonError>
        <Input type="text" />
        <Input type="text" />
        <Input type="file" />
        <Button>상품 등록하기</Button>
      </form>
    </ProductFormWrapper>
  );
};

export default ProductRegisterUI;
