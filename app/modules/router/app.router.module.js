"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_dashboard_page_component_1 = require('../../pages/dashboard/app.dashboard.page.component');
var app_order_list_page_component_1 = require('../../pages/order/list/app.order.list.page.component');
var app_order_add_page_component_1 = require('../../pages/order/add/app.order.add.page.component');
var app_customer_add_page_component_1 = require('../../pages/customer/add/app.customer.add.page.component');
var app_order_details_page_component_1 = require('../../pages/order/details/app.order.details.page.component');
var app_login_page_component_1 = require('../../pages/login/app.login.page.component');
var app_customer_list_page_component_1 = require('../../pages/customer/list/app.customer.list.page.component');
var app_customer_details_page_component_1 = require('../../pages/customer/details/app.customer.details.page.component');
var app_product_list_page_component_1 = require('../../pages/product/list/app.product.list.page.component');
var app_product_add_page_component_1 = require('../../pages/product/add/app.product.add.page.component');
var app_product_details_page_component_1 = require('../../pages/product/details/app.product.details.page.component');
var app_pageNotFound_page_component_1 = require('../../pages/error/app.pageNotFound.page.component');
var routes = [
    { path: 'login', component: app_login_page_component_1.LoginPageComponent },
    { path: 'dashboard', component: app_dashboard_page_component_1.AppDashboardPageComponent },
    { path: 'products', component: app_product_list_page_component_1.ProductsListPageComponent },
    { path: 'products/addProduct', component: app_product_add_page_component_1.AddProductPageComponent },
    { path: 'products/:id', component: app_product_details_page_component_1.ProductDetailsPageComponent },
    { path: 'orders', component: app_order_list_page_component_1.OrderListPageComponent },
    { path: 'orders/addOrder', component: app_order_add_page_component_1.AddOrderPageComponent },
    { path: 'orders/:id', component: app_order_details_page_component_1.OrderDetailsPageComponent },
    { path: 'customers', component: app_customer_list_page_component_1.CustomerListPageComponent },
    { path: 'customers/addCustomer', component: app_customer_add_page_component_1.CustomerAddPageComponent },
    { path: 'customers/:id', component: app_customer_details_page_component_1.CustomerDetailsPageComponent },
    { path: '**', component: app_pageNotFound_page_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.router.module.js.map