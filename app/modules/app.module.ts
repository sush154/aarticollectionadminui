import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';

import {AppHeaderModule} from './header/app.header.module';
import {AppRoutingModule} from './router/app.router.module';

import {AppDashboardPageModule} from '../pages/dashboard/app.dashboard.page.module';
import {OrderListPageModule} from '../pages/order/list/app.order.list.page.module';
import {AddOrderPageModule} from '../pages/order/add/app.order.add.page.module';
import {CustomerAddPageModule} from '../pages/customer/add/app.customer.add.page.module';
import {OrderDetailsPageModule} from '../pages/order/details/app.order.details.page.module';
import {LoginPageModule} from '../pages/login/app.login.page.module';
import {CustomerListModule} from '../pages/customer/list/app.customer.list.page.module';
import {CustomerDetailsPageModule} from '../pages/customer/details/app.customer.details.page.module';

import {AppComponent} from './app.component';

@NgModule ({
    imports: [
        BrowserModule, RouterModule, HttpModule, AppHeaderModule, AppRoutingModule, AppDashboardPageModule,
        OrderListPageModule, AddOrderPageModule, CustomerAddPageModule, OrderDetailsPageModule, LoginPageModule,
        CommonModule, CustomerListModule, CustomerDetailsPageModule
    ],
    declarations: [AppComponent],
    bootstrap : [AppComponent]
})

export class AppModule {}