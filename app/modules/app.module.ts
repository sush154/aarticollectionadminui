import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppHeaderModule} from './navigation/header/app.header.module';
import {AppDashboardModule} from './dashboard/app.dashboard.module';
import {AppRoutingModule} from './routing/app.router.module';
import {OrdersListModule} from './order/list/app.orders.list.module';
import {ProductsListModule} from './product/list/app.products.list.model';

import {AppComponent} from './app.component';

@NgModule ({
    imports: [
        BrowserModule, RouterModule, AppHeaderModule, AppDashboardModule, AppRoutingModule, OrdersListModule,
        ProductsListModule
    ],
    declarations: [AppComponent],
    bootstrap : [AppComponent]
})

export class AppModule {}