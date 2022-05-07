import { IMailAdapter } from "../adapters/mail-adapter";
import { IFeedbacksRepository } from "../repositories/feedbacks-repository";

interface IRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {

  constructor(
    private feedbacksRepository: IFeedbacksRepository,
    private mailAdapter: IMailAdapter,
  ) {}

  async execute({ type, comment, screenshot }: IRequest) {
    
    if(screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format.");
    }

    if(!type) {
      throw new Error("Type is required");
    }

    if(!comment) {
      throw new Error("Comment is required");
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    })

    await this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo de feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}"  width="500">` : ``,
        `</div>`
      ].join('\n')
    })
    
  }
}