import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';

@Controller('example1')
export class Example1Controller {
  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }

  @EventPattern('user_created')
  async handleUserCreated() {
    // business logic
    console.log('User created');
  }
}
