import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import Head from "next/head";
import { IQuery, IUseditem } from "../../../../commons/types/generated/types";
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
  onClickPick: (id: string) => () => void;
  onClickDelete: (useditemId: string) => () => void;
  routerId?: string | string[];
  data?: {
    fetchUseditem: IUseditem;
  };
  onClickMoveToBack: () => void;
  pickedItemsData: Pick<IQuery, "fetchUseditemsIPicked">;
}

const ProductDetailUI = (props: IProductDetailProps) => {
  console.log(props.data?.fetchUseditem.useditemAddress?.address);
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* iamport.payment.js */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <ProductDetailWrapper>
        <Title>{props.data?.fetchUseditem.name}</Title>
        <Header>
          <HeaderLeft>
            <div>
              <HeartOutlined style={{ color: "red", fontSize: "1em" }} />
              {props.data?.fetchUseditem.pickedCount}
            </div>
            <div>
              등록 일시: {props.data?.fetchUseditem.createdAt.slice(0, 10)}
            </div>
          </HeaderLeft>
          <HeaderRight>
            <button
              style={{
                display: "flex",
                backgroundColor: "transparent",
                border: "none",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
              }}
              type="button"
              onClick={props.onClickPick(props.data?.fetchUseditem._id ?? "")}
            >
              <span>찜하기</span>
              {props.pickedItemsData?.fetchUseditemsIPicked.filter(
                (el) => el?._id === props.routerId
              ).length ? (
                <HeartFilled style={{ fontSize: "2em", color: "red" }} />
              ) : (
                <HeartOutlined style={{ fontSize: "2em", color: "red" }} />
              )}
            </button>
          </HeaderRight>
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
            <div
              dangerouslySetInnerHTML={{
                __html: props.data?.fetchUseditem.contents ?? "",
              }}
            ></div>
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
              <Button onClick={props.onClickBuy(props.data?.fetchUseditem)}>
                {props.data?.fetchUseditem.soldAt
                  ? "판매 완료된 상품입니다."
                  : "구매하기"}
              </Button>
              <p>상품 신고하기</p>
              <Divider />
              <Button onClick={props.onClickMoveToBack}>돌아가기</Button>
              <Divider />
              <Button
                onClick={props.onClickDelete(
                  props.data?.fetchUseditem._id ?? ""
                )}
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
    </>
  );
};

export default ProductDetailUI;
