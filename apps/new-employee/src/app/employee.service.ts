/* import { Injectable } from '@nestjs/common';
import { Employee } from '@new-product/dto';
import {v4 as uuidv4 } from 'uuid'

@Injectable()
export class EmployeeService {
  public employees:Employee[]=[];

  //add book 

  addEmployeeService(employee:Employee) :string{
    //id audo generate: uuid
    employee.id=uuidv4()
    this.employees.push(employee);
    return `${employee.name} has been successfuly added`
  }

  // update book 
  updateEmployeeService(employee:Employee) :string{
    const index = this.employees.findIndex((currentEmployee)=>{
      return currentEmployee.id==employee.id
    })
    this.employees[index] = employee;
    return `${employee.id} has been successfully updated.`
  }

  //delete all product
deleteEmployeeService(employeeId:string):string {
  this.employees= this.employees.filter((employee)=>{
    return employee.id != employeeId 
  })
  return `book has been deleted successfully`
}
  //getAllProduct
  findAllEmployees():Employee[]{
    return this.employees
  }
}
  */

import { Injectable, OnModuleInit } from '@nestjs/common';
import { Product } from '@new-employee/dto';
import {v4 as uuidv4 } from 'uuid'
import { ProductServiceInterface } from '../../../interface/product.interface';
import  {Client,ClientGrpc} from '@nestjs/microservices';
  import { microserviceOptions } from './grpc.options';

@Injectable()
export class ProductService implements OnModuleInit{
  @Client(microserviceOptions)
    private client : ClientGrpc;

    public productServiceinterface:ProductServiceInterface;

 /*  private productServiceInterface:ProductServiceInterface
  onModuleInit(){
    this.productServiceInterface=this.client.
  } */

  onModuleInit(){
    this.productServiceinterface= this.client.getService<ProductServiceInterface>('ProductServiceInterface')

}

  public products:Product={} as any;

  //add book 

  /* AddProduct(product:Product) :string{
    //id audo generate: uuid
    product.id=uuidv4()
    this.products.push(product);
    return `${product.title} has been successfuly added`
  }
 */

  AddProduct(product:Product):any{
    //id audo generate: uuid
    //product.id=uuidv4()
  const title=  this.products.title=product.title
  const price = this.products.price=product.price
  /* push(product) */;
  console.log(title,price)
    return  this.productServiceinterface.AddProduct({title,price})/* `${product.title} has been successfuly added` */
  }
  // update book 
  /* UpdateProduct(product:Product) :string{
    const index = this.products.findIndex((currentProduct)=>{
      return currentProduct.id==product.id
    })
    this.products[index] = product;
    return `${product.id} has been successfully updated.`
  } */
/* 
  UpdateProduct(product:Product) :string{
    const index = this.products.findIndex((currentProduct)=>{
      return currentProduct.id==product.id
    })
    this.products[index] = product;
    return `${product.id} has been successfully updated.` */


  //delete all product
/*   DeleteProduct(productId:string):string {
  this.products= this.products.filter((product)=>{
    return product.id != productId 
  })
  return `Product has been deleted successfully`
} */
  //getAllProduct
   GetProduct():Product{
    //const productData = this.products
    const data =this.productServiceinterface.GetProduct({})
    console.log("data from get",data)
    return data
  }
}




