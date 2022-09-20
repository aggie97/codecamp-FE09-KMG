const Child1 = ({ count, setCount }) => {
  return (
    <>
      <div style={{ background: "#4f64f6" }}>
        <div>자식1의 카운트: {count}</div>
        <button onClick={() => setCount((prev) => prev + 1)}>
          카운트 올리기
        </button>
      </div>
    </>
  );
};

export default Child1;
