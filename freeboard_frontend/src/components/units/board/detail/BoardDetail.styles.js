import styled from "@emotion/styled";

/* --------- 게시물 상세 페이지 ---------- */

export const DetailPageWrapper = styled.div`
  width: 1200px;
  height: 100%;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  padding: 5rem 6.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & > * {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeftBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgBox = styled.div`
  padding: 5px;
  padding-right: 10px;
  display: flex;
`;

export const ProfileImg = styled.img`
  width: 56px;
  height: 56px;
`;

export const WriterAndCreatedDateBox = styled.div``;

export const Writer = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  text-align: left;
`;

export const CreatedDate = styled.div`
  color: gray;
  font-weight: 400;
`;

export const HeaderRightBox = styled.div`
  display: flex;
`;

export const UrlBox = styled.div``;
export const AddressBox = styled.div`
  padding-left: 20px;
  position: relative;

  #addressContentBox {
    position: absolute;
    top: -80px;
    left: -340px;
  }

  #addressBackground {
    position: absolute;
    width: 376px;
    height: 72px;
  }

  #addressContentBox div {
    padding: 0.5rem 1rem 1rem 1rem;
    width: 376px;
    height: 72px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }

  #addressContentBox div span {
    font-weight: 500;
    color: #fff;
    z-index: 99;
  }
`;

export const UrlAddressImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const DivideLine = styled.div`
  border-top: 1px solid #bdbdbd;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 80px;
`;

export const Title = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 36px;
  font-weight: 700;
`;

export const MainImgBox = styled.div``;
export const MainImage = styled.img`
  width: 100%;
  height: 480px;
`;

export const MainContent = styled.div``;

export const YoutubeBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 120px 0;
`;

export const YoutubePlayer = styled.iframe`
  width: 486px;
  height: 240px;
  border: none;
`;

export const LikeDislikeBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const LikeBox = styled.a`
  width: 40px;
  height: 51px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #ffd600;
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  font-weight: 400;
`;
export const DislikeBox = styled.a`
  width: 40px;
  height: 51px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #828282;
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  font-weight: 400;
`;

export const LikeImg = styled.img`
  width: 20px;
  height: 18px;
`;
export const DislikeImg = styled.img`
  width: 22px;
  height: 20px;
`;