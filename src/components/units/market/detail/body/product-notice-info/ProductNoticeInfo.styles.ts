import styled from "@emotion/styled";
import {
  flexColumn,
  flexRow,
} from "../../../../../../commons/styles/globalStyles";

export const NoticeInfoTable = styled.table`
  display: flex;
  flex-wrap: wrap;
`;

export const TbWrapper = styled.ul`
  width: 100%;
  ${flexColumn}
`;

export const TableColumnSet = styled.li`
  width: 100%;
  ${flexRow}
`;

export const TableColumnHead = styled.li`
  width: 25%;
  display: flex;
  background-color: #f6efef;
  padding: 1rem 1.125rem 1.125rem;
`;

export const TableColumContent = styled.li`
  width: 25%;
  display: flex;
  padding: 1rem 1.125rem 1.125rem;
`;

// export const;
