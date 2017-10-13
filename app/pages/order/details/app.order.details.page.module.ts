import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {OrderDetailsPageComponent} from './app.order.details.page.component';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { MyDatePickerModule } from 'mydatepicker';

import {AppPaymentParserModule} from '../../../util/payment/app.payment.parser.module';
import {AppDeliveryParserModule} from '../../../util/delivery/app.delivery.parser.module';
import {StateParserModule} from '../../../util/state/app.state.parser.module';
import {DiscountParserModule} from '../../../util/discount/app.discount.parser.module';


@NgModule({
    imports : [ToasterModule, CommonModule, AppPaymentParserModule, AppDeliveryParserModule, StateParserModule,
                FormsModule, DiscountParserModule, MyDatePickerModule],
    declarations : [OrderDetailsPageComponent],
    exports : [OrderDetailsPageComponent]
})

export class OrderDetailsPageModule {}