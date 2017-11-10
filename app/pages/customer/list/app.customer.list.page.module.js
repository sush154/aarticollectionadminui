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
var angular2_toaster_1 = require('angular2-toaster');
var app_header_module_1 = require('../../../modules/header/app.header.module');
var app_state_parser_module_1 = require('../../../util/state/app.state.parser.module');
var app_customer_list_page_component_1 = require('./app.customer.list.page.component');
var CustomerListModule = (function () {
    function CustomerListModule() {
    }
    CustomerListModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, app_header_module_1.AppHeaderModule, angular2_toaster_1.ToasterModule, app_state_parser_module_1.StateParserModule],
            declarations: [app_customer_list_page_component_1.CustomerListPageComponent],
            exports: [app_customer_list_page_component_1.CustomerListPageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerListModule);
    return CustomerListModule;
}());
exports.CustomerListModule = CustomerListModule;
//# sourceMappingURL=app.customer.list.page.module.js.map