export const getDiscountPrice = (price?: number, discountRate?: number) => {
  if (price === undefined || discountRate === undefined) {
    return price === 0;
  }
  const discountPrice = (price * (100 - discountRate)) / 100;

  return `${discountPrice}`;
};
