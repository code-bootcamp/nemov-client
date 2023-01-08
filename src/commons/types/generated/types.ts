export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BusinessLicenseNumber: any;
  DateTime: any;
  Email: any;
  Password: any;
  Phone: any;
  Upload: any;
  ZipCode: any;
};

export type IAnswer = {
  __typename?: 'Answer';
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  question: IQuestion;
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type ICreateProductCategoryInput = {
  image: Scalars['String'];
  name: Scalars['String'];
};

export type ICreateProductInput = {
  /** 상품 상세설명 */
  description: Scalars['String'];
  /** 상품 할인율, 0 ~ 100 */
  discountRate: Scalars['Int'];
  /** 상품 대표 이미지에 해당하는 url */
  image: Scalars['String'];
  /** 상품명 */
  name: Scalars['String'];
  /** 품명 및 모델명 */
  option1: Scalars['String'];
  /** 제조국(원산지) */
  option2: Scalars['String'];
  /** 인증/허가 사항 */
  option3: Scalars['String'];
  /** 제조사(수입자) */
  option4: Scalars['String'];
  /** 소비자 상담 관련 전화번호 */
  option5: Scalars['String'];
  /** 상품 원가 */
  price: Scalars['Int'];
  /** 상품 카테고리에 해당하는 ID */
  productCategoryId: Scalars['ID'];
  /** 상품 재고 수량 */
  quantity: Scalars['Int'];
  /** 비건 레벨에 해당하는 숫자, 1: 플레시테리언 ~ 7: 비건 */
  veganLevel: Scalars['Int'];
};

export type ICreateProductOptionInput = {
  option6: Scalars['String'];
  option7: Scalars['String'];
  option8: Scalars['String'];
  option9: Scalars['String'];
  option10: Scalars['String'];
  option11: Scalars['String'];
};

export type ICreateQuestionInput = {
  contents: Scalars['String'];
  title: Scalars['String'];
};

export type ICreateReviewInput = {
  contents: Scalars['String'];
  images?: InputMaybe<Array<Scalars['String']>>;
  rating: Scalars['Int'];
  title: Scalars['String'];
};

export type ICreateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  bln?: InputMaybe<Scalars['BusinessLicenseNumber']>;
  email: Scalars['Email'];
  name: Scalars['String'];
  password: Scalars['Password'];
  phone: Scalars['Phone'];
  veganLevel?: InputMaybe<Scalars['Int']>;
  zipCode?: InputMaybe<Scalars['ZipCode']>;
};

export type IMutation = {
  __typename?: 'Mutation';
  cancelPointCharge: IPoint;
  cancelProductOrder: Scalars['Boolean'];
  checkBusinessLicenseNumber: Scalars['Boolean'];
  checkEmailExist: Scalars['Boolean'];
  checkUserPassword: Scalars['Boolean'];
  checkValidTokenForEmail: Scalars['Boolean'];
  checkValidTokenForPassword: Scalars['Boolean'];
  checkValidTokenForSignUp: Scalars['Boolean'];
  createAnswer: IAnswer;
  createPointCharge: IPoint;
  createProduct: IProduct;
  createProductCategory: IProductCategory;
  createProductOrder: IProductOrder;
  createQuestion: IQuestion;
  createReview: IReview;
  createUser: IUser;
  deleteAnswer: Scalars['Boolean'];
  deleteLoginUser: Scalars['Boolean'];
  deleteProduct: Scalars['Boolean'];
  deleteProductCategory: Scalars['Boolean'];
  deleteQuestion: Scalars['Boolean'];
  deleteReview: Scalars['Boolean'];
  findEmail: Scalars['Email'];
  findPassword: Scalars['Boolean'];
  getTokenForEmail: Scalars['String'];
  getTokenForPassword: Scalars['String'];
  getTokenForSignUp: Scalars['String'];
  login: Scalars['String'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  restoreUser: Scalars['Boolean'];
  toggleProductPick: Scalars['Boolean'];
  toggleProductToCart: Scalars['Boolean'];
  updateAnswer: IAnswer;
  updateProduct: IProduct;
  updateProductCategory: IProductCategory;
  updateQuestion: IQuestion;
  updateReview: IReview;
  updateUser: IUser;
  updateUserPassword: IUser;
  uploadFile: Scalars['String'];
};


export type IMutationCancelPointChargeArgs = {
  impUid: Scalars['ID'];
};


export type IMutationCancelProductOrderArgs = {
  productOrderId: Scalars['ID'];
};


export type IMutationCheckBusinessLicenseNumberArgs = {
  bln: Scalars['BusinessLicenseNumber'];
};


export type IMutationCheckEmailExistArgs = {
  email: Scalars['Email'];
};


export type IMutationCheckUserPasswordArgs = {
  password: Scalars['Password'];
};


export type IMutationCheckValidTokenForEmailArgs = {
  phone: Scalars['Phone'];
  token: Scalars['String'];
};


export type IMutationCheckValidTokenForPasswordArgs = {
  phone: Scalars['Phone'];
  token: Scalars['String'];
};


export type IMutationCheckValidTokenForSignUpArgs = {
  phone: Scalars['Phone'];
  token: Scalars['String'];
};


export type IMutationCreateAnswerArgs = {
  contents: Scalars['String'];
  questionId: Scalars['ID'];
};


export type IMutationCreatePointChargeArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['ID'];
};


export type IMutationCreateProductArgs = {
  createProductInput: ICreateProductInput;
  createProductOptionInput?: InputMaybe<ICreateProductOptionInput>;
};


export type IMutationCreateProductCategoryArgs = {
  createProductCategoryInput: ICreateProductCategoryInput;
};


export type IMutationCreateProductOrderArgs = {
  amount: Scalars['Int'];
  productId: Scalars['ID'];
  quantity: Scalars['Int'];
};


export type IMutationCreateQuestionArgs = {
  createQuestionInput: ICreateQuestionInput;
  productId: Scalars['String'];
};


export type IMutationCreateReviewArgs = {
  createReviewInput: ICreateReviewInput;
  productOrderId: Scalars['ID'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteAnswerArgs = {
  answerId: Scalars['ID'];
};


export type IMutationDeleteProductArgs = {
  productId: Scalars['ID'];
};


export type IMutationDeleteProductCategoryArgs = {
  productId: Scalars['ID'];
};


export type IMutationDeleteQuestionArgs = {
  questionId: Scalars['String'];
};


export type IMutationDeleteReviewArgs = {
  reviewId: Scalars['String'];
};


export type IMutationFindEmailArgs = {
  name: Scalars['String'];
  phone: Scalars['Phone'];
};


export type IMutationFindPasswordArgs = {
  email: Scalars['Email'];
  password: Scalars['Password'];
};


export type IMutationGetTokenForEmailArgs = {
  phone: Scalars['Phone'];
};


export type IMutationGetTokenForPasswordArgs = {
  phone: Scalars['Phone'];
};


export type IMutationGetTokenForSignUpArgs = {
  phone: Scalars['Phone'];
};


export type IMutationLoginArgs = {
  email: Scalars['Email'];
  password: Scalars['Password'];
};


export type IMutationRestoreUserArgs = {
  email: Scalars['Email'];
};


export type IMutationToggleProductPickArgs = {
  productId: Scalars['ID'];
};


export type IMutationToggleProductToCartArgs = {
  productId: Scalars['ID'];
};


export type IMutationUpdateAnswerArgs = {
  answerId: Scalars['ID'];
  contents: Scalars['String'];
};


export type IMutationUpdateProductArgs = {
  productId: Scalars['ID'];
  updateProductInput: IUpdateProductInput;
  updateProductOptionInput?: InputMaybe<IUpdateProductOptionInput>;
};


export type IMutationUpdateProductCategoryArgs = {
  productCategoryId: Scalars['ID'];
  updateProductCategoryInput: IUpdateProductCategoryInput;
};


export type IMutationUpdateQuestionArgs = {
  questionId: Scalars['ID'];
  updateQuestionInput: IUpdateQuestionInput;
};


export type IMutationUpdateReviewArgs = {
  reviewId: Scalars['ID'];
  updateReviewInput: IUpdateReviewInput;
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUpdateUserPasswordArgs = {
  password: Scalars['Password'];
};


export type IMutationUploadFileArgs = {
  file: Scalars['Upload'];
};

/** 결제 상태에 대한 타입 */
export enum IPoint_Transaction_Status_Enum {
  /** 상품 구매 완료 */
  Bought = 'BOUGHT',
  /** 포인트 환불 완료 */
  Cancelled = 'CANCELLED',
  /** 상품 판매 취소 완료 */
  Collected = 'COLLECTED',
  /** 포인트 결제 완료 */
  Paid = 'PAID',
  /** 상품 구매 취소 완료 */
  Refunded = 'REFUNDED',
  /** 상품 판매 완료 */
  Sold = 'SOLD'
}

/** 상품 구매에 대한 타입 */
export enum IProduct_Order_Status_Enum {
  /** 상품 구매 완료 */
  Bought = 'BOUGHT',
  /** 상품 취소 완료 */
  Refunded = 'REFUNDED'
}

export type IPoint = {
  __typename?: 'Point';
  amount: Scalars['Int'];
  balance: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  impUid?: Maybe<Scalars['ID']>;
  status: IPoint_Transaction_Status_Enum;
  user: IUser;
};

export type IProduct = {
  __typename?: 'Product';
  /** 상품 생성날짜 */
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  discountRate: Scalars['Int'];
  /** 상품 할인가 */
  discountedPrice: Scalars['Int'];
  id: Scalars['ID'];
  image: Scalars['String'];
  isOutOfStock: Scalars['Boolean'];
  /** 상품명 */
  name: Scalars['String'];
  option1: Scalars['String'];
  option2: Scalars['String'];
  option3: Scalars['String'];
  option4: Scalars['String'];
  option5: Scalars['String'];
  price: Scalars['Int'];
  /** 상품 카테고리 */
  productCategory: IProductCategory;
  /** 뷰티 상품에 해당하는 추가 필수 표기 정보 */
  productOption?: Maybe<IProductOption>;
  quantity: Scalars['Int'];
  /** 상품 수정 날짜 */
  updatedAt: Scalars['DateTime'];
  /** 판매자 */
  user: IUser;
  veganLevel?: Maybe<Scalars['Int']>;
};

export type IProductCategory = {
  __typename?: 'ProductCategory';
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
};

export type IProductOption = {
  __typename?: 'ProductOption';
  id: Scalars['ID'];
  option6: Scalars['String'];
  option7: Scalars['String'];
  option8: Scalars['String'];
  option9: Scalars['String'];
  option10: Scalars['String'];
  option11: Scalars['String'];
};

export type IProductOrder = {
  __typename?: 'ProductOrder';
  amount: Scalars['Int'];
  buyer: IUser;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  product: IProduct;
  quantity: Scalars['Int'];
  review?: Maybe<IReview>;
  seller: IUser;
  status: IProduct_Order_Status_Enum;
  updatedAt: Scalars['DateTime'];
};

export type IQuery = {
  __typename?: 'Query';
  fetchAnswer: IAnswer;
  fetchAnswerByQuestion: IAnswer;
  fetchCart: Array<IProduct>;
  fetchCartCount: Scalars['Int'];
  fetchIsInCart: Scalars['Boolean'];
  fetchIsPicked: Scalars['Boolean'];
  fetchLoginUser: IUser;
  fetchPickCountOfProduct: Scalars['Int'];
  fetchPointTransactions: Array<IPoint>;
  fetchPointTransactionsCount: Scalars['Int'];
  fetchProduct: IProduct;
  fetchProductCategories: Array<IProductCategory>;
  fetchProductOrdersByBuyer: Array<IProductOrder>;
  fetchProductOrdersBySeller: Array<IProductOrder>;
  fetchProductOrdersCountByBuyer: Scalars['Int'];
  fetchProductOrdersCountBySeller: Scalars['Int'];
  fetchProductOrdersCountOfBought: Scalars['Int'];
  fetchProductOrdersCountWithoutReview: Scalars['Int'];
  fetchProductOrdersWithoutReview: Array<IProductOrder>;
  fetchProducts: Array<IProduct>;
  fetchProductsBySeller: Array<IProduct>;
  fetchProductsCount: Scalars['Int'];
  fetchProductsCountBySeller: Scalars['Int'];
  fetchProductsIPicked: Array<IProduct>;
  fetchProductsIPickedCount: Scalars['Int'];
  fetchProductsOfBestSelling: Array<IProduct>;
  fetchProductsOfRecommend: Array<IProduct>;
  fetchQuestion: IQuestion;
  fetchQuestionsByBuyer: Array<IQuestion>;
  fetchQuestionsByProduct: Array<IQuestion>;
  fetchQuestionsBySeller: Array<IQuestion>;
  fetchQuestionsCountByBuyer: Scalars['Int'];
  fetchQuestionsCountByProduct: Scalars['Int'];
  fetchQuestionsCountBySeller: Scalars['Int'];
  fetchReview: IReview;
  fetchReviewsByBuyer: Array<IReview>;
  fetchReviewsByProduct: Array<IReview>;
  fetchReviewsCountByBuyer: Scalars['Int'];
  fetchReviewsCountByProduct: Scalars['Int'];
  fetchUserPoint: Scalars['Int'];
};


export type IQueryFetchAnswerArgs = {
  answerId: Scalars['ID'];
};


export type IQueryFetchAnswerByQuestionArgs = {
  questionId: Scalars['ID'];
};


export type IQueryFetchIsInCartArgs = {
  productId: Scalars['ID'];
};


export type IQueryFetchIsPickedArgs = {
  productId: Scalars['ID'];
};


export type IQueryFetchPickCountOfProductArgs = {
  productId: Scalars['ID'];
};


export type IQueryFetchPointTransactionsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  page: Scalars['Int'];
  startDate?: InputMaybe<Scalars['DateTime']>;
};


export type IQueryFetchProductArgs = {
  productId: Scalars['ID'];
};


export type IQueryFetchProductOrdersByBuyerArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  page: Scalars['Int'];
  startDate?: InputMaybe<Scalars['DateTime']>;
};


export type IQueryFetchProductOrdersBySellerArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  page: Scalars['Int'];
  startDate?: InputMaybe<Scalars['DateTime']>;
};


export type IQueryFetchProductOrdersCountByBuyerArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};


export type IQueryFetchProductOrdersCountBySellerArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};


export type IQueryFetchProductOrdersWithoutReviewArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchProductsArgs = {
  page: Scalars['Int'];
  productCategoryId: Scalars['ID'];
  veganLevel: Scalars['Int'];
};


export type IQueryFetchProductsBySellerArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchProductsCountArgs = {
  productCategoryId: Scalars['ID'];
  veganLevel: Scalars['Int'];
};


export type IQueryFetchProductsIPickedArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchQuestionArgs = {
  questionId: Scalars['ID'];
};


export type IQueryFetchQuestionsByBuyerArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchQuestionsByProductArgs = {
  page: Scalars['Int'];
  productId: Scalars['ID'];
};


export type IQueryFetchQuestionsBySellerArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchQuestionsCountByProductArgs = {
  productId: Scalars['ID'];
};


export type IQueryFetchReviewArgs = {
  reviewId: Scalars['ID'];
};


export type IQueryFetchReviewsByBuyerArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchReviewsByProductArgs = {
  page: Scalars['Int'];
  productId: Scalars['ID'];
};


export type IQueryFetchReviewsCountByProductArgs = {
  productId: Scalars['ID'];
};

export type IQuestion = {
  __typename?: 'Question';
  answer?: Maybe<IAnswer>;
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  product: IProduct;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

/** 유저 역할에 대한 타입 */
export enum IRole_Type {
  /** 구매자(일반 유저) */
  Buyer = 'BUYER',
  /** 판매자 */
  Seller = 'SELLER'
}

export type IReview = {
  __typename?: 'Review';
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  images?: Maybe<Array<IReviewImage>>;
  product: IProduct;
  rating: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type IReviewImage = {
  __typename?: 'ReviewImage';
  id: Scalars['ID'];
  url: Scalars['String'];
};

export type IUpdateProductCategoryInput = {
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IUpdateProductInput = {
  /** 상품 상세설명 */
  description?: InputMaybe<Scalars['String']>;
  /** 상품 할인율, 0 ~ 100 */
  discountRate?: InputMaybe<Scalars['Int']>;
  /** 상품 대표 이미지에 해당하는 url */
  image?: InputMaybe<Scalars['String']>;
  /** 상품명 */
  name?: InputMaybe<Scalars['String']>;
  /** 품명 및 모델명 */
  option1?: InputMaybe<Scalars['String']>;
  /** 제조국(원산지) */
  option2?: InputMaybe<Scalars['String']>;
  /** 인증/허가 사항 */
  option3?: InputMaybe<Scalars['String']>;
  /** 제조사(수입자) */
  option4?: InputMaybe<Scalars['String']>;
  /** 소비자 상담 관련 전화번호 */
  option5?: InputMaybe<Scalars['String']>;
  /** 상품 원가 */
  price?: InputMaybe<Scalars['Int']>;
  /** 상품 재고 수량 */
  quantity?: InputMaybe<Scalars['Int']>;
  /** 비건 레벨에 해당하는 숫자, 1: 플레시테리언 ~ 7: 비건 */
  veganLevel?: InputMaybe<Scalars['Int']>;
};

export type IUpdateProductOptionInput = {
  option6?: InputMaybe<Scalars['String']>;
  option7?: InputMaybe<Scalars['String']>;
  option8?: InputMaybe<Scalars['String']>;
  option9?: InputMaybe<Scalars['String']>;
  option10?: InputMaybe<Scalars['String']>;
  option11?: InputMaybe<Scalars['String']>;
};

export type IUpdateQuestionInput = {
  contents?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateReviewInput = {
  contents?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<Scalars['String']>>;
  rating?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  veganLevel?: InputMaybe<Scalars['Int']>;
  zipCode?: InputMaybe<Scalars['ZipCode']>;
};

export type IUser = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
  bln?: Maybe<Scalars['BusinessLicenseNumber']>;
  email: Scalars['Email'];
  id: Scalars['ID'];
  name: Scalars['String'];
  phone: Scalars['Phone'];
  point: Scalars['Int'];
  role: IRole_Type;
  veganLevel?: Maybe<Scalars['Int']>;
  zipCode?: Maybe<Scalars['ZipCode']>;
};
