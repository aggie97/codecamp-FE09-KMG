import styled from "@emotion/styled";

type ILayoutProps = { children: JSX.Element };

const Wrapper = styled.div`
  height: 100px;
  background-color: yellow;
`;

const Banner = (props: ILayoutProps) => {
  return <Wrapper>여기는 배너입니다.</Wrapper>;
};

export default Banner;
