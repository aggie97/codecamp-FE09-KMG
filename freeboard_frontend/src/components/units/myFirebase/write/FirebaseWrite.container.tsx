/* eslint-disable @typescript-eslint/no-misused-promises */
import { collection, addDoc, getFirestore } from "firebase/firestore/lite";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { ChangeEvent, useState } from "react";
import MyFirebaseWriteUI from "./FirebaseWrite.presenter";

const MyFirebaseWrite = () => {
  const [input, setInput] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.id]: event.target.value });
  };

  const onSubmit = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, { ...input });
  };

  return (
    <MyFirebaseWriteUI onChangeInput={onChangeInput} onSubmit={onSubmit} />
  );
};

export default MyFirebaseWrite;
