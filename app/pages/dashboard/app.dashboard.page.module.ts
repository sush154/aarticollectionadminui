import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AppDashboardPageComponent} from './app.dashboard.page.component';
import { ChartModule } from 'angular2-highcharts';
import {NgxPaginationModule} from 'ngx-pagination';
import {DateParserModule} from '../../util/dateParser/app.date.parser.module';
import {OrderParserModule} from '../../util/order/app.order.parser.module';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {OrderStatusSortModule} from '../../util/sort/orderStatus/app.order.status.module';
import {AppHeaderModule} from '../../modules/header/app.header.module';
import { LoadersCssModule } from 'angular2-loaders-css';

import {DashboardOrdersListComponent} from './ordersList/app.dashboard.pages.ordersList.component';
import {DashboardProductsListComponent} from './productsList/app.dashboard.pages.productsList.component';

import {OrderProvider} from '../../providers/order/app.order.provider';
import {ProductProvider} from '../../providers/product/app.product.provider';

@NgModule({
    imports : [CommonModule, ChartModule.forRoot(require('highcharts')), DateParserModule, OrderParserModule,
                NgxPaginationModule, ToasterModule, OrderStatusSortModule, RouterModule, AppHeaderModule,
                LoadersCssModule],
    declarations : [AppDashboardPageComponent, DashboardOrdersListComponent, DashboardProductsListComponent],
    exports : [AppDashboardPageComponent],
    providers : [OrderProvider, ProductProvider]
})

export class AppDashboardPageModule {}