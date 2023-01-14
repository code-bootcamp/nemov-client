// import { useState } from "react";
// import { getVeganName } from "../../../../../commons/libraries/utilies";
import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useRecoilState } from "recoil";
import _ from "lodash";
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

  const getDebounce = _.debounce((value: string) => {
    void props.productsCountRefetch({ search: value });
    void props.refetch({ search: value, veganLevel: 0 });
    props.onChangeSearch(value);
  }, 1000);

  const onChangeSearchBar = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <ListSearchSection>
      <SearchSection>
        <SearchInputBox onChange={onChangeSearchBar} />
        <StyledSearchIcon />
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
      {/* <select onChange={prefetchByLevel(selected)}>
        <option value={1}>{getVeganName(1)}</option>
        <option value={2}>{getVeganName(2)}</option>
        <option value={3}>{getVeganName(3)}</option>
        <option value={4}>{getVeganName(4)}</option>
        <option value={5}>{getVeganName(5)}</option>
        <option value={6}>{getVeganName(6)}</option>
        <option value={7}>{getVeganName(7)}</option>
      </select> */}
    </ListSearchSection>
  );
}
