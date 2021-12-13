export class Product{
    id: number = 0 ;
    name :string = "";
    amount : number = 0;

    constructor(id:number,name:string,amount:number){
        this.id = id;
        this.name = name;
        this.amount = amount;
    }
}