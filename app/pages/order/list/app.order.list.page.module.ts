import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {OrderListPageComponent} from './app.order.list.page.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {AppHeaderModule} from '../../../modules/header/app.header.module';

import {DateParserModule} from '../../../util/dateParser/app.date.parser.module';
import {OrderParserModule} from '../../../util/order/app.order.parser.module';
import {OrderStatusSortModule} from '../../../util/sort/orderStatus/app.order.status.module';
import { LoadersCssModule } from 'angular2-loaders-css';

@NgModule({
    imports : [CommonModule, DateParserModule, OrderParserModule, RouterModule, NgxPaginationModule,
                OrderStatusSortModule, AppHeaderModule, LoadersCssModule],
    declarations : [OrderListPageComponent],
    exports  :[OrderListPageComponent]
})

export class OrderListPageModule{}