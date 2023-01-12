import Link from "next/link";
import * as S from "./MarketCrumbs.styles";

interface ICrumbsProps {
  id?: string | string[] | undefined;
  categoryName?: string;
}

export default function Crumbs(props: ICrumbsProps) {
  return (
    <S.DetailHeadCrumbs>
      <S.CrumbsWrapper>
        <Link href="/market/categories">
          <S.Crumb01 />
        </Link>
        <S.CrumbLink01>&gt;</S.CrumbLink01>
        <S.Crumb02>
          <S.CrumbLink02>{props.categoryName}</S.CrumbLink02>
        </S.Crumb02>
      </S.CrumbsWrapper>
    </S.DetailHeadCrumbs>
  );
}
