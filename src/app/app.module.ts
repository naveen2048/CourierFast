import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { OrderService } from './services/orders.service';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { FilterPipe } from './shared/filter';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorsDropdownComponent } from './shared/vendors-dropdown';
import { SpinnerComponent } from './shared/spinner';
import { DelhiveryComponent } from './courier-vendors/delhivery/delhivery.component';
import { EcomComponent } from './courier-vendors/ecom/ecom.component';
import { AramaxComponent } from './courier-vendors/aramax/aramax.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component:HomeComponent },
  { path:'orders', component:OrdersListComponent },
  { path:'orders-table', component:OrdersTableComponent },
  { path:'vendors', component:VendorListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersListComponent,
    OrdersTableComponent,
    HeaderNavigationComponent,
    OrderDetailsComponent,
    FilterPipe,
    VendorListComponent,
    VendorsDropdownComponent,
    SpinnerComponent,
    DelhiveryComponent,
    EcomComponent,
    AramaxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [OrderService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
