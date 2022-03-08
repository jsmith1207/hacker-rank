export class PricingItemModel {
    description:string;
    price:number;
    id:string;

    constructor(
        description:string,
        price:number,
        id:string
         ){
             this.description = description;
             this.price = price;
             this.id = id;

         }
}