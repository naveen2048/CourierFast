import { BrowserModule } from '@angular/platform-browser';
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

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component:HomeComponent },
  { path:'orders', component:OrdersListComponent },
  { path:'orders-table', component:OrdersTableComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersListComponent,
    OrdersTableComponent,
    HeaderNavigationComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [OrderService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
