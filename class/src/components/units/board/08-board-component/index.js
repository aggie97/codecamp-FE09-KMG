const BoardComponent = ({ purpose }) => {
  return (
    <>
      <h1>${purpose ? "수정" : "등록"}페이지</h1>
      제목 : <input type="text" />
      <br />
      내용 : <input type="text" />
      <br />
      <button>${purpose ? "수정" : "등록"}하기</button>
    </>
  );
};

export default BoardComponent;
