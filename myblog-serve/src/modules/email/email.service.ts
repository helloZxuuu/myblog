import { Injectable } from '@nestjs/common';
import { MailerService} from '@nest-modules/mailer'

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  sendEmail() {
    this.mailerService.sendMail({
      to: '1345306401@qq.com',
      from: '1345306401@qq.com',
      subject: 'hello world √',
      // html: '<p>welcome nestjs</p>'
      template: 'welcome'
    })
  }
}
