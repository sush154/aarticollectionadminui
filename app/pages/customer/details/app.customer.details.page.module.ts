import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppHeaderModule} from '../../../modules/header/app.header.module';

import {CustomerDetailsPageComponent} from './app.customer.details.page.component';

@NgModule({
    imports : [CommonModule, FormsModule, RouterModule, AppHeaderModule],
    declarations : [CustomerDetailsPageComponent],
    exports : [CustomerDetailsPageComponent]
})

export class CustomerDetailsPageModule{}