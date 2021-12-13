import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  INFO(msg:string){
    let date = new Date().toString()
    console.log(date + this.INFO.name +" Message : " + msg);
  }
  DEBUG(msg:string){
    let date = new Date().toString()
    console.log(date+ this.DEBUG.name  +" Message : " + msg);
  }
  WARNING(msg:string){
    let date = new Date().toString()
    console.log(date+ this.WARNING.name  +" Message : " + msg);
  } 
  ERROR(msg:string){
    let date = new Date().toString()
    console.log(date+ this.ERROR.name  +" Message : " + msg);
  }
}
