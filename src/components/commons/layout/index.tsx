import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutRecentlyViewed from "./aside";
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
  const SHOW_BANNER = ["/market", "/market/categories"];
  const HIDDEN_SCROLL_TO_TOP = ["/", "/login", "/signup"];
  const SHOW_ASIDE = [
    "/market",
    `/market/categories/${String(router.query.categoryId)}`,
    `/market/product/${String(router.query.productId)}`,
  ];
  const HIDDEN_FOOTER = ["/"];

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isShowBanner = SHOW_BANNER.includes(router.asPath);
  const isHiddenScrollToTop = HIDDEN_SCROLL_TO_TOP.includes(router.asPath);
  const isShowAside = SHOW_ASIDE.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {isShowBanner && <LayoutBanner />}
      <LayoutBody>{props.children}</LayoutBody>
      {isShowAside && <LayoutRecentlyViewed />}
      {!isHiddenScrollToTop && <ScrollToTop />}
      {!isHiddenFooter && <LayoutFooter />}
    </>
  );
}
