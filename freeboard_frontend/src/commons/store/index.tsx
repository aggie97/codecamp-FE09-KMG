import { atom } from "recoil";
import { v4 } from "uuid";

export const accessTokenState = atom({
  key: `accessTokenState/${v4()}`,
  default: "",
});

export const isLoggedInUserState = atom({
  key: `isLoggedInUserState/${v4()}`,
  default: false,
});

export const cartItemsState = atom({
  key: `cartItemsState/${v4()}`,
  default: [],
});

export const todayILookedProducts = atom({
  key: `todayILookedProducts${v4()}`,
  default: [],
});

export const stuckState = atom({
  key: `stuckState/${v4()}`,
  default: false,
});
