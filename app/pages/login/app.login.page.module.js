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
var angular2_toaster_1 = require('angular2-toaster');
var common_1 = require('@angular/common');
var app_login_page_component_1 = require('./app.login.page.component');
var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, router_1.RouterModule, angular2_toaster_1.ToasterModule, common_1.CommonModule],
            declarations: [app_login_page_component_1.LoginPageComponent],
            exports: [app_login_page_component_1.LoginPageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginPageModule);
    return LoginPageModule;
}());
exports.LoginPageModule = LoginPageModule;
//# sourceMappingURL=app.login.page.module.js.map