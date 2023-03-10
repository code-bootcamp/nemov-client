import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

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

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const IsPasswordChange = atom({
  key: "isPasswordChange",
  default: true,
});

export const IsSelectedState = atom({
  key: "IsSelectedState",
  default: 0,
});
