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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var app_header_module_1 = require('./header/app.header.module');
var app_router_module_1 = require('./router/app.router.module');
var app_input_select_box_module_1 = require('./input-selectbox/app.input.select.box.module');
var app_dashboard_page_module_1 = require('../pages/dashboard/app.dashboard.page.module');
var app_order_list_page_module_1 = require('../pages/order/list/app.order.list.page.module');
var app_order_add_page_module_1 = require('../pages/order/add/app.order.add.page.module');
var app_customer_add_page_module_1 = require('../pages/customer/add/app.customer.add.page.module');
var app_order_details_page_module_1 = require('../pages/order/details/app.order.details.page.module');
var app_login_page_module_1 = require('../pages/login/app.login.page.module');
var app_customer_list_page_module_1 = require('../pages/customer/list/app.customer.list.page.module');
var app_customer_details_page_module_1 = require('../pages/customer/details/app.customer.details.page.module');
var app_component_1 = require('./app.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule, router_1.RouterModule, http_1.HttpModule, app_header_module_1.AppHeaderModule, app_router_module_1.AppRoutingModule, app_dashboard_page_module_1.AppDashboardPageModule,
                app_order_list_page_module_1.OrderListPageModule, app_order_add_page_module_1.AddOrderPageModule, app_customer_add_page_module_1.CustomerAddPageModule, app_order_details_page_module_1.OrderDetailsPageModule, app_login_page_module_1.LoginPageModule,
                common_1.CommonModule, app_customer_list_page_module_1.CustomerListModule, app_customer_details_page_module_1.CustomerDetailsPageModule, app_input_select_box_module_1.InputSelectBoxModule
            ],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map