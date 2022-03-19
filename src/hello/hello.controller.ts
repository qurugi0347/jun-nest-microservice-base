import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { HelloService } from './hello.service';

@Controller()
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @MessagePattern({ role: 'hello', cmd: 'hello' })
  async getHello(name: string): Promise<string> {
    return this.helloService.getHello(name);
  }
}
