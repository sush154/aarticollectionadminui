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
var app_communicate_service_1 = require('../../../util/communication/app.communicate.service');
var CustomerDetailsPageComponent = (function () {
    function CustomerDetailsPageComponent(communicateService) {
        var _this = this;
        this.communicateService = communicateService;
        this.subscription = this.communicateService.value$.subscribe(function (value) {
            _this.customerObj = value;
            //console.log(value);
        });
    }
    CustomerDetailsPageComponent.prototype.ngOnInit = function () {
        //console.log(this.customerObj);
    };
    CustomerDetailsPageComponent = __decorate([
        core_1.Component({
            selector: 'customer-details-page',
            templateUrl: './app/pages/customer/details/app.customer.details.page.component.html',
            styleUrls: ['./app/pages/customer/details/app.customer.details.page.component.css'],
            providers: [app_communicate_service_1.CommunicationService]
        }), 
        __metadata('design:paramtypes', [app_communicate_service_1.CommunicationService])
    ], CustomerDetailsPageComponent);
    return CustomerDetailsPageComponent;
}());
exports.CustomerDetailsPageComponent = CustomerDetailsPageComponent;
//# sourceMappingURL=app.customer.details.page.component.js.map