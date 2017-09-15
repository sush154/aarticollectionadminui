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
var app_header_module_1 = require('../navigation/header/app.header.module');
var angular2_highcharts_1 = require('angular2-highcharts');
var app_orders_list_module_1 = require('../order/list/app.orders.list.module');
var app_products_list_model_1 = require('../product/list/app.products.list.model');
var app_dashboard_component_1 = require('./app.dashboard.component');
var AppDashboardModule = (function () {
    function AppDashboardModule() {
    }
    AppDashboardModule = __decorate([
        core_1.NgModule({
            imports: [app_header_module_1.AppHeaderModule, angular2_highcharts_1.ChartModule.forRoot(require('highcharts')), app_orders_list_module_1.OrdersListModule, app_products_list_model_1.ProductsListModule],
            declarations: [app_dashboard_component_1.AppDashboardComponent],
            exports: [app_dashboard_component_1.AppDashboardComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppDashboardModule);
    return AppDashboardModule;
}());
exports.AppDashboardModule = AppDashboardModule;
//# sourceMappingURL=app.dashboard.module.js.map