const Child2 = ({ count, setCount }) => {
  return (
    <>
      <div style={{ background: "#ff3f54" }}>
        <div>자식2의 카운트: {count}</div>
        <button onClick={() => setCount((prev) => prev + 1)}>
          카운트 올리기
        </button>
      </div>
    </>
  );
};

export default Child2;
