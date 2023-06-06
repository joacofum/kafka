import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CreateTestPublisher<T> {
  constructor(@Inject('TEST_SERVICE') private readonly client: ClientProxy) { }

  publish(data: T): void {
    this.client.emit('test_created', JSON.stringify(data))
  }

}
