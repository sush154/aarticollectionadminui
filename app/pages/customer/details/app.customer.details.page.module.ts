import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {StateParserModule} from '../../../util/state/app.state.parser.module';
import { LoadersCssModule } from 'angular2-loaders-css';

import {AppHeaderModule} from '../../../modules/header/app.header.module';

import {CustomerDetailsPageComponent} from './app.customer.details.page.component';

@NgModule({
    imports : [CommonModule, FormsModule, RouterModule, AppHeaderModule, ToasterModule, StateParserModule, LoadersCssModule],
    declarations : [CustomerDetailsPageComponent],
    exports : [CustomerDetailsPageComponent]
})

export class CustomerDetailsPageModule{}