import styled from "@emotion/styled";

type ILayoutProps = { children: JSX.Element };

const Wrapper = styled.div`
  height: 100px;
  background-color: green;
`;

const Header = (props: ILayoutProps) => {
  return <Wrapper>여기는 헤더입니다.</Wrapper>;
};

export default Header;
