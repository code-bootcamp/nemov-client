import Link from "next/link";
import * as S from "./MarketDetailHeadCrumbs.styles";

export default function MarketDetailHeadCrumbs() {
  return (
    <S.DetailHeadCrumbs>
      <S.CrumbsWrapper>
        <S.Crumb01>
          <Link href="/market">
            <S.CrumbLink01></S.CrumbLink01>
          </Link>
        </S.Crumb01>
        <S.Crumb02>
          <Link href="/market">
            <S.CrumbLink02>식품</S.CrumbLink02>
          </Link>
        </S.Crumb02>
      </S.CrumbsWrapper>
    </S.DetailHeadCrumbs>
  );
}
