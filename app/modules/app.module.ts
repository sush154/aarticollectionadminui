import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {AppHeaderModule} from './header/app.header.module';
import {AppRoutingModule} from './router/app.router.module';

import {AppDashboardPageModule} from '../pages/dashboard/app.dashboard.page.module';
import {OrderListPageModule} from '../pages/order/list/app.order.list.page.module';
import {AddOrderPageModule} from '../pages/order/add/app.order.add.page.module';
import {CustomerAddPageModule} from '../pages/customer/add/app.customer.add.page.module';

import {AppComponent} from './app.component';

@NgModule ({
    imports: [
        BrowserModule, RouterModule, HttpModule, AppHeaderModule, AppRoutingModule, AppDashboardPageModule,
        OrderListPageModule, AddOrderPageModule, CustomerAddPageModule
    ],
    declarations: [AppComponent],
    bootstrap : [AppComponent]
})

export class AppModule {}