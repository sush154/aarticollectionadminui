import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {AppHeaderModule} from '../../../modules/header/app.header.module';
import { LoadersCssModule } from 'angular2-loaders-css';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import {AddProductPageComponent} from './app.product.add.page.component';

@NgModule({
    imports : [CommonModule, FormsModule, RouterModule, ToasterModule, AppHeaderModule, LoadersCssModule],
    declarations : [AddProductPageComponent, FileSelectDirective],
    exports : [AddProductPageComponent]
})

export class AddProductPageModule {}