import styled from "@emotion/styled";

type ILayoutProps = { children: JSX.Element };

const Wrapper = styled.div`
  height: 100px;
  background-color: blue;
`;

const Menu = (props: ILayoutProps) => {
  return <Wrapper>여기는 메뉴입니다.</Wrapper>;
};

export default Menu;
