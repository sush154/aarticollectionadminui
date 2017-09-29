import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppDashboardPageComponent} from './app.dashboard.page.component';
import { ChartModule } from 'angular2-highcharts';
import {DateParserModule} from '../../util/dateParser/app.date.parser.module';
import {OrderParserModule} from '../../util/order/app.order.parser.module';

import {DashboardOrdersListComponent} from './ordersList/app.dashboard.pages.ordersList.component';
import {DashboardProductsListComponent} from './productsList/app.dashboard.pages.productsList.component';

import {OrderProvider} from '../../providers/order/app.order.provider';
import {ProductProvider} from '../../providers/product/app.product.provider';

@NgModule({
    imports : [CommonModule, ChartModule.forRoot(require('highcharts')), DateParserModule, OrderParserModule],
    declarations : [AppDashboardPageComponent, DashboardOrdersListComponent, DashboardProductsListComponent],
    exports : [AppDashboardPageComponent],
    providers : [OrderProvider, ProductProvider]
})

export class AppDashboardPageModule {}