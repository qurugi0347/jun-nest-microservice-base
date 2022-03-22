import { Injectable } from '@nestjs/common';

function wait<T>(ms: number, value: T) {
  return new Promise<T>((resolve) => setTimeout(resolve, ms, value));
}

@Injectable()
export class HelloService {
  async getHello(name: string): Promise<string> {
    console.log(name);
    await wait(10000, null);
    console.log(name);
    return `Hello ${name}!`;
  }
}
