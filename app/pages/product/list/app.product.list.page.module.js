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
var ngx_pagination_1 = require('ngx-pagination');
var app_date_parser_module_1 = require('../../../util/dateParser/app.date.parser.module');
var angular2_toaster_1 = require('angular2-toaster');
var app_header_module_1 = require('../../../modules/header/app.header.module');
var angular2_loaders_css_1 = require('angular2-loaders-css');
var app_parent_category_parser_module_1 = require('../../../util/category/app.parent.category.parser.module');
var app_product_list_page_component_1 = require('./app.product.list.page.component');
var ProductListPageModule = (function () {
    function ProductListPageModule() {
    }
    ProductListPageModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, ngx_pagination_1.NgxPaginationModule, app_date_parser_module_1.DateParserModule, angular2_toaster_1.ToasterModule,
                app_header_module_1.AppHeaderModule, angular2_loaders_css_1.LoadersCssModule, app_parent_category_parser_module_1.CategoryParserModule],
            declarations: [app_product_list_page_component_1.ProductsListPageComponent],
            exports: [app_product_list_page_component_1.ProductsListPageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductListPageModule);
    return ProductListPageModule;
}());
exports.ProductListPageModule = ProductListPageModule;
//# sourceMappingURL=app.product.list.page.module.js.map