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
        <Link href="/market">
          <S.Crumb01 />
        </Link>
        <S.CrumbLink01>&gt;</S.CrumbLink01>
        <S.Crumb02>
          <Link href={`/market/categories/${String(props.id)}`}>
            <S.CrumbLink02>{props.categoryName}</S.CrumbLink02>
          </Link>
        </S.Crumb02>
      </S.CrumbsWrapper>
    </S.DetailHeadCrumbs>
  );
}
