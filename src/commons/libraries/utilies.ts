import { Maybe } from "../types/generated/types";

export const getDiscountPrice = (price?: number, discountRate?: number) => {
  if (price === undefined || discountRate === undefined) {
    return;
  }
  const discountPrice = (price * (100 - discountRate)) / 100;

  return discountPrice;
};

export const getVeganName = (level: Maybe<number> | undefined) => {
  if (level === 1) {
    return "플렉시테리언";
  } else if (level === 2) {
    return "폴로";
  } else if (level === 3) {
    return "페스코";
  } else if (level === 4) {
    return "락토오보";
  } else if (level === 5) {
    return "오보";
  } else if (level === 6) {
    return "락토";
  } else if (level === 7) {
    return "비건";
  }
};

export const getDate = (value: string) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
};
