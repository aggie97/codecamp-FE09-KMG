import styled from "@emotion/styled";

export const LogoIcon = styled.span`
  display: block;
  background-image: url("/11pnges.png");
  background-position: -162px 0px;
  width: 94px;
  height: 40px;
  background-size: 363px 300px;
  margin: 0;
`;

export const HomeLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
`;

const Logo = () => {
  return (
    <LogoIcon>
      <HomeLink href="/"></HomeLink>
    </LogoIcon>
  );
};

export default Logo;
