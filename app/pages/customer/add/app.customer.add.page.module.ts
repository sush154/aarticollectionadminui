import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ToasterModule, ToasterService} from 'angular2-toaster';

import {CustomerAddPageComponent} from './app.customer.add.page.component';

@NgModule({
    imports : [FormsModule, RouterModule, CommonModule, ToasterModule],
    declarations : [CustomerAddPageComponent],
    exports : [CustomerAddPageComponent]
})

export class CustomerAddPageModule {}