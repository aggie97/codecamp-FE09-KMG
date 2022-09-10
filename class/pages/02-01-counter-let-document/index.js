const CounterLetDocumentPage = () => {
  const plus = () => {
    const count = Number(document.querySelector("#count").innerText) + 1;
    document.querySelector("#count").innerText = count;
  };

  const minus = () => {
    const count = Number(document.querySelector("#count").innerText) - 1;
    document.querySelector("#count").innerText = count;
  };

  return (
    <div>
      <div id="count">0</div>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default CounterLetDocumentPage;
