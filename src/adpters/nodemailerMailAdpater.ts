import nodemailer from 'nodemailer'
import { IMailAdpater, SendMailData } from '../interfaces/adpters/mailAdpater'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '2c8e39dbd16732',
    pass: 'e561a32e8004fc'
  }
})

export class NodemailerMailAdpter implements IMailAdpater {
  async sendMail({ subject, body }: SendMailData) {
    transport.sendMail({
      from: 'Feebacker Team <hi@feedbacker.com>',
      to: 'Lusca Lima <lusca.lima@outlook.com>',
      subject,
      html: body
    })
  }
}
