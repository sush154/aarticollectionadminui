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
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/dashboard']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'admin-collection',
            template: "<app-header></app-header>\n        <div class=\"container p-t-50px\"><router-outlet></router-outlet></div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*<div class="container-fluid">
                      <div class="row">
                          <div class="col-3">
                              <div class="d-inline-block" style="height: 100%"><app-sidenav></app-sidenav></div>
                          </div>
                          <div class="col-9">
                              <div class="d-inline-block align-top"><router-outlet></router-outlet></div>
                          </div>
                      </div>
                  </div>*/ 
//# sourceMappingURL=app.component.js.map