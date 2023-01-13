import { Modal } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ICartOutput } from "../../../../commons/types/generated/types";
import { UseMutationCreateProductOrders } from "../../../commons/hooks/useMutations/product/UseMutationCreateProductOrders";
import { UseMutationToggleProductPick02 } from "../../../commons/hooks/useMutations/toggleProduct/UseMutationToggleProductPick02";
import { UseMutationToggleProductToCart } from "../../../commons/hooks/useMutations/toggleProduct/UseMutationToggleProductToCart";
// import { UseMutationToggleProductToCart } from "../../../commons/hooks/useMutations/toggleProduct/UseMutationToggleProductToCart";
import { UseQueryFetchCart } from "../../../commons/hooks/useQueries/product/UseQueryFetchCart";
// import { UseQueryFetchIsInCart } from "../../../commons/hooks/useQueries/product/UseQueryFetchIsInCart";
import * as S from "./Basket.styles";

// interface IResultType {
//   number?: number | undefined;
//   id?: string;
// }

interface IItemType {
  productId?: string;
  quantity?: number;
}

export default function MypageBasket() {
  const { data } = UseQueryFetchCart();
  const [product, setProduct] = useState<ICartOutput[]>([]);
  useEffect(() => {
    if (data?.fetchCart) {
      setProduct(data.fetchCart);
    }
  }, [data?.fetchCart]);
  console.log({ data, product });

  const { productPick } = UseMutationToggleProductPick02();
  const { toggleProductToCart } = UseMutationToggleProductToCart();
  const { buyProduct, buyProducts } = UseMutationCreateProductOrders();

  // 찜하기
  const onClickPick = (productId: string) => async (e: React.MouseEvent) => {
    try {
      if (productId === undefined) return;
      await productPick(productId);
      Modal.success({ content: "찜한 상품에 추가되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  // 장바구니 삭제
  const onClickDeleteBasket = (productId: string) => async (e: React.MouseEvent) => {
    try {
      await toggleProductToCart({
        variables: {
          productId,
        },
      });
      Modal.success({ content: "상품이 장바구니에서 삭제되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  // 구매 기능 - 하나만 구매할 때
  const onClickBuyProduct = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const Item = product?.filter((el) => {
      if (el.product.id === e.currentTarget.id) {
        return el;
      } else {
        return undefined;
      }
    });
    if (Item === undefined) return;
    console.log(Item[0]);

    let amount = Item[0].product.discountedPrice * Item[0].count;
    if (amount < 50000) {
      amount += 3000;
    }
    const quantity = Item[0].count;
    const productId = Item[0].product.id;
    const value = [{ productId, quantity }];

    void buyProduct(value, amount);
  };

  // 구매 기능 - 한꺼번에 구매할 때
  const onClickBuyProducts = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const value = data?.fetchCart.map((el) => {
      const item: IItemType = {};
      item.productId = el.product.id;
      item.quantity = el.count;
      return item;
    });

    if (product === undefined) {
      return [];
    }
    const sum = product.map((el) => {
      let sum = 0;
      sum += el.product.discountedPrice * el.count;
      return sum;
    });

    let amount = sum.reduce((a, b) => a + b);
    if (amount < 50000) {
      amount += 3000;
    }

    console.log(value, amount);

    void buyProducts(value, amount);

    totalDiscountedPrice = 0;
    priceSum = 0;
    deliveryFee = 0;
    totalSum = 0;
    location.reload();
    // setPriceSum(0);
    // setTotalDiscountedPrice(0);
    // setDeliveryFee(0);
    // setTotalSum(0);
  };

  // 총 상품금액
  let priceSum = 0;
  // const [priceSum, setPriceSum] = useState(0);

  // product?.map((cart) => setPriceSum((prev) => prev + cart.product.price * cart.count));

  product?.map((cart) => {
    priceSum += Number(cart.product.price) * cart.count;
    return priceSum;
  });

  // 총 할인금액
  let totalDiscountedPrice = 0;
  // const [totalDiscountedPrice, setTotalDiscountedPrice] = useState(0);

  // product?.map((cart) =>
  //   setTotalDiscountedPrice(
  //     (prev) => prev + (cart.product.price - cart.product.discountedPrice) * cart.count
  //   )
  // );

  product?.map((cart) => {
    totalDiscountedPrice += (cart.product.price - cart.product.discountedPrice) * cart.count;
    return totalDiscountedPrice;
  });

  // 배송비
  let deliveryFee;
  // const [deliveryFee, setDeliveryFee] = useState(0);

  if (priceSum - totalDiscountedPrice >= 50000) {
    deliveryFee = 0;
    // setDeliveryFee(0);
  } else if (priceSum - totalDiscountedPrice < 50000) {
    deliveryFee = 3000;
  } else {
    deliveryFee = 0;
  }

  // 총 결제금액
  // const [totalSum, setTotalSum] = useState(0);
  // setTotalSum(priceSum - totalDiscountedPrice + deliveryFee);
  let totalSum = priceSum - totalDiscountedPrice + deliveryFee;

  //  수량 버튼
  const onClickCountUp = (productId: string, quantity: number) => (e: React.MouseEvent) => {
    setProduct(
      product?.map((product) => {
        if (product.product.id === productId && quantity >= 1) {
          return {
            ...product,
            count: Number(product.count) + 1,
          };
        } else {
          return product;
        }
      })
    );
  };

  const onClickCountDown = (productId: string, quantity: number) => (e: React.MouseEvent) => {
    setProduct(
      product?.map((product) => {
        if (product.product.id === productId && quantity > 1) {
          return {
            ...product,
            count: Number(product.count) - 1,
          };
        } else {
          return product;
        }
      })
    );
  };

  // 체크박스 기능
  // const checkData = data?.fetchCart.map((el, index) => {
  //   const result: IResultType = {};
  //   result.number = index;
  //   result.id = el.product.id;
  //   return result;
  // });
  // console.log(checkData);
  // const checkData: IData[] = [
  //   { id: 0, title: "선택 1" },
  //   { id: 1, title: "선택 2" },
  //   { id: 2, title: "선택 3" },
  // ];

  // const [checkItems, setCheckItems] = useState<(number | undefined)[]>([]);

  // const handleSingleCheck = (checked: boolean, id: number | undefined) => {
  //   if (checked) {
  //     // 단일 선택 시 체크된 아이템을 배열에 추가
  //     setCheckItems((prev) => [...prev, id]);
  //   } else {
  //     // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
  //     setCheckItems(checkItems.filter((el: number | undefined) => el !== id));
  //   }
  // };
  // console.log(checkItems);

  // const handleAllCheck = (checked: boolean) => {
  //   if (checked) {
  //     // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
  //     const idArray: (number | undefined)[] = [];
  //     if (checkData === undefined) return;
  //     checkData.forEach((el) => idArray.push(el.number));
  //     setCheckItems(idArray);
  //   } else {
  //     // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
  //     setCheckItems([]);
  //   }
  // };

  return (
    <S.ContentsMain>
      <S.Title>장바구니</S.Title>
      <S.OrderArticle>
        {/* <S.CheckboxWrapper>
          <S.AllCheckbox
            type="checkbox"
            name="select-all"
            onChange={(e) => handleAllCheck(e.target.checked)}
            checked={checkItems.length === checkData?.length}
          />
          전체 선택
        </S.CheckboxWrapper> */}

        <S.ItemUl>
          {data?.fetchCart.length !== 0 ? (
            <>
              {product?.map((cart, index) => (
                <S.ItemWrapper key={index}>
                  {/* {checkData && (
                    <S.ItemCheckbox
                      type="checkbox"
                      name={`select-${index}`}
                      onChange={(e) => handleSingleCheck(e.target.checked, checkData[index].number)}
                      checked={checkItems.includes(checkData[index].number)}
                    />
                  )} */}
                  <S.ItemImg src={cart.product.image} />
                  <S.ItemName>{cart.product.name}</S.ItemName>
                  <S.QuantityWrapper>
                    <S.MinusBtn
                      id={cart.product.id}
                      onClick={onClickCountDown(cart.product.id, cart.count)}
                    >
                      -
                    </S.MinusBtn>
                    <S.Quantity id={cart.product.id}>{cart.count}</S.Quantity>
                    <S.PlusBtn
                      id={cart.product.id}
                      onClick={onClickCountUp(cart.product.id, cart.count)}
                    >
                      +
                    </S.PlusBtn>
                  </S.QuantityWrapper>
                  <S.PriceWrap>
                    <S.ItemPrice>
                      {(cart.product.price * cart.count).toLocaleString()} <span>원</span>
                    </S.ItemPrice>
                    <S.DiscountPrice>
                      {(cart.product.discountedPrice * cart.count).toLocaleString()} 원
                    </S.DiscountPrice>
                  </S.PriceWrap>
                  <S.BtnWrapper>
                    <S.CancelBtn
                      id={cart.product.id}
                      onClick={onClickDeleteBasket(cart.product.id)}
                    >
                      <S.CancelIcon></S.CancelIcon>
                    </S.CancelBtn>
                    <S.PickBtn onClick={onClickPick(cart.product.id)}>찜하기</S.PickBtn>
                    <S.BasketBtn id={cart.product.id} onClick={onClickBuyProduct}>
                      구매하기
                    </S.BasketBtn>
                  </S.BtnWrapper>
                </S.ItemWrapper>
              ))}
            </>
          ) : (
            <>
              <S.NoBasketText>
                현재 장바구니에 담긴 상품이 없습니다. 추천 상품을 보러 가시겠어요?
              </S.NoBasketText>
              <S.MoveBtnWrap>
                <Link href="/market">
                  <a>
                    <S.MoveBtn>추천 상품 보러가기</S.MoveBtn>
                  </a>
                </Link>
              </S.MoveBtnWrap>
            </>
          )}
        </S.ItemUl>
      </S.OrderArticle>
      <S.NumWrapper>
        <section>
          <S.Label>총 상품금액</S.Label>
          <S.Num>
            {priceSum.toLocaleString()} <S.NumSpan>원</S.NumSpan>
          </S.Num>
        </section>
        <S.CalculateIcon>－</S.CalculateIcon>
        <section>
          <S.Label>총 할인금액</S.Label>
          <S.Num>
            {totalDiscountedPrice.toLocaleString()} <S.NumSpan>원</S.NumSpan>
          </S.Num>
        </section>
        <S.CalculateIcon>＋</S.CalculateIcon>
        <section>
          <S.Label>총 배송비</S.Label>
          <S.Num>
            {deliveryFee.toLocaleString()}
            <S.NumSpan> 원</S.NumSpan>
          </S.Num>
        </section>
        <S.CalculateIcon>=</S.CalculateIcon>
        <section>
          <S.Label>총 결제금액</S.Label>
          <S.TotalNum>
            {totalSum.toLocaleString()}
            <S.NumSpan>원</S.NumSpan>
          </S.TotalNum>
        </section>
      </S.NumWrapper>
      <S.BottomBtnWrapper>
        {/* <S.SelectBtn>선택 삭제</S.SelectBtn>
        <S.SelectBtn>선택상품 주문하기</S.SelectBtn> */}
        <S.TotalBtn onClick={onClickBuyProducts}>전체상품 구매하기</S.TotalBtn>
      </S.BottomBtnWrapper>
    </S.ContentsMain>
  );
}
