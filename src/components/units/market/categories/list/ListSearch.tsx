// import { useState } from "react";
// import { getVeganName } from "../../../../../commons/libraries/utilies";
import { useRecoilState } from "recoil";
import { getVeganName } from "../../../../../commons/libraries/utilies";
import { IsSelectedState } from "../../../../../commons/stores/index";
import {
  ListSearchSection,
  SearchInputBox,
  SearchSection,
  SelectBox,
  StyledSearchIcon,
} from "./MarketList.styles";

interface IListSearchProps {
  prefetchByLevel: (value: number | unknown) => Promise<void>;
}
export default function ListSearch(props: IListSearchProps) {
  const [isSelected] = useRecoilState(IsSelectedState);
  return (
    <ListSearchSection>
      <SearchSection>
        <SearchInputBox />
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
