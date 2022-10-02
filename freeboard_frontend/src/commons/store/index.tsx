import { atom } from "recoil";

export const isLoginPageState = atom({
  key: "isLoginPageState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const isLoggedInUserState = atom({
  key: "isLoggedInUserState",
  default: false,
});
