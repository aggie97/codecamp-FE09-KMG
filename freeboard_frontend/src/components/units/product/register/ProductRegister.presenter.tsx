import CommonError from "../../../common/error";
import Input from "../../../common/input";
import { ProductFormWrapper } from "./ProductRegister.styles";
import { IProductProps } from "./ProductRegister.types";

const ProductRegisterUI = (props: IProductProps) => {
  return (
    <ProductFormWrapper>
      <form>
        <Input
          type="text"
          placeholder="상품명을 작성해주세요."
          register={props.register("name")}
        />
        <CommonError>{props.errors.name?.message}</CommonError>
        <Input
          type="text"
          placeholder="상품에 대해 간단하게 소개해주세요."
          register={props.register("remarks")}
        />
        <CommonError>{props.errors.remarks?.message}</CommonError>
        <textarea
          placeholder="추가적인 설명이 있다면 작성해주세요."
          {...props.register("contents")}
        />
        <CommonError>{props.errors.contents?.message}</CommonError>
        <Input
          type="number"
          placeholder="판매 가격을 입력해주세요."
          register={props.register("price")}
        />
        <CommonError>{props.errors.price?.message}</CommonError>
        <Input type="text" placeholder="#태그" {...props.register} />
        <Input type="text" />
        <Input type="text" />
        <Input type="file" />
        <button type="submit" onClick={props.handleSubmit(props.onSubmit)}>
          등록
        </button>
        {/* <Button type="submit">상품 등록하기</Button> */}
      </form>
    </ProductFormWrapper>
  );
};

export default ProductRegisterUI;
