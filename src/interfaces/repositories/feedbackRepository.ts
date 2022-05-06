export type FeedbackDataCreate = {
  type: string
  comment: string
  screenshot?: string
}

export interface IFeedbackRepository {
  create: (data: FeedbackDataCreate) => Promise<void>
}
