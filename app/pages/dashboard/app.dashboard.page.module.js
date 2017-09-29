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
var common_1 = require('@angular/common');
var app_dashboard_page_component_1 = require('./app.dashboard.page.component');
var angular2_highcharts_1 = require('angular2-highcharts');
var app_date_parser_module_1 = require('../../util/dateParser/app.date.parser.module');
var app_order_parser_module_1 = require('../../util/order/app.order.parser.module');
var app_dashboard_pages_ordersList_component_1 = require('./ordersList/app.dashboard.pages.ordersList.component');
var app_dashboard_pages_productsList_component_1 = require('./productsList/app.dashboard.pages.productsList.component');
var app_order_provider_1 = require('../../providers/order/app.order.provider');
var app_product_provider_1 = require('../../providers/product/app.product.provider');
var AppDashboardPageModule = (function () {
    function AppDashboardPageModule() {
    }
    AppDashboardPageModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, angular2_highcharts_1.ChartModule.forRoot(require('highcharts')), app_date_parser_module_1.DateParserModule, app_order_parser_module_1.OrderParserModule],
            declarations: [app_dashboard_page_component_1.AppDashboardPageComponent, app_dashboard_pages_ordersList_component_1.DashboardOrdersListComponent, app_dashboard_pages_productsList_component_1.DashboardProductsListComponent],
            exports: [app_dashboard_page_component_1.AppDashboardPageComponent],
            providers: [app_order_provider_1.OrderProvider, app_product_provider_1.ProductProvider]
        }), 
        __metadata('design:paramtypes', [])
    ], AppDashboardPageModule);
    return AppDashboardPageModule;
}());
exports.AppDashboardPageModule = AppDashboardPageModule;
//# sourceMappingURL=app.dashboard.page.module.js.map