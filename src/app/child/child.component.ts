import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() childData = new EventEmitter();
  parentInput=''
  send_data_to_parent(){
    this.childData.emit(this.parentInput)
  }
  child_object = {product_id:101,
                  product_name:"Orange",
                  cost:5000}
  @Output() childData_obj = new EventEmitter();
  
  send_obj_to_parent(){
    this.childData_obj.emit(this.child_object)
  }

  child_object_arr = [{product_id:101,
    product_name:"Orange",
    cost:5000},{product_id:101,
      product_name:"Apple",
      cost:400},{product_id:102,
        product_name:"Mango",
        cost:5043},{product_id:103,
          product_name:"Lemon",
          cost:530},{product_id:104,
            product_name:"Veg",
            cost:7000},]
@Output() childData_obj_arr = new EventEmitter();

send_obj_arr_to_parent(){
this.childData_obj_arr.emit(this.child_object_arr)
}
}
