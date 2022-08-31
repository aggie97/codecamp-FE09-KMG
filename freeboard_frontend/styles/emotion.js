import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  background: #dddddd;
  padding: 54px 0px;
  gap: 100px;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  div img {
    width: 15.73px;
    height: 36px;
  }

  div span {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const BannerBox = styled.div`
  position: relative;

  div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div p {
    width: 400px;
    text-align: center;
  }
`;
