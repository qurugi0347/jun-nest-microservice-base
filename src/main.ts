import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { HelloModule } from './hello/hello.module';

async function bootstrap() {
  const hello = await NestFactory.createMicroservice<MicroserviceOptions>(
    HelloModule,
    {
      transport: Transport.REDIS,
      options: {
        url: 'redis://127.0.0.1:36379',
      },
    },
  );
  hello.listen();

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
