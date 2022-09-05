import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  DetailPageWrapper,
  Header,
  ProfileImg,
  HeaderLeftBox,
  ImgBox,
  WriterAndCreatedDateBox,
  Writer,
  CreatedDate,
  HeaderRightBox,
  UrlBox,
  AddressBox,
  UrlAddressImg,
  DivideLine,
  Main,
  Title,
  MainImgBox,
  MainImage,
  MainContent,
  YoutubeBox,
  YoutubePlayer,
  LikeDislikeBox,
  LikeBox,
  DislikeBox,
  LikeImg,
  DislikeImg,
} from "../../../styles/detailStyles";
const FETCH_BOARD = gql`
  query ($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress {
        _id
        zipcode
        address
        addressDetail
      }
      createdAt
    }
  }
`;

const DynamicRoutedPage = () => {
  const router = useRouter();
  const {
    loading,
    data = {
      fetchBoard: {
        writer: "",
        createdAt: "",
        title: "",
        images: "",
        contents: "",
        youtubeUrl: "",
        likeCount: "",
        dislikeCount: "",
        boardAddress: { address: "", addressDetail: "" },
      },
    },
  } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  const [addressBox, setAddressBox] = useState(false);

  const onClickAddressLink = (event) => {
    addressBox ? setAddressBox(false) : setAddressBox(true);
  };

  console.log("loading: ", loading);
  console.log("data:", data);

  const {
    writer,
    createdAt,
    title,
    images,
    contents,
    youtubeUrl,
    likeCount,
    dislikeCount,
    boardAddress: { address, addressDetail },
  } = data?.fetchBoard;

  const [year, month, day] = createdAt.slice(0, 10).split("-");

  return (
    <DetailPageWrapper>
      <>
        {loading ? (
          <div>
            페이지를 불러오는 중 입니다.
            <br /> 잠시만 기다려주세요.
          </div>
        ) : (
          <>
            <Header id="header">
              <HeaderLeftBox id="header__left">
                <ImgBox id="img__box">
                  <ProfileImg id="profile__img" src="/profile.png" />
                </ImgBox>
                <WriterAndCreatedDateBox id="writer__createdAt">
                  <Writer id="writer">{writer}</Writer>
                  <CreatedDate id="createdAt">
                    Date : {year}.{month}.{day}
                  </CreatedDate>
                </WriterAndCreatedDateBox>
              </HeaderLeftBox>
              <HeaderRightBox id="header__right">
                <UrlBox id="url__box">
                  <a>
                    <UrlAddressImg id="url_icon" src="/link.png" />
                  </a>
                </UrlBox>
                <AddressBox id="boardAddress_box">
                  {addressBox ? (
                    <div id="addressContentBox">
                      <img id="addressBackground" src="/addressAlert.png" />
                      <div>
                        <span>{address}</span>
                        <span>{addressDetail}</span>
                      </div>
                    </div>
                  ) : null}
                  <a href="#2" onClick={onClickAddressLink}>
                    <UrlAddressImg id="address-icon" src="/address.png" />
                  </a>
                </AddressBox>
              </HeaderRightBox>
            </Header>
            <DivideLine id="divide-line"></DivideLine>
            <Main id="main-content-box">
              <Title id="title">{title}</Title>
              <MainImgBox id="image-box">
                <MainImage src="/mainImage.png" />
              </MainImgBox>
              <MainContent id="contents">{contents}</MainContent>
            </Main>
            <YoutubeBox>
              <YoutubePlayer src={youtubeUrl}></YoutubePlayer>
            </YoutubeBox>
            <LikeDislikeBox id="like-dislike-box">
              <LikeBox href="#3" id="like">
                <LikeImg src="/like.png" />
                {likeCount}
              </LikeBox>
              <DislikeBox href="#4" id="dislike">
                <DislikeImg src="/dislike.png" />
                {dislikeCount}
              </DislikeBox>
            </LikeDislikeBox>
          </>
        )}
      </>
    </DetailPageWrapper>
  );
};

export default DynamicRoutedPage;
