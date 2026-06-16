import type { Request, Response } from "express";
import EmailManager from "./email.service";
import { emailBaseDTO } from "./email.dto";

export default class EmailController {
  private emailService = new EmailManager()

  public async sendMail(req: Request, res: Response) {
    const data : emailBaseDTO = req.body
    this.emailService.send(data)
    return res.status(200)
  }
}
