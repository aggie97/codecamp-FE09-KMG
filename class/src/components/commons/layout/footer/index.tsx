import styled from "@emotion/styled";

type ILayoutProps = { children: JSX.Element };

const Wrapper = styled.div`
  height: 50px;
  background-color: gray;
`;

const Footer = (props: ILayoutProps) => {
  return <Wrapper>여기는 푸터입니다.</Wrapper>;
};

export default Footer;
