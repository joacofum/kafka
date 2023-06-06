import { Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Ctx, EventPattern, KafkaContext, Payload } from '@nestjs/microservices';
import { CreateTestPublisher } from './messaging/publisher/test.publisher';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly createTestPublisher: CreateTestPublisher<string>) {}

  @EventPattern('test_created')
  TestEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext){
    console.log(data)
    console.log('-----------------------------');
    //console.log(context);
  }

  @Post()
  send(){
    this.createTestPublisher.publish("Test message ;)")
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
