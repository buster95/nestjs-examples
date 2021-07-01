import { Controller, Get, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/login')
  setcookie(@Res({ passthrough: true }) res: Response) {
    res.cookie('jwt', 'me vale madres', { httpOnly: true });
    res.json({ message: `cookie was created` });
    return;
  }

  @Get('/me')
  getcookie(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const values = req.cookies;
    console.log(values);
    res.json({
      message: `cookie was readed => `,
      values
    });
    return;
  }
}
