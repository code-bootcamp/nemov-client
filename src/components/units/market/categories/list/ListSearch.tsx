import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useRecoilState } from "recoil";
import { getVeganName } from "../../../../../commons/libraries/utilies";
import { IsSelectedState } from "../../../../../commons/stores/index";
import {
  IQuery,
  IQueryFetchProductsArgs,
  IQueryFetchProductsCountArgs,
} from "../../../../../commons/types/generated/types";
import {
  ListSearchSection,
  SearchInputBox,
  SearchSection,
  SelectBox,
  StyledSearchIcon,
} from "./MarketList.styles";

interface IListSearchProps {
  prefetchByLevel: (value: number | unknown) => Promise<void>;
  setSearch: Dispatch<SetStateAction<string>>;
  productsCountRefetch: (
    variables?: Partial<IQueryFetchProductsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProductsCount">>>;
  refetch: (
    variables?: Partial<IQueryFetchProductsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProducts">>>;
  onChangeSearch: (value: string) => void;
}

export default function ListSearch(props: IListSearchProps) {
  const [isSelected] = useRecoilState(IsSelectedState);
  const [search, setSearch] = useState("");

  const onClickSearch = () => {
    void props.productsCountRefetch({ search });
    void props.refetch({ search, veganLevel: 0 });
    props.onChangeSearch(search);
  };

  const onChangeSearchBar = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <ListSearchSection>
      <SearchSection>
        <SearchInputBox
          onChange={onChangeSearchBar}
          onKeyPress={onClickSearch}
          placeholder="상품명을 입력해주세요."
        />
        <StyledSearchIcon onClick={onClickSearch} />
      </SearchSection>
      <SelectBox
        onChange={props.prefetchByLevel}
        defaultValue={"비건 레벨"}
        options={[
          {
            value: "비건 레벨",
            label: "비건 레벨",
            selected: true,
            disabled: true,
          },
          { value: 7, label: "비건" },
          { value: 6, label: "락토" },
          { value: 5, label: "오보" },
          { value: 4, label: "락토 오보" },
          { value: 3, label: "페스코" },
          { value: 2, label: "폴로" },
          { value: 1, label: "플렉시테리언" },
        ]}
        value={getVeganName(isSelected)}
      ></SelectBox>
    </ListSearchSection>
  );
}
