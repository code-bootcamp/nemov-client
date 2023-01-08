import { IProductOrder, IReview } from "../../../../../commons/types/generated/types";

export interface IReviewsWriteProps {
  data?: IProductOrder;
  modalOnCancel: () => void;
  review?: IReview | undefined;
  isEdit: boolean;
  reviewsData?: IReview;
}

export interface IFormData {
  contents: string;
  rating: number;
  images?: (string | undefined)[];
  title: string;
  reviewId?: string;
  productOrderId?: string;
}
