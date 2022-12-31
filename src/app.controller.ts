import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('MS_EXAMPLE1') private client: ClientProxy,
  ) {}

  @Get('user_created')
  test() {
    console.log('HTTP called user created');
    this.client.emit('user_created', {}).subscribe(console.log, console.error);
  }
}
