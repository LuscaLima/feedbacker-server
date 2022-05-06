import {
  FeedbackDataCreate,
  IFeedbackRepository
} from '../interfaces/repositories/feedbackRepository'
import { prisma } from '../prisma'

export class PrismaFeedbackRepository implements IFeedbackRepository {
  async create({ type, comment, screenshot }: FeedbackDataCreate) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
  }
}
