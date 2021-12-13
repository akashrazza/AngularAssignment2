import { Component } from '@angular/core';
import { Product } from './Product';
import { LoggerService } from './logger.service';
import { ProductServiceService } from './product-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'DayFour';
  id : number = 0;
  name :string = '';
  amount :number = 0;
  AddTab : Boolean= true;
  Searchtab : Boolean = false;
  ActiveId = true;
  ActiveName = true;
  ActiveSearchID(){
    this.id=0;
    this.name='';
    this.amount=0;
    this.ActiveName = true;
    this.ActiveId = false;
  }
  ActiveSearchName(){
    this.id=0;
    this.name='';
    this.amount=0;
    this.ActiveId = true;
    this.ActiveName = false;
  }
  ActiveAdd(){
    this.id=0;
    this.name='';
    this.amount=0;
    this.AddTab = true;
    this.Searchtab  = false;
  }
  ActiveSearch(){
    this.id=0;
    this.name='';
    this.amount=0;
    this.AddTab = false;
    this.Searchtab  = true;
  }
  constructor (private ProductService:ProductServiceService , private logger : LoggerService){
  }
  GetData = this.ProductService.getAllProduct();

  GetAllData(){
    this.logger.INFO( "Class Name : "+this.constructor.name + " Function Name : "+ this.GetAllData.name + " before Execution");
    this.GetData = this.ProductService.getAllProduct();
    this.id=0;
    this.name='';
    this.amount=0;
    this.logger.DEBUG( "Class Name : "+this.constructor.name + " Function Name : "+ this.GetAllData.name + " after Execution");
  }
  AddProduct(){
    this.logger.WARNING( "Class Name : "+this.constructor.name + " Function Name : "+ this.GetAllData.name + " before Execution");
    var productobj  = new Product(this.id,this.name,this.amount);
    this.ProductService.addProduct(productobj);
    this.id=0;
    this.name='';
    this.amount=0;
    this.logger.WARNING( "Class Name : "+this.constructor.name + " Function Name : "+ this.GetAllData.name + " after Execution");
  }
  DeleteProduct ( key : number){
    this.logger.INFO( "Class Name : "+this.constructor.name + " Function Name : "+ this.GetAllData.name + " before Execution");
    this.ProductService.deleteProduct(key);
    this.logger.INFO( "Class Name : "+this.constructor.name + " Function Name : "+ this.GetAllData.name + " after Execution");
  }
  GetProductById(){
    this.logger.WARNING( "Class Name : "+this.constructor.name + " Function Name : "+ this.GetAllData.name + " before Execution");
    this.GetData = this.ProductService.getProductById(this.id);
    this.logger.INFO( "Class Name : "+this.constructor.name + " Function Name : "+ this.GetAllData.name + " after Execution");
  }
  GetProductByName(){
    this.logger.INFO( "Class Name : "+this.constructor.name + " Function Name : "+ this.GetAllData.name + " before Execution");
    this.GetData = this.ProductService.getProductByName(this.name)
    this.logger.INFO( "Class Name : "+this.constructor.name + " Function Name : "+ this.GetAllData.name + " after Execution");
  }

  childtoparentdata:string='';
  GetchildData(msg:any){
    this.childtoparentdata = msg;
  }
  choldobject :any;
  Getchildobj(msg:any){
    this.choldobject  =msg;
  }
  choldobject_arr:any;
  Getchildobjarr(msg:any){
    this.choldobject_arr  =msg;
  }
}
