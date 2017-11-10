import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {CommonModule} from '@angular/common';

import {AppHeaderComponent} from './app.header.component';

@NgModule({
    imports : [RouterModule, ToasterModule, CommonModule],
    declarations : [AppHeaderComponent],
    exports : [AppHeaderComponent]
})

export class AppHeaderModule {}