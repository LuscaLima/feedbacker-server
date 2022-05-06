import { IMailAdpater } from '../interfaces/adpters/mailAdpater'
import { IFeedbackRepository } from '../interfaces/repositories/feedbackRepository'

type SubmitFeedbackDataRequest = {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeedback {
  constructor(
    private feedbackRepository: IFeedbackRepository,
    private mailAdapter: IMailAdpater
  ) {}

  public async execute({
    type,
    comment,
    screenshot
  }: SubmitFeedbackDataRequest) {
    if (!type) {
      throw new Error('Type is required')
    }

    if (!comment) {
      throw new Error('Comment is required')
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.')
    }

    await this.feedbackRepository.create({
      type,
      comment,
      screenshot
    })

    await this.mailAdapter.sendMail({
      subject: 'New feedback from Feedbacker',
      body: [
        '<h3>Feedback infos:</h3>',
        `<p>Type: ${type}`,
        `<p>Comment: ${comment}`
      ].join('')
    })
  }
}
