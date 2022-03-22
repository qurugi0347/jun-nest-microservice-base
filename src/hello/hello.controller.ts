import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';

import { HelloService } from './hello.service';

@Controller()
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @MessagePattern({ role: 'hello', cmd: 'hello' })
  async getHello(name: string): Promise<string> {
    return this.helloService.getHello(name);
  }

  @EventPattern('say_hello')
  async sayHello(name: string): Promise<string> {
    console.log('say_hello');
    return this.helloService.getHello(name);
  }
}
