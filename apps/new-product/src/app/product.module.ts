import { Module } from '@nestjs/common';

import { ProductController } from './product.controller';
import { ProductService } from './product.service';
/* import { GrpcMethod, ClientGrpc } from '@nestjs/microservices';
import { join } from 'path';
import { Observable } from 'rxjs'; */

/* import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path'; */
@Module({
  imports: [
   /*  ClientsModule.register([
      {
        name: "EMPLOYEE_PACKAGE",
        transport:Transport.GRPC,
        options:{
          package:'employee',
          protoPath:join(__dirname,'..','..','..','/apps/api/employee.proto'),
          url:'localhost:50050'
        }
      }
    ]) */
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
 /*  constructor(
    private readonly productService: ProductService,
    // private client: ClientGrpc,
  )  */

  /* configure(consumer: import('@nestjs/microservices').ConsumeService) {
    consumer
      .apply(this.productService.findAllProducts)
      .forRpc('GetProduct')
      .apply(this.productService.addProductService)
      .forRpc('AddProduct');
  }

  @GrpcMethod('EmployeeService')
  getEmployee(data: string): Observable<string> {
    return this.client.send<any>({ cmd: 'getEmployee' }, data);
  } */
//}

