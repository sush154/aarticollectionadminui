import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {OrderListPageComponent} from './app.order.list.page.component';

import {DateParserModule} from '../../../util/dateParser/app.date.parser.module';
import {OrderParserModule} from '../../../util/order/app.order.parser.module';

@NgModule({
    imports : [CommonModule, DateParserModule, OrderParserModule, RouterModule],
    declarations : [OrderListPageComponent],
    exports  :[OrderListPageComponent]
})

export class OrderListPageModule{}