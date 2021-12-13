import { Injectable } from '@angular/core';
import { Product } from './Product';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  product_array : Product[] = [
    {id:101,name:"Fan",amount:120},
    {id:102,name:"Mobile",amount:2000},
    {id:103,name:"laptop",amount:10000},
    {id:104,name:"Charger",amount:10},
    {id:105,name:"Ball",amount:25},
  ]
  //Read
  getAllProduct(){
    return this.product_array;
  }
  //search
  getProductById(id :number){
    // console.log(id)
    return this.product_array.filter((product_ele)=>product_ele.id==id)
  }
  
  //seacr
  getProductByName(name : string){
    return this.product_array.filter((product_ele)=>product_ele.name==name)
  }
  // add
  addProduct(product : Product){
    this.product_array.push(product);
  }
  //delet
  deleteProduct(id:number){
    var index:number=-1;
    for (let i in this.product_array){
      if(this.product_array[i].id==id){
        index=parseInt(i);
        break;
      }
    }
    if(index!=-1){
      this.product_array.splice(index, 1);
    }
  }
}
