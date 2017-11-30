import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { MyDatePickerModule } from 'mydatepicker';
import {NgxPaginationModule} from 'ngx-pagination';
import {AppHeaderModule} from '../../../modules/header/app.header.module';
import {InputSelectBoxModule} from '../../../modules/input-selectbox/app.input.select.box.module';
import { LoadersCssModule } from 'angular2-loaders-css';

import {AddOrderPageComponent} from './app.order.add.page.component';

@NgModule({
    imports : [FormsModule, CommonModule, RouterModule, ToasterModule, MyDatePickerModule, NgxPaginationModule,
                AppHeaderModule, InputSelectBoxModule, LoadersCssModule],
    declarations: [AddOrderPageComponent],
    exports: [AddOrderPageComponent]
})

export class AddOrderPageModule{}