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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var angular2_toaster_1 = require('angular2-toaster');
var mydatepicker_1 = require('mydatepicker');
var ngx_pagination_1 = require('ngx-pagination');
var app_header_module_1 = require('../../../modules/header/app.header.module');
var app_input_select_box_module_1 = require('../../../modules/input-selectbox/app.input.select.box.module');
var angular2_loaders_css_1 = require('angular2-loaders-css');
var app_order_add_page_component_1 = require('./app.order.add.page.component');
var AddOrderPageModule = (function () {
    function AddOrderPageModule() {
    }
    AddOrderPageModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule, router_1.RouterModule, angular2_toaster_1.ToasterModule, mydatepicker_1.MyDatePickerModule, ngx_pagination_1.NgxPaginationModule,
                app_header_module_1.AppHeaderModule, app_input_select_box_module_1.InputSelectBoxModule, angular2_loaders_css_1.LoadersCssModule],
            declarations: [app_order_add_page_component_1.AddOrderPageComponent],
            exports: [app_order_add_page_component_1.AddOrderPageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AddOrderPageModule);
    return AddOrderPageModule;
}());
exports.AddOrderPageModule = AddOrderPageModule;
//# sourceMappingURL=app.order.add.page.module.js.map