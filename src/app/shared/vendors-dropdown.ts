import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { OrderService } from "../services/orders.service";

@Component({
  selector: "app-vendors-dropdown",
  template: `
    <select id="ddlCourier" name="ddlCourier" [(ngModel)]="selectedVendor" (change)="vendor()" placeholder="select courier"
        class="form-control" aria-invalid="false">
    <option *ngFor="let vendor of vendors" value="{{vendor.ID}}">{{vendor.PICKUP_NAME}}</option>
    </select>
  `,
  styleUrls: []
})
export class VendorsDropdownComponent implements OnInit {
  
  @Input() selectedVendor:string;
  @Output() selectedVendorChange = new EventEmitter<string>();

  vendors: any[] = [];
  constructor(private vendorService: OrderService) {}

  ngOnInit() {
    this.vendorService.getVendors().subscribe(data => {
      this.vendors = data;
    });
  }

  vendor() {
    this.selectedVendorChange.emit(this.selectedVendor);
  }
}
