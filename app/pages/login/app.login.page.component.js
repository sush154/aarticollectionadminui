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
var app_states_1 = require('../../common/app.states');
var app_register_provider_1 = require('../../providers/register/app.register.provider');
var app_login_provider_1 = require('../../providers/login/app.login.provider');
var LoginPageComponent = (function () {
    function LoginPageComponent(router, toastrService, registerProvider, loginProvider) {
        this.router = router;
        this.toastrService = toastrService;
        this.registerProvider = registerProvider;
        this.loginProvider = loginProvider;
        this.loginObj = {};
        this.loginFormFlag = true;
        this.forgetPasswordFlag = false;
        this.registerFlag = false;
        this.statesList = app_states_1.STATES;
        this.selectedState = true;
        this.registrationSuccess = false;
        this.newUser = {};
    }
    LoginPageComponent.prototype.toggleForms = function (flag) {
        if (flag === 'register') {
            this.loginFormFlag = false;
            this.forgetPasswordFlag = false;
            this.registrationSuccess = false;
            this.registerFlag = true;
        }
        else if (flag === 'login') {
            this.forgetPasswordFlag = false;
            this.registerFlag = false;
            this.registrationSuccess = false;
            this.loginFormFlag = true;
        }
        else if (flag === 'forgetPassword') {
            this.loginFormFlag = false;
            this.registerFlag = false;
            this.registrationSuccess = false;
            this.forgetPasswordFlag = true;
        }
        else if (flag === 'registrationSuccess') {
            this.loginFormFlag = false;
            this.registerFlag = false;
            this.forgetPasswordFlag = false;
            this.registrationSuccess = true;
        }
    };
    LoginPageComponent.prototype.stateSelected = function (stateVal) {
        if (stateVal === '0') {
            this.selectedState = true;
        }
        else {
            this.selectedState = false;
        }
    };
    LoginPageComponent.prototype.register = function (registerObj) {
        var _this = this;
        registerObj.role = "admin";
        registerObj.createdFrom = "admin-portal";
        this.registerProvider.register(registerObj).then(function (res) {
            if (res.status === 200) {
                _this.toastrService.pop('success', 'Registered !', 'User has been successfully registered. Please go to Login page to sign in the application');
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    LoginPageComponent.prototype.login = function (loginObj) {
        var _this = this;
        loginObj.role = 'admin';
        loginObj.loginFrom = 'admin-portal';
        this.loginProvider.login(loginObj).then(function (res) {
            if (res.status === 200) {
                _this.router.navigate(['/dashboard']);
            }
            else if (res.status === 401) {
                _this.toastrService.pop('error', 'Invalid Credentials', 'Email Address or Password entered are incorrect. Please enter correct credentials and try again !');
            }
            else if (res.status === 202) {
                _this.toastrService.pop('error', 'Unauthorised Access !', 'You are not authorised to access this application !');
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    LoginPageComponent.prototype.ngOnInit = function () {
        this.newUser.state = "0";
        //this.toggleForms('registrationSuccess');
    };
    LoginPageComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './app/pages/login/app.login.component.html',
            styleUrls: ['./app/pages/login/app.login.component.css'],
            providers: [app_register_provider_1.RegisterProvider, app_login_provider_1.LoginProvider]
        }), 
        __metadata('design:paramtypes', [router_1.Router, angular2_toaster_1.ToasterService, app_register_provider_1.RegisterProvider, app_login_provider_1.LoginProvider])
    ], LoginPageComponent);
    return LoginPageComponent;
}());
exports.LoginPageComponent = LoginPageComponent;
//# sourceMappingURL=app.login.page.component.js.map