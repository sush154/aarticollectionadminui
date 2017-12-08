import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {AppHeaderModule} from '../../../modules/header/app.header.module';
import { LoadersCssModule } from 'angular2-loaders-css';
import { FileUploadModule } from 'ng2-file-upload';
import {CategoryParserModule} from '../../../util/category/app.parent.category.parser.module';

import {ProductDetailsPageComponent} from './app.product.details.page.component';

@NgModule({
    imports : [CommonModule, FormsModule, RouterModule, ToasterModule, AppHeaderModule, LoadersCssModule,
                FileUploadModule, CategoryParserModule ],
    declarations : [ProductDetailsPageComponent],
    exports : [ProductDetailsPageComponent]
})

export class ProductDetailsPageModule {}