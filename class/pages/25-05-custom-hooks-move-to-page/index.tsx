import useMoveToPage from "../../src/components/commons/hooks/useMoveToPage";

const CustomHooksMoveToPage = () => {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <button onClick={onClickMoveToPage("/boards")}>게시판으로 이동</button>
      <button onClick={onClickMoveToPage("/market")}>마켓으로 이동</button>
      <button onClick={onClickMoveToPage("/myPage")}>마이페이지로 이동</button>
    </>
  );
};

export default CustomHooksMoveToPage;
