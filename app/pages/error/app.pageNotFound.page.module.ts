import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


import {PageNotFoundComponent} from './app.pageNotFound.page.component';

@NgModule({
    imports : [RouterModule],
    declarations : [PageNotFoundComponent],
    exports : [PageNotFoundComponent]
})

export class PageNotFoundModule {}