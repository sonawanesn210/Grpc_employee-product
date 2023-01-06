import { Body, Controller,Param, /* Delete, Get,  Post, Put  */} from '@nestjs/common';
import { Product } from '@new-employee/dto';
import { ProductService } from './product.service';
import { GrpcMethod } from '@nestjs/microservices';
//import {ProductRequest } from '../../../api/product.proto'
@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  
//@Post('/addProduct')
/* @GrpcMethod('ProductServiceInterface','AddProduct')
//addProduct(@Body() product:Product): string{
  AddProduct(data: Product): string{
  return this.productService.AddProduct(data)
}  */
 @GrpcMethod('ProductServiceInterface','AddProduct')
//addProduct(@Body() product:Product): string{
  addProduct(data: Product): any{
    console.log("productData",data)
  return this.productService.addProductService(data) 
} 
//@Get('/findAll')
 @GrpcMethod('ProductServiceInterface','GetProduct')
//getAllProduct():Product[]{
  GetProduct(data: Product):any{
  return this.productService.findAllProducts()
} 

//@Put('/update')
@GrpcMethod('ProductServiceInterface','UpdateProduct')
//updateProduct(@Body() product:Product):string{
  updateProduct(data: Product):any{
  return this.productService.updateProductService(data)
}

//@Delete('delete/:id')
@GrpcMethod('ProductServiceInterface','DeleteProduct')
//deleteProduct(@Param('id') productId:string):string{
  deleteProduct(data:any):any{
  return this.productService.deleteProductService(data)
}
}
