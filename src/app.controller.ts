import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { prRequest } from './product';

@Controller()
export class AppController {
  prList: Array<prRequest> = new Array<prRequest>();

  constructor(private readonly appService: AppService) {}

  @Get('/purchase-requsitions')
  getHello(): any {
    return this.prList;
  }

  @Post('/purchase-requsition')
  createPurchaseRequestion(@Body() prRequester: prRequest) {
    console.log(prRequester);
    this.prList.push(prRequester);
  }
}
