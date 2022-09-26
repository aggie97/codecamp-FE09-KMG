/* eslint-disable @typescript-eslint/no-misused-promises */
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import MyFirebaseListUI from "./FirebaseList.presenter";

const MyFirebaseList = () => {
  const [firebaseList, setFirebaseList] = useState<Document>([]);
  useEffect(() => {
    const fetchBoards = async () => {
      const board = collection(getFirestore(firebaseApp), "board");
      const result = await getDocs(board);
      const data = result.docs.map((el) => el.data());
      setFirebaseList(data);
    };
    void fetchBoards();
  });
  return <MyFirebaseListUI data={firebaseList} />;
};

export default MyFirebaseList;
