import nodemailer from 'nodemailer';
import { IMailAdapter, ISendMail } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "18c17245168cf2",
    pass: "4b20f9029b5346"
  }
});

export class NodemailerMailAdapter implements IMailAdapter {
  
  async sendMail({ subject, body }: ISendMail){

    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Henrique Ramos <cimvdrive2@gmail.com>",
      subject,
      html: body,
    })
  }
}