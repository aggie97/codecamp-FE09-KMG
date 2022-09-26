import {
  Wrapper,
  WrapperInner,
  WrapperInnerLeft,
  WrapperInnerRight,
} from "./HomeNav.styles";

const HomeNavigationUI = () => {
  return (
    <>
      <Wrapper>
        <WrapperInner>
          <WrapperInnerLeft>left</WrapperInnerLeft>
          <WrapperInnerRight>right</WrapperInnerRight>
        </WrapperInner>
      </Wrapper>
    </>
  );
};

export default HomeNavigationUI;
