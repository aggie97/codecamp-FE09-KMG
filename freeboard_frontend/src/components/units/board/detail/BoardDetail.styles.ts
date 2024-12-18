import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import ReactPlayer from "react-player";
/* --------- 게시물 상세 페이지 ---------- */

export const DetailPageWrapper = styled.div`
  width: 1240px;
  margin: 0 auto;
  margin-top: 5rem;
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
`;
export const AddressContentBox = styled.div`
  position: absolute;
  top: -80px;
  left: -333px;
  width: 376px;
  display: flex;
  justify-content: end;
  overflow: hidden;
`;

export const AddressBackground = styled.img`
  position: absolute;
  width: 100%;
  height: 72px;
`;

export const AddressTextBox = styled.div`
  padding: 0.5rem 1rem 1rem 1rem;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

export const AddressText = styled.div`
  font-weight: 500;
  white-space: nowrap;
  color: #fff;
  z-index: 99;
  text-align: end;
`;

export const AddressButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
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
  max-width: 100%;
  object-fit: contain;
  object-position: center center;
`;

export const MainContent = styled.div``;

export const YoutubeBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;

export const YoutubePlayer = styled(ReactPlayer)`
  border: none;
`;

export const LikeDislikeBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const moveUpAndDown = keyframes`
  0%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(-10px);
  }
  100%{
    transform: translateY(0px);
  }
`;

// const danceWithLight = keyframes`
//   0%{
//     transform: translateY(0px);
//     color: #ffd600;
//   }
//   40%{
//     transform: translateY(-15px);
//     color: #ffff00;
//   }
//   50%{
//     transform: translateY(-20px) rotate(-0.1turn);
//     color: #ffd6ff;
//   }
//   60%{
//     transform: translateY(-15px);
//     transform: rotate(0turn);
//     color: #ffff00;
//   }

//   100%{
//     transform: translateY(0px);
//     color: #828282;
//   }
// `;

export const LikeBox = styled.button`
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
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const DislikeBox = styled.button`
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
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const LikeImg = styled.svg`
  &:hover {
    color: #ffd600;
    animation: ${moveUpAndDown} 1s infinite linear;
  }
`;
export const DislikeImg = styled.img`
  width: 22px;
  height: 20px;
`;

export const ButtonBox = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 1em;
  padding: 5rem 0;

  & > button {
    flex: 1;
    padding: 1em 3em;
    background: #fff;
    border: 1px solid #bdbdbd;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 5px;
  }

  & > button:hover {
    background: #ffd600;
  }
`;
export const DeleteButton = styled.button``;
export const UpdateButton = styled.button``;
export const GoToListButton = styled.button``;
