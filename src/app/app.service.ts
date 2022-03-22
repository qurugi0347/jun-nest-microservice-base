import { Injectable, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('HELLO_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  getHello(): Promise<string> {
    this.client.emit('say_hello', 'hi');
    const helloResult: Observable<string> = this.client.send(
      { role: 'hello', cmd: 'hello' },
      'jun',
    );
    return helloResult.toPromise();
  }
}
