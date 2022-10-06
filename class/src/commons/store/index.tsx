import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const loginToken = atom({
  key: "loginToken",
  default: "",
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});
