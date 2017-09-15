import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppHeaderComponent} from './app.header.component';

@NgModule({
    imports : [RouterModule],
    declarations : [AppHeaderComponent],
    exports : [AppHeaderComponent]
})

export class AppHeaderModule {}