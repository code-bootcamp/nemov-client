import { atom } from "recoil";

export const isOpenState = atom({
  key: "isOpenState",
  default: false,
});

export const isSelectedState = atom({
  key: "isSelected",
  default: [true, false, false, false, false],
});
