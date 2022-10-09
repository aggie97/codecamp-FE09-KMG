import { Modal } from "antd";
import Button from "../../../common/button";
import CommonError from "../../../common/error";
import Input from "../../../common/input";
import KakaoMapLauncher from "../../../common/kakaoMap";
import {
  AddressInputModal,
  NoImageBox,
  ProductFormWrapper,
} from "./ProductRegister.styles";
import { IProductProps } from "./ProductRegister.types";

const ProductRegisterUI = (props: IProductProps) => {
  return (
    <>
      {props.isOpen && (
        <Modal visible={true}>
          <AddressInputModal onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <ProductFormWrapper>
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
          <div style={{ display: "flex", width: "100%" }}>
            <div>
              <Input
                type="text"
                placeholder="상품명을 작성해주세요."
                register={props.register("name")}
              />
              <CommonError>{props.errors.name?.message}</CommonError>
            </div>
            <div>
              <Input
                type="number"
                placeholder="판매 가격을 입력해주세요."
                register={props.register("price")}
              />
              <CommonError>{props.errors.price?.message}</CommonError>
            </div>
          </div>
          <Input
            type="text"
            placeholder="상품에 대해 간단하게 소개해주세요."
            register={props.register("remarks")}
          />
          <CommonError>{props.errors.remarks?.message}</CommonError>
          <textarea
            style={{ width: "100%", height: "300px", resize: "none" }}
            placeholder="추가적인 설명을 작성해주세요."
            {...props.register("contents")}
          />
          <CommonError>{props.errors.contents?.message}</CommonError>

          <Input
            type="text"
            placeholder="#태그"
            register={props.register("tags")}
          />

          <div style={{ display: "flex" }}>
            <KakaoMapLauncher
              address={props.getValues("useditemAddress.address")}
              setValue={props.setValue}
            />
            <div>
              <Input
                type="text"
                placeholder="우편번호"
                register={props.register("useditemAddress.zipcode")}
              />
              <Input
                type="text"
                placeholder="주소"
                register={props.register("useditemAddress.address")}
              />
              <Input
                type="text"
                placeholder="상세 주소"
                register={props.register("useditemAddress.addressDetail")}
              />
              <Button type="button" onClick={props.onClickSearchAddress}>
                우편번호 검색하기
              </Button>
            </div>
            <div>
              <label htmlFor="lat">위도</label>
              <Input
                type="text"
                readonly={true}
                register={props.register("useditemAddress.lat")}
              />
              <label htmlFor="lng">경도</label>
              <Input
                type="text"
                readonly={true}
                register={props.register("useditemAddress.lng")}
              />
            </div>
          </div>
          <span>중고 상품 이미지 올리기</span>

          <div style={{ display: "flex" }}>
            {new Array(3).fill(1).map((_, index) => (
              <>
                <NoImageBox onClick={props.onClickBox} htmlFor={`file${index}`}>
                  {props.images[index] ? (
                    <img
                      src={`https://storage.googleapis.com/${props.images?.[index]}`}
                      style={{
                        width: "100px",
                        height: "100px",
                      }}
                    />
                  ) : (
                    "미리보기"
                  )}
                </NoImageBox>
                <input
                  id={`file${index}`}
                  type="file"
                  ref={props.imageRef}
                  style={{ opacity: "0", width: "0px" }}
                  {...props.register("images")}
                  onChange={props.onChangeImageBox(index)}
                />
              </>
            ))}
          </div>
          <Button>상품 등록하기</Button>
        </form>
      </ProductFormWrapper>
    </>
  );
};

export default ProductRegisterUI;
