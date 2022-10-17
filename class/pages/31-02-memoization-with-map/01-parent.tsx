import { useState } from "react";
import Word from "./02-child";
import { v4 as uuidv4 } from "uuid";
const MemoizationParentPage = () => {
  const [data, setData] = useState("철수는 오늘 점심을 맛있게 먹었습니다.");
  const onClickChange = () => {
    setData("영희는 오늘 저녁을 맛없게 먹었습니다.");
  };
  return (
    <>
      {/* {data.split(" ").map((el, index) => (
        <Word key={index} el={el} />
      ))} */}
      {data.split(" ").map((el) => (
        <Word key={uuidv4()} el={el} />
      ))}
      <button onClick={onClickChange}>Change</button>
    </>
  );
};

export default MemoizationParentPage;
