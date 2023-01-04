import {
  ListSearchSection,
  SearchInputBox,
  SearchSection,
  SelectBox,
  StyledSearchIcon,
} from "./MarketList.styles";

export default function ListSearch() {
  return (
    <ListSearchSection>
      <SearchSection>
        <SearchInputBox />
        <StyledSearchIcon />
      </SearchSection>
      <SelectBox
        defaultValue={"비건 레벨"}
        options={[
          {
            value: "비건 레벨",
            label: "비건 레벨",
            selected: true,
            disabled: true,
          },
          { value: "플렉시테리언", label: "플렉시테리언" },
          { value: "폴로", label: "폴로" },
          { value: "페스코", label: "페스코" },
          { value: "락토 오보", label: "락토 오보" },
          { value: "오보", label: "오보" },
          { value: "락토", label: "락토" },
          { value: "비건", label: "비건" },
        ]}
      ></SelectBox>
    </ListSearchSection>
  );
}
