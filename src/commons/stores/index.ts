import { atom } from "recoil";

export const isOpenState = atom({
  key: "isOpenState",
  default: false,
});

export const isEditState = atom({
  key: "isEditState",
  default: false,
});
