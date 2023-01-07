import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as S from "./RecentlyViewed.styles";

export default function LayoutRecentlyViewed() {
  const router = useRouter();
  const [showAside, setShowAside] = useState(false);
  const [recentlyLists, setRecentlyLists] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(sessionStorage.getItem("baskets") ?? "[]");
    setRecentlyLists(baskets);
  }, [router]);

  useEffect(() => {
    const handleShowAside = () => {
      if (window.scrollY > 300) {
        setShowAside(true);
      } else {
        setShowAside(false);
      }
    };

    window.addEventListener("scroll", handleShowAside);
    return () => {
      window.removeEventListener("scroll", handleShowAside);
    };
  }, []);

  return (
    <>
      {showAside && (
        <S.SideBarWrap>
          <S.Title>최근 본 상품</S.Title>
          <S.Contents>
            {recentlyLists?.map((el, i) => (
              <article key="i">el</article>
            ))}
          </S.Contents>
        </S.SideBarWrap>
      )}
    </>
  );
}
