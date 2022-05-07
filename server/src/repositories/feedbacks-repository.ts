export interface IFeedbacksCreate {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface IFeedbacksRepository {
  create: (data: IFeedbacksCreate) => Promise<void>;
}