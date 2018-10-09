import { Component, OnInit } from "@angular/core";
import { OrderService } from "../services/orders.service";
import { order } from '../model';

@Component({
  selector: "app-orders-table",
  templateUrl: "./orders-table.component.html",
  styleUrls: ["./orders-table.component.css"]
})
export class OrdersTableComponent implements OnInit {
  data: order[];
  showDetails:boolean = false;
  constructor(private orderService: OrderService) {
  this.orderService.getOrders()
    .subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  ngOnInit() {
    
  }

  toggle(){
    this.showDetails = !this.showDetails;
  }
}
