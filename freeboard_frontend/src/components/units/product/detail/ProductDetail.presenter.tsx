import { Divider } from "antd";
import { IUseditem } from "../../../../commons/types/generated/types";
import Button from "../../../common/button";
import KakaoMapLauncher from "../../../common/kakaoMap";
import {
  Header,
  HeaderLeft,
  HeaderRight,
  Image,
  ImageBox,
  ImageShadow,
  ImageWrapper,
  LeftHeader,
  LeftTags,
  LeftTitle,
  MainContent,
  MainLeft,
  MainRight,
  Price,
  ProductDetailWrapper,
  SellerProfile,
  StickyBox,
  Title,
} from "./ProductDetail.styles";

interface IProductDetailProps {
  onClickDelete(_id: string | undefined): (() => void) | undefined;
  routerId?: string | string[];
  data?: {
    fetchUseditem: IUseditem;
  };
  onClickMoveToBack: () => void;
}

const ProductDetailUI = (props: IProductDetailProps) => {
  console.log(props.data?.fetchUseditem.useditemAddress?.address);
  return (
    <ProductDetailWrapper>
      <Title>{props.data?.fetchUseditem.name}</Title>
      <Header>
        <HeaderLeft>
          <div>찜 횟수: {props.data?.fetchUseditem.pickedCount}</div>
          <div>
            등록 일시: {props.data?.fetchUseditem.createdAt.slice(0, 10)}
          </div>
        </HeaderLeft>
        <HeaderRight>찜하기 버튼</HeaderRight>
      </Header>
      <ImageWrapper>
        {props.data?.fetchUseditem.images
          ?.filter((url) => url)
          .map((imageUrl) => (
            <ImageBox key={imageUrl}>
              <ImageShadow></ImageShadow>
              <Image src={`https://storage.googleapis.com/${imageUrl}`} />
            </ImageBox>
          ))}
      </ImageWrapper>
      <MainContent>
        <MainLeft>
          <LeftHeader>
            <LeftTitle>
              {props.data?.fetchUseditem.seller}님이 떠나보내는{" "}
              {props.data?.fetchUseditem.name}
              {props.data?.fetchUseditem.tags?.map((tag, i) => (
                <LeftTags key={i}>#{tag}</LeftTags>
              ))}
            </LeftTitle>
            <SellerProfile>
              <img
                width={56}
                height={56}
                src={props.data?.fetchUseditem.seller?.picture ?? ""}
              />
            </SellerProfile>
          </LeftHeader>
          <Divider></Divider>
          <div>상품 소개: {props.data?.fetchUseditem.remarks}</div>
          <div>상품 설명: {props.data?.fetchUseditem.contents}</div>
          <div>
            <div>
              거래 위치: {props.data?.fetchUseditem.useditemAddress?.address},
              {props.data?.fetchUseditem.useditemAddress?.addressDetail}
            </div>
          </div>
        </MainLeft>
        <MainRight>
          <StickyBox>
            <Price>₩{props.data?.fetchUseditem.price}</Price>
            <Divider />
            <Button onClick={props.onClickBuy}>구매하기</Button>
            <p>상품 신고하기</p>
            <Divider />
            <Button onClick={props.onClickMoveToBack}>돌아가기</Button>
            <Divider />
            <Button
              onClick={props.onClickDelete(props.data?.fetchUseditem._id)}
            >
              삭제하기
            </Button>
          </StickyBox>
        </MainRight>
      </MainContent>
      <div style={{ height: "480px" }}>
        <KakaoMapLauncher
          address={props.data?.fetchUseditem.useditemAddress?.address ?? ""}
          routerId={String(props.routerId)}
        />
      </div>
    </ProductDetailWrapper>
  );
};

export default ProductDetailUI;
