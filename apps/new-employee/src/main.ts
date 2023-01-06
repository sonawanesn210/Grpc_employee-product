import { NestFactory } from '@nestjs/core';
import { EmployeeModule } from '../../new-employee/src/app/employee.module'

async function bootstrap() {
 /*  const URL = 'localhost:3000'
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EmployeeModule,{
      
transport:Transport.GRPC,
options:{
  url:URL,
  package:"product",
  protoPath:path.join(__dirname, '../../api/product.proto'/* '..','..','/apps/api/product.proto' ),
  /*  loader:{
    includeDirs:[path.resolve(__dirname,'../..')],
  }  
}
    }
  ) */
  const app = await NestFactory.create(EmployeeModule);
  await app.listen(3000);
  console.log("listening on port 3000")
}
bootstrap();
