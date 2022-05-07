export interface ISendMail {
  subject: string;
  body: string;
}

export interface IMailAdapter {
  sendMail: (data: ISendMail) => Promise<void>;
}