import { prisma } from "../../prisma";
import { IFeedbacksCreate, IFeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
  async create({type,comment, screenshot}: IFeedbacksCreate){

    await prisma.feedback.create({
      data:{
        type,
        comment,
        screenshot,
      }
    })
  }
}