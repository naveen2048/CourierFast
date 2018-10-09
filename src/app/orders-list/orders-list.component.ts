import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/orders.service';
import { order } from '../model';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  orders: order[];

  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.orderService.getOrders()
                    .subscribe(data => this.orders = data);
  }

}
