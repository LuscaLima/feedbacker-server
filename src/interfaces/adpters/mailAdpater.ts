export type SendMailData = {
  subject: string
  body: string
}

export interface IMailAdpater {
  sendMail: (data: SendMailData) => Promise<void>
}
