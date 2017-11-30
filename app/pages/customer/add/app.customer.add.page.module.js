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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var angular2_toaster_1 = require('angular2-toaster');
var app_header_module_1 = require('../../../modules/header/app.header.module');
var angular2_loaders_css_1 = require('angular2-loaders-css');
var app_customer_add_page_component_1 = require('./app.customer.add.page.component');
var CustomerAddPageModule = (function () {
    function CustomerAddPageModule() {
    }
    CustomerAddPageModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, router_1.RouterModule, common_1.CommonModule, angular2_toaster_1.ToasterModule, app_header_module_1.AppHeaderModule, angular2_loaders_css_1.LoadersCssModule],
            declarations: [app_customer_add_page_component_1.CustomerAddPageComponent],
            exports: [app_customer_add_page_component_1.CustomerAddPageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerAddPageModule);
    return CustomerAddPageModule;
}());
exports.CustomerAddPageModule = CustomerAddPageModule;
//# sourceMappingURL=app.customer.add.page.module.js.map