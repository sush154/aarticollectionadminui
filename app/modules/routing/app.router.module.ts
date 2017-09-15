import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppDashboardComponent} from '../dashboard/app.dashboard.component';

const routes : Routes = [
    {path : '', component : AppDashboardComponent},
    {path : 'dashboard', component : AppDashboardComponent},
    {path : 'products', component : AppDashboardComponent},
    {path : 'orders', component : AppDashboardComponent}
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule {}