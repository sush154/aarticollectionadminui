import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {AppHeaderModule} from '../../../modules/header/app.header.module';
import { LoadersCssModule } from 'angular2-loaders-css';

import {CustomerAddPageComponent} from './app.customer.add.page.component';

@NgModule({
    imports : [FormsModule, RouterModule, CommonModule, ToasterModule, AppHeaderModule, LoadersCssModule],
    declarations : [CustomerAddPageComponent],
    exports : [CustomerAddPageComponent]
})

export class CustomerAddPageModule {}