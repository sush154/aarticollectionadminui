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
var router_1 = require('@angular/router');
var angular2_toaster_1 = require('angular2-toaster');
var app_auth_provider_1 = require('../../providers/auth/app.auth.provider');
var LoginPageComponent = (function () {
    function LoginPageComponent(router, toastrService, authProvider) {
        this.router = router;
        this.toastrService = toastrService;
        this.authProvider = authProvider;
        this.loginObj = {};
        this.loginFormFlag = true;
        this.forgetPasswordFlag = false;
    }
    LoginPageComponent.prototype.login = function () {
        console.log(this.loginObj);
        this.router.navigate(['/dashboard']);
    };
    LoginPageComponent.prototype.toggleForms = function (actionName) {
        if (actionName === 'forgetPassword') {
            this.loginFormFlag = false;
            this.forgetPasswordFlag = true;
        }
        else if (actionName === 'login') {
            this.forgetPasswordFlag = false;
            this.loginFormFlag = true;
        }
    };
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './app/pages/login/app.login.component.html',
            styleUrls: ['./app/pages/login/app.login.component.css'],
            providers: [app_auth_provider_1.AuthProvider]
        }), 
        __metadata('design:paramtypes', [router_1.Router, angular2_toaster_1.ToasterService, app_auth_provider_1.AuthProvider])
    ], LoginPageComponent);
    return LoginPageComponent;
}());
exports.LoginPageComponent = LoginPageComponent;
//# sourceMappingURL=app.login.page.component.js.map