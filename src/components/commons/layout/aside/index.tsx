import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as S from "./RecentlyViewed.styles";

interface IRecentlyType {
  id: string;
  image: string;
  name: string;
}

export default function LayoutRecentlyViewed() {
  const router = useRouter();
  const [showAside, setShowAside] = useState(false);
  const [recentlyLists, setRecentlyLists] = useState<IRecentlyType[]>([]);

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
        <>
          {recentlyLists?.length > 0 && (
            <S.SideBarWrap>
              <S.Title>최근 본 상품</S.Title>
              <S.Contents>
                {recentlyLists?.map((cur) => (
                  <S.Thumbnail key={cur.id}>
                    <Link href={`/market/product/${cur.id}`}>
                      <a>
                        <img src={`${cur.image}`} />
                      </a>
                    </Link>
                  </S.Thumbnail>
                ))}
              </S.Contents>
            </S.SideBarWrap>
          )}
        </>
      )}
    </>
  );
}
