import * as B from "./BoardDetail.styles";
const BoardDetailUI = ({
  year,
  month,
  day,
  writer,
  title,
  images,
  contents,
  youtubeUrl,
  likeCount,
  dislikeCount,
  address,
  addressDetail,
  onClickAddressLink,
  addressBox,
  loading,
  onClickEdit,
  onClickToList,
  onClickDelete,
}) => {
  return (
    <>
      <B.DetailPageWrapper>
        <>
          {loading ? (
            <div>
              페이지를 불러오는 중 입니다.
              <br /> 잠시만 기다려주세요.
            </div>
          ) : (
            <>
              <B.Header id="header">
                <B.HeaderLeftBox id="header__left">
                  <B.ImgBox id="img__box">
                    <B.ProfileImg id="profile__img" src="/profile.png" />
                  </B.ImgBox>
                  <B.WriterAndCreatedDateBox id="writer__createdAt">
                    <B.Writer id="writer">{writer}</B.Writer>
                    <B.CreatedDate id="createdAt">
                      Date : {year}.{month}.{day}
                    </B.CreatedDate>
                  </B.WriterAndCreatedDateBox>
                </B.HeaderLeftBox>
                <B.HeaderRightBox id="header__right">
                  <B.UrlBox id="url__box">
                    <a>
                      <B.UrlAddressImg id="url_icon" src="/link.png" />
                    </a>
                  </B.UrlBox>
                  <B.AddressBox id="boardAddress_box">
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
                      <B.UrlAddressImg id="address-icon" src="/address.png" />
                    </a>
                  </B.AddressBox>
                </B.HeaderRightBox>
              </B.Header>
              <B.DivideLine id="divide-line"></B.DivideLine>
              <B.Main id="main-content-box">
                <B.Title id="title">{title}</B.Title>
                <B.MainImgBox id="image-box">
                  <B.MainImage src="/mainImage.png" />
                </B.MainImgBox>
                <B.MainContent id="contents">{contents}</B.MainContent>
              </B.Main>
              <B.YoutubeBox>
                <B.YoutubePlayer src={youtubeUrl}></B.YoutubePlayer>
              </B.YoutubeBox>
              <B.LikeDislikeBox id="like-dislike-box">
                <B.LikeBox href="#3" id="like">
                  <B.LikeImg src="/like.png" />
                  {likeCount}
                </B.LikeBox>
                <B.DislikeBox href="#4" id="dislike">
                  <B.DislikeImg src="/dislike.png" />
                  {dislikeCount}
                </B.DislikeBox>
              </B.LikeDislikeBox>
            </>
          )}
        </>
      </B.DetailPageWrapper>

      <B.ButtonBox>
        <B.DeleteButton onClick={onClickDelete}>삭제</B.DeleteButton>
        <B.UpdateButton onClick={onClickEdit}>수정</B.UpdateButton>
        <B.GoToListButton onClick={onClickToList}>목록</B.GoToListButton>
      </B.ButtonBox>
    </>
  );
};

export default BoardDetailUI;
