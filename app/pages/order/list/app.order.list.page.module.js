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
var router_1 = require('@angular/router');
var app_order_list_page_component_1 = require('./app.order.list.page.component');
var ngx_pagination_1 = require('ngx-pagination');
var app_header_module_1 = require('../../../modules/header/app.header.module');
var app_date_parser_module_1 = require('../../../util/dateParser/app.date.parser.module');
var app_order_parser_module_1 = require('../../../util/order/app.order.parser.module');
var app_order_status_module_1 = require('../../../util/sort/orderStatus/app.order.status.module');
var angular2_loaders_css_1 = require('angular2-loaders-css');
var OrderListPageModule = (function () {
    function OrderListPageModule() {
    }
    OrderListPageModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, app_date_parser_module_1.DateParserModule, app_order_parser_module_1.OrderParserModule, router_1.RouterModule, ngx_pagination_1.NgxPaginationModule,
                app_order_status_module_1.OrderStatusSortModule, app_header_module_1.AppHeaderModule, angular2_loaders_css_1.LoadersCssModule],
            declarations: [app_order_list_page_component_1.OrderListPageComponent],
            exports: [app_order_list_page_component_1.OrderListPageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], OrderListPageModule);
    return OrderListPageModule;
}());
exports.OrderListPageModule = OrderListPageModule;
//# sourceMappingURL=app.order.list.page.module.js.map