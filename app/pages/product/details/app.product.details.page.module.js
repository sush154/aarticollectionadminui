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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var angular2_toaster_1 = require('angular2-toaster');
var app_header_module_1 = require('../../../modules/header/app.header.module');
var angular2_loaders_css_1 = require('angular2-loaders-css');
var ng2_file_upload_1 = require('ng2-file-upload');
var app_product_details_page_component_1 = require('./app.product.details.page.component');
var ProductDetailsPageModule = (function () {
    function ProductDetailsPageModule() {
    }
    ProductDetailsPageModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule, angular2_toaster_1.ToasterModule, app_header_module_1.AppHeaderModule, angular2_loaders_css_1.LoadersCssModule,
                ng2_file_upload_1.FileUploadModule],
            declarations: [app_product_details_page_component_1.ProductDetailsPageComponent],
            exports: [app_product_details_page_component_1.ProductDetailsPageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductDetailsPageModule);
    return ProductDetailsPageModule;
}());
exports.ProductDetailsPageModule = ProductDetailsPageModule;
//# sourceMappingURL=app.product.details.page.module.js.map