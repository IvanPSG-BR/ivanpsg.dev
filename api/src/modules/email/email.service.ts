import nodemailer from 'nodemailer';
import db from "../../database/conn";
import settings from '../../common/_settings';
import { emailBaseDTO } from "./email.dto";

export default class EmailManager {
  private transporter = nodemailer.createTransport({
      host: settings.smtpHost,
      port: parseInt(settings.smtpPort || '587', 10),
      secure: false,
      auth: {
          user: settings.smtpUser,
          pass: settings.smtpPass,
      },
      tls: {
          rejectUnauthorized: false,
      },
  });
  
  public async send(data: emailBaseDTO) {
    const info = await this.transporter.sendMail({
        from: data.senderEmail,
        to: settings.destinyEmail,
        subject: data.messageSubject,
        text: `De: ${data.senderName}
        Mensagem: ${data.messageBody}`.trim(),
    });

    return info;    
  }
}