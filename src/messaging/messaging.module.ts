import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CreateTestPublisher } from './publisher/test.publisher';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TEST_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'TEST',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'test-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [],
  providers: [CreateTestPublisher],
  exports: [CreateTestPublisher]
})
export class MessagingModule {}
