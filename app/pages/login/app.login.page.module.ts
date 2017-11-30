import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {CommonModule} from '@angular/common';
import { LoadersCssModule } from 'angular2-loaders-css';

import {LoginPageComponent} from './app.login.page.component';

@NgModule({
    imports : [FormsModule, RouterModule, ToasterModule, CommonModule, LoadersCssModule],
    declarations : [LoginPageComponent],
    exports : [LoginPageComponent]
})

export class LoginPageModule {}