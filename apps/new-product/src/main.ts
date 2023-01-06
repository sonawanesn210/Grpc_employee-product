/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';
import { ProductModule } from './app/product.module';

async function bootstrap() {
  const URL = 'localhost:5000';
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProductModule,{
transport:Transport.GRPC,
options:{
  url:URL,
  package:"product",
  protoPath:path.join(__dirname, '../../api/product.proto'/* '..','..','/apps/api/product.proto' */),
  /*  loader:{
    includeDirs:[path.resolve(__dirname,'../..')],
  }  */
}
    }
   
  )
 
 /*  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333; */
  await app.listen();
  console.log('Product service has started');
  Logger.log(
    `🚀 Application is running on: http://localhost:5000`
  );
}

bootstrap();
