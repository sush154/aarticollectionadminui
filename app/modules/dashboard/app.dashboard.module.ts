import {NgModule} from '@angular/core';

import {AppHeaderModule} from '../navigation/header/app.header.module';
import { ChartModule } from 'angular2-highcharts';
import {OrdersListModule} from '../order/list/app.orders.list.module';
import {ProductsListModule} from '../product/list/app.products.list.model';

import {AppDashboardComponent} from './app.dashboard.component';

@NgModule({
    imports : [AppHeaderModule, ChartModule.forRoot(require('highcharts')), OrdersListModule, ProductsListModule],
    declarations : [AppDashboardComponent],
    exports : [AppDashboardComponent]
})

export class AppDashboardModule {}