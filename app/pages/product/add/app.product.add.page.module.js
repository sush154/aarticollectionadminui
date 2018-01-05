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
var app_inputtag_module_1 = require('../../../util/input-tag/app.inputtag.module');
var app_parent_category_parser_module_1 = require('../../../util/category/app.parent.category.parser.module');
var app_product_add_page_component_1 = require('./app.product.add.page.component');
var AddProductPageModule = (function () {
    function AddProductPageModule() {
    }
    AddProductPageModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule, angular2_toaster_1.ToasterModule, app_header_module_1.AppHeaderModule, angular2_loaders_css_1.LoadersCssModule,
                ng2_file_upload_1.FileUploadModule, app_inputtag_module_1.InputTagModule, app_parent_category_parser_module_1.CategoryParserModule],
            declarations: [app_product_add_page_component_1.AddProductPageComponent],
            exports: [app_product_add_page_component_1.AddProductPageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AddProductPageModule);
    return AddProductPageModule;
}());
exports.AddProductPageModule = AddProductPageModule;
//# sourceMappingURL=app.product.add.page.module.js.map