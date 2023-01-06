import { Module } from '@nestjs/common';

//import { EmployeeController } from './emp.controller';
import { EmployeeProController } from './employee.controller';
import { ProductService } from './employee.service';
/* import { GrpcMethod, ClientGrpc } from '@nestjs/microservices';
import { join } from 'path';
import { Observable } from 'rxjs'; */

import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: "PRODUCT_PACKAGE",
        transport:Transport.GRPC,
        options:{
          package:'product',
          protoPath:join(__dirname, '../../../api/product.proto'),
          url:'localhost:5000'
        }
      }
    ])
  ],
  controllers: [EmployeeProController],
  providers: [ProductService],
})
export class EmployeeModule {}
 