import express from 'express'
import { NodemailerMailAdpter } from './adpters/nodemailerMailAdpater'
import { PrismaFeedbackRepository } from './repositories/prismaFeedbackRepository'
import { SubmitFeedback } from './services/submitFeedback'

export const router = express.Router()

router.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const feedbackRepository = new PrismaFeedbackRepository()
  const mailAdapter = new NodemailerMailAdpter()
  const submitFeedback = new SubmitFeedback(feedbackRepository, mailAdapter)

  await submitFeedback.execute({ type, comment, screenshot })

  return res.status(201).send()
})
