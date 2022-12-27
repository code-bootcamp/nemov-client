import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1300px;
  padding: 5rem;
  border: 1px solid green;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  margin-bottom: 4rem;
`;

export const Label = styled.p`
  width: 13%;
`;

export const LineWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 40px;
`;

export const TitleInput = styled.input`
  width: 80%;
  height: 3rem;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
`;

export const QuillWrap = styled.div`
  width: 80%;
  height: 30rem;
`;

export const UploadBtnWrapper = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 14px 14px 0;
  position: relative;
`;

export const UploadImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 15px 15px 0;
`;

export const UploadButton = styled.button`
  position: absolute;
  top: 0;
  width: 150px;
  height: 150px;
  background-color: white;
  margin: 0 15px 15px 0;
  outline: none;
  border: 1px solid #bdbdbd;
`;

export const UploadFileHidden = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;

export const SubmitBtn = styled.button`
  width: 15%;
  border: none;
  padding: 14px;
  font-weight: 500;
  border-radius: 10px;
  color: white;
  background-color: #1f3d31;
  cursor: pointer;
  margin-right: 40px;
`;

export const CancelBtn = styled.a`
  width: 15%;
  border: none;
  padding: 14px;
  font-weight: 500;
  border-radius: 10px;
  background-color: #c9e543;
  text-align: center;
  cursor: pointer;
`;
