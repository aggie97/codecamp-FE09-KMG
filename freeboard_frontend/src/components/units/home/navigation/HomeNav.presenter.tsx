import {
  Wrapper,
  WrapperInner,
  WrapperInnerLeft,
  WrapperInnerRight,
} from "./HomeNav.styles";

const HomeNavigationUI = ({ menu, onClickMenu, sign }) => {
  return (
    <>
      <Wrapper>
        <WrapperInner>
          <WrapperInnerLeft>
            <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
              {menu.map((el) => (
                <li key={el.id} id={el.id} onClick={onClickMenu}>
                  {el.menu}
                </li>
              ))}
            </ul>
          </WrapperInnerLeft>
          <WrapperInnerRight>
            <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
              {sign.map((el) => (
                <li key={el.id} id={el.id} onClick={onClickMenu}>
                  {el.menu}
                </li>
              ))}
            </ul>
          </WrapperInnerRight>
        </WrapperInner>
      </Wrapper>
    </>
  );
};

export default HomeNavigationUI;
