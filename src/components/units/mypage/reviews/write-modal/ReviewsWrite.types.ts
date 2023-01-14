import { Dispatch, SetStateAction } from "react";
import { IProductOrder, IReview } from "../../../../../commons/types/generated/types";

export interface IReviewsWriteProps {
  data?: IProductOrder;
  modalOnCancel: () => void;
  review?: IReview | undefined;
  isEdit: boolean;
  reviewsData?: IReview;
  setIsSelected?: Dispatch<SetStateAction<boolean[]>>;
}

export interface IFormData {
  contents: string;
  rating: number;
  images?: string[];
  title: string;
  reviewId?: string;
  productOrderId?: string;
}
