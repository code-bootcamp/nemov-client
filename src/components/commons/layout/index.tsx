import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNav from "./nav";

const LayoutBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

interface ILayoutProps {
  children: JSX.Element;
}

const HIDDEN_HEADER = [""];
const HIDDEN_NAV = [""];
const HIDDEN_BANNER = [""];
const HIDDEN_FOOTER = [""];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenNav = HIDDEN_NAV.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenNav && <LayoutNav />}
      {!isHiddenBanner && <LayoutBanner />}
      <LayoutBody>{props.children}</LayoutBody>
      {!isHiddenFooter && <LayoutFooter />}
    </>
  );
}
