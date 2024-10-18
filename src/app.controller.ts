import { Controller, Get } from '@nestjs/common';
import { articles } from './articles';

@Controller()
export class AppController {
  @Get()
  index() {
    return { articles };
  }
}
