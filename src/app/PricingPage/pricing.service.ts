import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { PricingItemModel } from "./pricing-item.model";

@Injectable({
    providedIn: 'root'
})
export class PricesService{
    private baseUrl: 
    string ="https://hacker-rank-f1b27-default-rtdb.firebaseio.com/"
    private pricingEndpoint: string = "prices.json"

    constructor(private http:HttpClient){

    }
    public getProducts(){
        return this.http.get<PricingItemModel []>(this.baseUrl + this.pricingEndpoint);
    }
}