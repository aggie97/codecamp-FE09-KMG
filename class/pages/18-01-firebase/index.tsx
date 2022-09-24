/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
import { firebaseApp } from "../_app";

const MyApp = () => {
  const onClickSubmit = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: "민겸",
      title: "파이어베이스",
      contents: "재밌어보인당",
    });
  };

  const onClickFetch = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const data = result.docs.map((el) => el.data()); // docs 에서 요소 하나 하나를 데이터로 뽑는 과정이 필요함..
    console.log(data);
  };

  return (
    <div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
      <div></div>
    </div>
  );
};

export default MyApp;
