import {
  Body,
  Controller,
 // Param,
 // Delete,
  Get,
  Post,
 // Put,
  //OnModuleInit,
} from '@nestjs/common';
//import { Employee } from '@new-product/dto';
//import { EmployeeService } from './emp.service';
import { ProductService } from './employee.service';
import { Product } from '@new-employee/dto'
/* import { ProductServiceInterface } from '../../../interfaces/product.iterface'

import  {Client,ClientGrpc} from '@nestjs/microservices';
import { microserviceOptions } from './grpc.options';
*/
@Controller()
export class EmployeeProController{ /* implements OnModuleInit {
  @Client(microserviceOptions)
  private client : ClientGrpc;

  private productServiceinterface:ProductServiceInterface;
*/
 constructor(private readonly employeeService: ProductService) {}

 /*  onModuleInit(){
      this.productServiceinterface= this.client.getService<ProductServiceInterface>('ProductServiceInterface')

  } */

  @Post('add')
  AddProduct(@Body() product:Product):any {
    console.log("massage from client",product)

      return  this.employeeService.AddProduct(product) 
  } 
  /*  @Post('addEmployee')
  addEmployee(@Body() employee: Employee): string {
      return this.employeeService.addEmployeeService(employee);
    } */ 
    
  @Get('findAll')
  GetProduct():Product{
      return  this.employeeService.GetProduct()
  }
  

}

