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
  answers_contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  question: IQuestion;
  user: IUser;
};

export type ICreateProductInput = {
  category: IProduct_Category_Type;
  deliveryFee: Scalars['Int'];
  description: Scalars['String'];
  discount: Scalars['Int'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  quantity: Scalars['Int'];
  veganLevel: Scalars['Int'];
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
  checkValidToken: Scalars['String'];
  createAnswer: IAnswer;
  createPointCharge: IPoint;
  createProduct: IProduct;
  createProductOrder: IProductOrder;
  createQuestion: IQuestion;
  createReview: IReview;
  createUser: IUser;
  deleteAnswer: Scalars['Boolean'];
  deleteLoginUser: Scalars['Boolean'];
  deleteProduct: Scalars['Boolean'];
  deleteQuestion: Scalars['Boolean'];
  deleteReview: Scalars['Boolean'];
  getToken: Scalars['String'];
  login: Scalars['String'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  restoreUser: Scalars['Boolean'];
  toggleProductPick: Scalars['Boolean'];
  toggleProductToCart: Scalars['Boolean'];
  updateAnswer: IAnswer;
  updateProduct: IProduct;
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


export type IMutationCheckValidTokenArgs = {
  phone: Scalars['Phone'];
  token: Scalars['String'];
};


export type IMutationCreateAnswerArgs = {
  answers_contents: Scalars['String'];
  questionId: Scalars['String'];
};


export type IMutationCreatePointChargeArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['ID'];
};


export type IMutationCreateProductArgs = {
  createProductInput: ICreateProductInput;
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
  answerId: Scalars['String'];
};


export type IMutationDeleteProductArgs = {
  productId: Scalars['ID'];
};


export type IMutationDeleteQuestionArgs = {
  questionId: Scalars['String'];
};


export type IMutationDeleteReviewArgs = {
  reviewId: Scalars['String'];
};


export type IMutationGetTokenArgs = {
  phone: Scalars['Phone'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
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
  answers_contents: Scalars['String'];
};


export type IMutationUpdateProductArgs = {
  productId: Scalars['ID'];
  updateProductInput: IUpdateProductInput;
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

/** 물품 카테고리에 대한 타입 */
export enum IProduct_Category_Type {
  /** 화장품 카테고리 */
  Beauty = 'BEAUTY',
  /** 음료 카테고리 */
  Drink = 'DRINK',
  /** 식품 카테고리 */
  Food = 'FOOD',
  /** 생활용품 카테고리 */
  Life = 'LIFE'
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
  category: IProduct_Category_Type;
  deliveryFee: Scalars['Int'];
  description: Scalars['String'];
  discount: Scalars['Int'];
  id: Scalars['ID'];
  image: Scalars['String'];
  isOutOfStock: Scalars['Boolean'];
  name: Scalars['String'];
  price: Scalars['Int'];
  quantity: Scalars['Int'];
  user: IUser;
  veganLevel?: Maybe<Scalars['Int']>;
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
  fetchIsInCart: Scalars['Boolean'];
  fetchIsPicked: Scalars['Boolean'];
  fetchLoginUser: IUser;
  fetchPickCountOfProduct: Scalars['Int'];
  fetchPointTransactions: Array<IPoint>;
  fetchPointTransactionsCount: Scalars['Int'];
  fetchProduct: IProduct;
  fetchProductOrdersByBuyer: Array<IProductOrder>;
  fetchProductOrdersBySeller: Array<IProductOrder>;
  fetchProductOrdersCountByBuyer: Scalars['Int'];
  fetchProductOrdersCountBySeller: Scalars['Int'];
  fetchProductOrdersCountWithoutReview: Scalars['Int'];
  fetchProductOrdersWithoutReview: Array<IProductOrder>;
  fetchProducts: Array<IProduct>;
  fetchProductsBySeller: Array<IProduct>;
  fetchProductsCount: Scalars['Int'];
  fetchProductsIPicked: Array<IProduct>;
  fetchProductsIPickedCount: Scalars['Int'];
  fetchProductsOfBestSelling: Array<IProduct>;
  fetchProductsOfRecommend: Array<IProduct>;
  fetchQuestion: IQuestion;
  fetchQuestionsByProduct: Array<IQuestion>;
  fetchQuestionsCountByProduct: Scalars['Int'];
  fetchReview: IReview;
  fetchReviewsByBuyer: Array<IReview>;
  fetchReviewsByProduct: Array<IReview>;
  fetchReviewsCountByBuyer: Scalars['Int'];
  fetchReviewsCountByProduct: Scalars['Int'];
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


export type IQueryFetchPointTransactionsCountArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
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
  category: IProduct_Category_Type;
  page: Scalars['Int'];
  veganLevel: Scalars['Int'];
};


export type IQueryFetchProductsBySellerArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchProductsCountArgs = {
  category: IProduct_Category_Type;
  veganLevel: Scalars['Int'];
};


export type IQueryFetchProductsIPickedArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchQuestionArgs = {
  questionId: Scalars['ID'];
};


export type IQueryFetchQuestionsByProductArgs = {
  page: Scalars['Int'];
  productId: Scalars['ID'];
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
  answer: IAnswer;
  contents: Scalars['String'];
  id: Scalars['ID'];
  product: IProduct;
  title: Scalars['String'];
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

export type IUpdateProductInput = {
  category?: InputMaybe<IProduct_Category_Type>;
  deliveryFee?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  veganLevel?: InputMaybe<Scalars['Int']>;
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
