import { Injectable } from '@nestjs/common';
import { Product } from '@new-employee/dto';
import {v4 as uuidv4 } from 'uuid'
//import { ProductServiceInterface } from './product.interface';
import { ProductServiceInterface } from '../../../interface/product.interface'
@Injectable()
export class ProductService {
 /*  private productServiceInterface:ProductServiceInterface
  onModuleInit(){
    this.productServiceInterface=this.client.
  } */
  public products:Product={} as any;
  public productServiceinterface:ProductServiceInterface;
  //add book 

 /*  AddProduct(product:Product) :string{
    //id audo generate: uuid
    product.id=uuidv4()
  const data=  this.products.push(product);
    return  this.productServiceinterface.AddProduct(data)/* `${product.title} has been successfuly added` 
  } */

  addProductService(product:Product) :any{
    //id audo generate: uuid
  //  product.id=uuidv4()
    this.products.title=product.title;
    this.products.price=product.price;
    console.log("product",product)
    return  this.products/* `${product.title} has been successfuly added` */
  }

  // update book 
  updateProductService(product:Product) :string{
    const index = this.products.findIndex((currentProduct)=>{
      return currentProduct.id==product.id
    })
    this.products[index] = product;
    return `${product.id} has been successfully updated.`
  }

  //delete all product
deleteProductService(productId:string):string {
  this.products= this.products.filter((product)=>{
    return product.id != productId 
  })
  return `book has been deleted successfully`
}
  //getAllProduct
  findAllProducts():Product{
    return this.products
  }
}
