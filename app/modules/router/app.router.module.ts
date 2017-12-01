import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import {AppComponent} from '../app.component';
import {AppDashboardPageComponent} from '../../pages/dashboard/app.dashboard.page.component';
import {OrderListPageComponent} from '../../pages/order/list/app.order.list.page.component';
import {AddOrderPageComponent} from '../../pages/order/add/app.order.add.page.component';
import {CustomerAddPageComponent} from '../../pages/customer/add/app.customer.add.page.component';
import {OrderDetailsPageComponent} from '../../pages/order/details/app.order.details.page.component';
import {LoginPageComponent} from '../../pages/login/app.login.page.component';
import {CustomerListPageComponent} from '../../pages/customer/list/app.customer.list.page.component';
import {CustomerDetailsPageComponent} from '../../pages/customer/details/app.customer.details.page.component';
import {ProductsListPageComponent} from '../../pages/product/list/app.product.list.page.component';
import {AddProductPageComponent} from '../../pages/product/add/app.product.add.page.component';
import {ProductDetailsPageComponent} from '../../pages/product/details/app.product.details.page.component';

const routes : Routes = [
    {path : 'login', component : LoginPageComponent},
    {path : 'dashboard' , component : AppDashboardPageComponent},
    {path : 'products', component : ProductsListPageComponent},
    {path : 'products/addProduct', component : AddProductPageComponent},
    {path : 'products/:id', component : ProductDetailsPageComponent},
    {path : 'orders', component : OrderListPageComponent},
    {path : 'orders/addOrder', component : AddOrderPageComponent},
    {path : 'orders/:id', component : OrderDetailsPageComponent},
    {path : 'customers', component : CustomerListPageComponent},
    {path : 'customers/addCustomer', component : CustomerAddPageComponent},
    {path : 'customers/:id', component : CustomerDetailsPageComponent}
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})


export class AppRoutingModule{}

