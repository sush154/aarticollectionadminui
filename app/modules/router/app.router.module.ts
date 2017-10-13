import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import {AppDashboardPageComponent} from '../../pages/dashboard/app.dashboard.page.component';
import {OrderListPageComponent} from '../../pages/order/list/app.order.list.page.component';
import {AddOrderPageComponent} from '../../pages/order/add/app.order.add.page.component';
import {CustomerAddPageComponent} from '../../pages/customer/add/app.customer.add.page.component';
import {OrderDetailsPageComponent} from '../../pages/order/details/app.order.details.page.component';


const routes : Routes = [
    {path : '', component : AppDashboardPageComponent},
    {path : 'dashboard' , component : AppDashboardPageComponent},
    {path : 'products', component : AppDashboardPageComponent},
    {path : 'orders', component : OrderListPageComponent},
    {path : 'orders/addOrder', component : AddOrderPageComponent},
    {path : 'orders/:id', component : OrderDetailsPageComponent},
    {path : 'customers', component : OrderListPageComponent},
    {path : 'customers/addCustomer', component : CustomerAddPageComponent}
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})


export class AppRoutingModule{}

