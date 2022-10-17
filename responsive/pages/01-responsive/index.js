import styled from "@emotion/styled";
import { breakPoints } from "../../src/styles/media";

const Item = styled.div`
  width: 95%;
  height: 400px;
  background-color: red;

  // tablet 환경에서의 미디어 쿼리
  // 768px 이상 991px 이하
  @media ${breakPoints.tablet} {
    background-color: green;
  }

  // mobile 환겨에서의 미디어 쿼리
  // 767px 이하
  @media ${breakPoints.mobile} {
    background: blue;
  }
`;

const ResponsivePage = () => {
  return <Item>박스입니다.</Item>;
};

export default ResponsivePage;
