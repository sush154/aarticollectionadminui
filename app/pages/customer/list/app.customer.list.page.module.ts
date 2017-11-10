import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {AppHeaderModule} from '../../../modules/header/app.header.module';
import {StateParserModule} from '../../../util/state/app.state.parser.module';

import {CustomerListPageComponent} from './app.customer.list.page.component';

@NgModule({
    imports : [CommonModule, RouterModule, AppHeaderModule, ToasterModule, StateParserModule],
    declarations : [CustomerListPageComponent],
    exports : [CustomerListPageComponent]
})

export class CustomerListModule {}