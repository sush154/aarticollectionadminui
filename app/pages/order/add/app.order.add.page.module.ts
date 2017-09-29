import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { MyDatePickerModule } from 'mydatepicker';
import {NgxPaginationModule} from 'ngx-pagination';

import {AddOrderPageComponent} from './app.order.add.page.component';

@NgModule({
    imports : [FormsModule, CommonModule, RouterModule, ToasterModule, MyDatePickerModule, NgxPaginationModule],
    declarations: [AddOrderPageComponent],
    exports: [AddOrderPageComponent]
})

export class AddOrderPageModule{}