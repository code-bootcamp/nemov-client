import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { getVeganName } from "../../../../../commons/libraries/utilies";
import { FETCH_PRODUCTS } from "../../../../commons/hooks/useQueries/product/UseQueryFetchProducts";
import {
  ListSearchSection,
  SearchInputBox,
  SearchSection,
  StyledSearchIcon,
} from "./MarketList.styles";

export default function ListSearch() {
  const router = useRouter();
  const [selected, setSelected] = useState(1);
  const client = useApolloClient();

  const prefetchByLevel = (value: number) => async () => {
    setSelected(value);
    console.log("클릭");
    console.log(value);
    const data = await client.query({
      query: FETCH_PRODUCTS,
      variables: {
        productCategoryId: router.query.categoryId,
        veganLevel: value,
        page: 1,
      },
    });
    console.log(data);
  };
  return (
    <ListSearchSection>
      <SearchSection>
        <SearchInputBox />
        <StyledSearchIcon />
      </SearchSection>
      {/* <SelectBox
        defaultValue={"비건 레벨"}
        options={[
          {
            value: "비건 레벨",
            label: "비건 레벨",
            selected: true,
            disabled: true,
          },
          { value: 1, label: "플렉시테리언", onSelect: prefetchByLevel(1) },
          { value: 2, label: "폴로" },
          { value: 3, label: "페스코" },
          { value: 4, label: "락토 오보" },
          { value: 5, label: "오보" },
          { value: 6, label: "락토" },
          { value: 7, label: "비건" },
        ]}
      ></SelectBox> */}
      <select onChange={prefetchByLevel(selected)}>
        <option value={1}>{getVeganName(1)}</option>
        <option value={2}>{getVeganName(2)}</option>
        <option value={3}>{getVeganName(3)}</option>
        <option value={4}>{getVeganName(4)}</option>
        <option value={5}>{getVeganName(5)}</option>
        <option value={6}>{getVeganName(6)}</option>
        <option value={7}>{getVeganName(7)}</option>
      </select>
    </ListSearchSection>
  );
}
