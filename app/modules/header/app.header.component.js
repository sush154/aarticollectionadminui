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
var AppHeaderComponent = (function () {
    function AppHeaderComponent(router, location) {
        this.router = router;
        this.location = location;
        this.menuHeader = true;
    }
    AppHeaderComponent.prototype.navigate = function (pageName) {
        var navigatedPage = "/" + pageName;
        this.selectedPage = pageName;
        this.router.navigate([navigatedPage]);
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
    };
    AppHeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './app/modules/header/app.header.component.html',
            styleUrls: ['./app/modules/header/app.header.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());
exports.AppHeaderComponent = AppHeaderComponent;
//# sourceMappingURL=app.header.component.js.map