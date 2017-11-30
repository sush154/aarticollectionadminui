import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {NgxPaginationModule} from 'ngx-pagination';
import {DateParserModule} from '../../../util/dateParser/app.date.parser.module';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {AppHeaderModule} from '../../../modules/header/app.header.module';
import { LoadersCssModule } from 'angular2-loaders-css';

import {ProductsListPageComponent} from './app.product.list.page.component';

@NgModule({
    imports : [CommonModule, RouterModule, NgxPaginationModule, DateParserModule, ToasterModule,
                AppHeaderModule, LoadersCssModule],
    declarations : [ProductsListPageComponent],
    exports : [ProductsListPageComponent]
})

export class ProductListPageModule {}
