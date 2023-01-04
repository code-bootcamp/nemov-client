export interface IFormSignupData {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  phone: string;
  veganLevel: string;
  zipCode: string;
  address: string;
  addressDetail: string;
  checkbox: boolean;
}

export interface ISignupProps {
  isSeller: boolean;
}
