import { atom } from "recoil";

export const isOpenState = atom({
  key: "isOpenState",
  default: false,
});

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const isHiddenState = atom({
  key: "isHiddenState",
  default: false,
});

export const isSellerState = atom({
  key: "isSellerState",
  default: false,
});
