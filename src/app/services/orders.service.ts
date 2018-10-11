import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/observable";
import { environment } from "../../environments/environment";
import { of } from "rxjs/observable/of";
import "rxjs/add/operator/map";

// import { superagent } from 'superagent';
import { order } from "../model";

//const request = require("superagent");

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<order[]> {
    // debugger;
    let url = environment.SHOPIFY_ORDERS_HEROKU;
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Access-Control-Allow-Origin", "*")
      .set("X-Shopify-Storefront-Access-Token", environment.sopifyaccesstoken);
    return this.http.get(url).map((data:any) => <order[]>data.orders);
    //.map(data => <any>data);

    // return request
    // .get("https://zinnga.myshopify.com/admin/orders.json")
    //   .set('Accept', 'application/json')
    //   .auth(
    //     "f48c2679dcae5ef7a399444b45ab5c95",
    //     "fd69fe9f795a4a6248e415b2f1a9907b"
    //   )
    //   .end((err, response) => {
    //     if (err) {
    //       return of(err);
    //     }
    //     //res.send(JSON.stringify(response.body));
    //     //res.send(response.body);
    //     return of(response.body);
    //   });

    // return superagent
    //   .get("https://zinnga.myshopify.com/admin/orders.json")
    //   .set('Accept', 'application/json')
    //   .auth(
    //     "f48c2679dcae5ef7a399444b45ab5c95",
    //     "fd69fe9f795a4a6248e415b2f1a9907b"
    //   )
    //   .end((err, response) => {
    //     if (err) {
    //       return console.log(err);
    //     }
    //     //res.send(JSON.stringify(response.body));
    //     return of(response.body);
    //   });
  }

  getVendors(): Observable<any> {
    return this.http.get("../../assets/vendors.json").map((data:any) => <any>data.Vendors);
  }
}
