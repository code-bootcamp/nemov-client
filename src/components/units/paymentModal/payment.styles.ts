import styled from "@emotion/styled";

export const Wrapper = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PayInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

export const SelectBoxWrap = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
`;

export const SelectBox = styled.button`
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  border-left: 1px solid #999;
  width: calc(100% / 4);
  height: 30px;
  border-radius: 0;
  background-color: #fff;
`;

export const SelectBoxLast = styled(SelectBox)`
  border: 1px solid #999;
`;

export const PaymentBtn = styled.button`
  padding: 2% 3%;
  border: 1px solid #eee;
  width: 50%;
`;
