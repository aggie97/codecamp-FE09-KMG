import { Fragment } from "react";

const NavigationUI = ({ onClickMenu }) => {
  const idMenu = [
    { id: "게시판주소", menu: "게시판" },
    { id: "마켓주소", menu: "마켓" },
  ];
  return (
    <div>
      <Fragment>
        {idMenu.map((el) => (
          <li key={el.id} id={el.id} onClick={onClickMenu}>
            {el.menu}
          </li>
        ))}
      </Fragment>

      {/* 아래와 위는 같다. 위가 확장성이 더 좋을 뿐.. */}

      <li id="게시판 주소" onClick={onClickMenu}>
        게시판
      </li>
      <li id="마켓 주소" onClick={onClickMenu}>
        마켓
      </li>
    </div>
  );
};

export default NavigationUI;
