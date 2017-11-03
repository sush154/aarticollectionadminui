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
var app_auth_provider_1 = require('../providers/auth/app.auth.provider');
var AppComponent = (function () {
    function AppComponent(router, location, authProvider) {
        this.router = router;
        this.location = location;
        this.authProvider = authProvider;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* Authenticate and navigate accordingly*/
        this.authProvider.authUser().then(function (res) {
            if (res.status === 401) {
                _this.router.navigate(['/login']);
            }
            else if (res.status === 200) {
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'admin-collection',
            template: "<router-outlet></router-outlet>",
            providers: [app_auth_provider_1.AuthProvider]
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location, app_auth_provider_1.AuthProvider])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map