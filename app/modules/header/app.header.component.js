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
var common_1 = require('@angular/common');
var angular2_toaster_1 = require('angular2-toaster');
var app_logout_provider_1 = require('../../providers/logout/app.logout.provider');
var AppHeaderComponent = (function () {
    function AppHeaderComponent(router, location, logoutProvider, toastrService) {
        this.router = router;
        this.location = location;
        this.logoutProvider = logoutProvider;
        this.toastrService = toastrService;
        this.menuHeader = true;
        this.displayAdminsPage = false;
    }
    AppHeaderComponent.prototype.navigate = function (pageName) {
        var navigatedPage = "/" + pageName;
        this.selectedPage = pageName;
        this.router.navigate([navigatedPage]);
    };
    AppHeaderComponent.prototype.logout = function () {
        var _this = this;
        this.logoutProvider.logout().then(function (res) {
            if (res.status === 200) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    AppHeaderComponent.prototype.ngDoCheck = function () {
        if (this.location.path().indexOf('dashboard') > -1) {
            this.selectedPage = 'dashboard';
        }
        else if (this.location.path().indexOf('products') > -1) {
            this.selectedPage = 'products';
        }
        else if (this.location.path().indexOf('orders') > -1) {
            this.selectedPage = 'orders';
        }
        else if (this.location.path().indexOf('customers') > -1) {
            this.selectedPage = 'customers';
        }
    };
    AppHeaderComponent.prototype.ngOnInit = function () {
        var cookies = document.cookie.split(';');
        var userRole;
        for (var _i = 0, cookies_1 = cookies; _i < cookies_1.length; _i++) {
            var c = cookies_1[_i];
            if (c.split('=')[0].trim() === 'userRole') {
                userRole = c.split('=')[1].trim();
            }
        }
        if (userRole === 'admin') {
            this.displayAdminsPage = true;
        }
    };
    AppHeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './app/modules/header/app.header.component.html',
            styleUrls: ['./app/modules/header/app.header.component.css'],
            providers: [app_logout_provider_1.LogoutProvider]
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location, app_logout_provider_1.LogoutProvider, angular2_toaster_1.ToasterService])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());
exports.AppHeaderComponent = AppHeaderComponent;
//# sourceMappingURL=app.header.component.js.map