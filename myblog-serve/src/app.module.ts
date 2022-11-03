import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { HomeinfoModule } from './modules/homeinfo/homeinfo.module';
import { EmailModule } from './modules/email/email.module';
import { MailerModule, PugAdapter } from '@nest-modules/mailer';
// import { AuthModule } from './modules/auth/auth.module';

const path = require('path')


@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: 'smtps://1345306401@qq.com:nghpgxlxukcebaci@smtp.qq.com',
        defaults: {
          from: '"nest-modules" <modules@nestjs.com>',
        },
        template: {
          dir: path.join(__dirname, './templates/email'),
          adapter: new PugAdapter(),
          options: {
            strict: true
          }
        }
      })
    }),
    HomeinfoModule,
    EmailModule,
    // AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/')
  }
}
