import { Component, OnInit } from "@angular/core";
import { OrderService } from "../services/orders.service";

@Component({
  selector: "app-vendor-list",
  templateUrl: "./vendor-list.component.html",
  styleUrls: ["./vendor-list.component.css"]
})
export class VendorListComponent implements OnInit {
  vendors: any[] = [];

  constructor(private vendorService: OrderService) {}

  ngOnInit() {
    this.vendorService.getVendors().subscribe(data => {
      this.vendors = data;
      console.log(data);
    });
  }
}
