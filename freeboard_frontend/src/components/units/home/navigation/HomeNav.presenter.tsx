import {
  Wrapper,
  WrapperInner,
  WrapperInnerLeft,
  WrapperInnerRight,
} from "./HomeNav.styles";

const HomeNavigationUI = ({ idMenu, onClickMenu }) => {
  return (
    <>
      <Wrapper>
        <WrapperInner>
          <WrapperInnerLeft>
            <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
              {idMenu.map((el) => (
                <li key={el.id} id={el.id} onClick={onClickMenu}>
                  {el.menu}
                </li>
              ))}
            </ul>
          </WrapperInnerLeft>
          <WrapperInnerRight>right</WrapperInnerRight>
        </WrapperInner>
      </Wrapper>
    </>
  );
};

export default HomeNavigationUI;
