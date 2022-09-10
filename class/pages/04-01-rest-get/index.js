import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
  const [title, setTitle] = useState("");

  const onClickAsync = () => {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result);
  };

  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
    console.log(result.data.title);
    setTitle(result.data.title);
  };

  return (
    <>
      <span>async</span>
      <button onClick={onClickAsync}>REST-API(비동기)</button>
      <hr />
      <span>sync</span>
      <button onClick={onClickSync}>Rest-API(동기)</button>
      <div>{title}</div>
    </>
  );
}
