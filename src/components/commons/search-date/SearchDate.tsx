import styled from "@emotion/styled";
import { DatePicker, Space } from "antd";

export default function SearchDate() {
  const { RangePicker } = DatePicker;

  return (
    <>
      <ShoppingLookup>
        <SelectTerm>
          <SelectTermItem>전체</SelectTermItem>
          <SelectTermItem>1개월</SelectTermItem>
          <SelectTermItem>3개월</SelectTermItem>
          <SelectTermItem>6개월</SelectTermItem>
          <SelectTermItem>12개월</SelectTermItem>
        </SelectTerm>
        <div>
          <Space direction="vertical" size={12} style={{ marginRight: "10px" }}>
            <RangePicker />
          </Space>
          <ManageBtn>조회</ManageBtn>
        </div>
      </ShoppingLookup>
    </>
  );
}

const ShoppingLookup = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const ManageBtn = styled.button`
  background-color: black;
  color: #fff;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  border: none;
  font-size: 0.8rem;
`;

const SelectTerm = styled.ul`
  list-style: none;
  display: flex;
`;

const SelectTermItem = styled.li`
  font-size: 0.9rem;
  color: #555;
  border: 1px solid #eee;
  padding: 14px;
`;
