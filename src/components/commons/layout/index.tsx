import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import ScrollToTop from "./scrollToTop";

const LayoutBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

interface ILayoutProps {
  children: JSX.Element;
  productId?: string | string[] | undefined;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const HIDDEN_HEADER = ["/"];
  const HIDDEN_BANNER = [
    "/",
    "/login",
    "/signup",
    "/signup/user",
    "/mypage",
    "/mypage/basket",
    "/mypage/orderlist",
    "/mypage/picked",
    "/mypage/point",
    "/mypage/reviews",
    "/market/categories",
    "/market/categories/food",
    "/market/categories/drink",
    "/market/categories/beauty",
    "/market/categories/life",
    "/seller",
    "/seller/new",
    `/market/${router.query.productId}`,
  ];
  const HIDDEN_SCROLLTOTOP = ["/", "/login", "/signup"];
  const HIDDEN_FOOTER = ["/"];

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenScrollToTop = HIDDEN_SCROLLTOTOP.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenBanner && <LayoutBanner />}
      <LayoutBody>{props.children}</LayoutBody>
      {!isHiddenScrollToTop && <ScrollToTop />}
      {!isHiddenFooter && <LayoutFooter />}
    </>
  );
}
